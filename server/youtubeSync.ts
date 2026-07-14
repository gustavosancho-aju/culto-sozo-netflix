/**
 * YouTube Sync Service
 * Busca o vídeo mais recente do canal e adiciona ao banco de dados automaticamente.
 *
 * Padrão de título esperado:
 *   "1º SEMANA | O QUE VOCÊ TEM MEDO DE PERDER? | LIVRES PARA PROSPERAR"
 *    ↑ Semana     ↑ Título do episódio              ↑ Nome da série
 *
 * Lógica:
 * 1. Busca o último vídeo do canal via RSS feed público
 * 2. Extrai semana, título e série do padrão acima
 * 3. Verifica se o vídeo já existe no banco
 * 4. Se o nome da série bater com uma série existente → adiciona episódio no banco
 * 5. Se for uma série nova → cria a série no banco e adiciona o episódio
 * 6. Registra o resultado no histórico
 */

import axios from "axios";
import {
  insertSyncHistory, getSyncConfig, upsertSyncConfig,
  getAllSeries, getEpisodesBySeries, videoExistsInDb,
  insertSeries, insertEpisode, setSeriesDestaque
} from "./db";

const MONTH_NAMES: Record<number, string> = {
  1: "Janeiro", 2: "Fevereiro", 3: "Março", 4: "Abril",
  5: "Maio", 6: "Junho", 7: "Julho", 8: "Agosto",
  9: "Setembro", 10: "Outubro", 11: "Novembro", 12: "Dezembro"
};

interface YouTubeVideoInfo {
  videoId: string;
  rawTitle: string;
  episodeTitle: string;
  seriesName: string;
  weekNumber: number;
  description: string;
  thumbnailUrl: string;
  publishedAt: Date;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function parseTitlePattern(rawTitle: string): {
  weekNumber: number;
  episodeTitle: string;
  seriesName: string;
} | null {
  const parts = rawTitle.split("|").map(p => p.trim());

  if (parts.length < 3) {
    if (parts.length === 2) {
      return { weekNumber: 0, episodeTitle: parts[0], seriesName: parts[1] };
    }
    return null;
  }

  const weekPart = parts[0];
  const weekMatch = weekPart.match(/(\d+)/);
  const weekNumber = weekMatch ? parseInt(weekMatch[1]) : 1;
  const episodeTitle = parts[1];
  const seriesName = parts[2];

  return { weekNumber, episodeTitle, seriesName };
}

async function resolveChannelId(channelUrl: string): Promise<string | null> {
  try {
    const directIdMatch = channelUrl.match(/\/channel\/(UC[a-zA-Z0-9_-]{22})/);
    if (directIdMatch) return directIdMatch[1];

    // Se já for um channelId puro (UCxxxxxx)
    const pureIdMatch = channelUrl.match(/^UC[a-zA-Z0-9_-]{22}$/);
    if (pureIdMatch) return channelUrl;

    const res = await axios.get(channelUrl, {
      timeout: 15000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept-Language': 'pt-BR,pt;q=0.9',
      },
    });
    const html = res.data as string;

    const canonicalMatch = html.match(/rel="canonical"\s+href="https:\/\/www\.youtube\.com\/channel\/(UC[a-zA-Z0-9_-]{22})"/);
    if (canonicalMatch) return canonicalMatch[1];

    const ogMatch = html.match(/property="og:url"\s+content="https:\/\/www\.youtube\.com\/channel\/(UC[a-zA-Z0-9_-]{22})"/);
    if (ogMatch) return ogMatch[1];

    const jsonMatch = html.match(/"externalChannelId":"(UC[a-zA-Z0-9_-]{22})"/);
    if (jsonMatch) return jsonMatch[1];

    return null;
  } catch (err) {
    console.error("[YouTubeSync] Erro ao resolver channelId:", err);
    return null;
  }
}

async function fetchLatestVideo(channelUrl: string): Promise<YouTubeVideoInfo | null> {
  try {
    let channelId = await resolveChannelId(channelUrl);

    if (!channelId) {
      const fallbackMatch = channelUrl.match(/UC[a-zA-Z0-9_-]{22}/);
      channelId = fallbackMatch ? fallbackMatch[0] : null;
    }

    if (!channelId) throw new Error(`Não foi possível resolver o channelId para: ${channelUrl}`);

    const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
    console.log(`[YouTubeSync] Usando RSS: ${rssUrl}`);

    const rssResponse = await axios.get(rssUrl, { timeout: 10000 });
    const rssContent = rssResponse.data as string;

    const videoIdMatch = rssContent.match(/<yt:videoId>([^<]+)<\/yt:videoId>/);
    const titleMatches = rssContent.match(/<title>([^<]+)<\/title>/g);
    const publishedMatches = rssContent.match(/<published>([^<]+)<\/published>/g);
    const descriptionMatch = rssContent.match(/<media:description>([^<]*)<\/media:description>/);

    if (!videoIdMatch) throw new Error("Não foi possível extrair o videoId do RSS");

    const videoId = videoIdMatch[1];
    const rawTitle = titleMatches && titleMatches[1]
      ? titleMatches[1].replace(/<\/?title>/g, "").trim()
      : "Vídeo sem título";

    const publishedStr = publishedMatches && publishedMatches[1]
      ? publishedMatches[1].replace(/<\/?published>/g, "").trim()
      : new Date().toISOString();

    const description = descriptionMatch
      ? descriptionMatch[1].trim().substring(0, 500)
      : "";

    const parsed = parseTitlePattern(rawTitle);

    return {
      videoId,
      rawTitle,
      episodeTitle: parsed?.episodeTitle || rawTitle,
      seriesName: parsed?.seriesName || "",
      weekNumber: parsed?.weekNumber || 1,
      description,
      thumbnailUrl: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
      publishedAt: new Date(publishedStr),
    };
  } catch (error) {
    console.error("[YouTubeSync] Erro ao buscar vídeo:", error);
    throw error;
  }
}

export async function runYouTubeSync(): Promise<{
  status: "success" | "error" | "no_new_videos";
  message: string;
  videoId?: string;
  videoTitle?: string;
  parsedTitle?: { weekNumber: number; episodeTitle: string; seriesName: string };
  action?: string;
}> {
  console.log("[YouTubeSync] Iniciando sincronização...");

  try {
    const config = await getSyncConfig();
    const channelUrl = config?.channelUrl || "https://www.youtube.com/@Lorenaamelo";

    // 1. Buscar o vídeo mais recente
    const latestVideo = await fetchLatestVideo(channelUrl);
    if (!latestVideo) {
      await insertSyncHistory({ status: "error", errorMessage: "Não foi possível buscar o vídeo" });
      return { status: "error", message: "Não foi possível buscar o vídeo mais recente" };
    }

    console.log(`[YouTubeSync] Vídeo: "${latestVideo.rawTitle}" (${latestVideo.videoId})`);
    console.log(`[YouTubeSync] Parsed → Semana: ${latestVideo.weekNumber} | Episódio: "${latestVideo.episodeTitle}" | Série: "${latestVideo.seriesName}"`);

    // 2. Verificar se já existe no banco
    const alreadyExists = await videoExistsInDb(latestVideo.videoId);
    if (alreadyExists) {
      await insertSyncHistory({
        status: "no_new_videos",
        videoId: latestVideo.videoId,
        videoTitle: latestVideo.rawTitle,
        action: "none",
        details: "Vídeo já existe no sistema"
      });
      await upsertSyncConfig({ lastSyncAt: new Date(), lastVideoId: latestVideo.videoId });
      return {
        status: "no_new_videos",
        message: "Nenhum vídeo novo encontrado",
        videoId: latestVideo.videoId,
        videoTitle: latestVideo.rawTitle,
        parsedTitle: {
          weekNumber: latestVideo.weekNumber,
          episodeTitle: latestVideo.episodeTitle,
          seriesName: latestVideo.seriesName,
        },
      };
    }

    // 3. Determinar ação usando dados do banco
    const videoYear = latestVideo.publishedAt.getFullYear();
    const videoMonth = latestVideo.publishedAt.getMonth() + 1;
    const monthName = MONTH_NAMES[videoMonth];
    const allSeries = await getAllSeries();

    let targetSeriesId: string;
    let targetSeriesTitle: string;
    let episodeOrder: number;
    let isNewSeries = false;

    if (latestVideo.seriesName) {
      // Buscar série pelo nome extraído do título
      const normalizedSeriesName = latestVideo.seriesName.toLowerCase().trim();
      const matchingSeries = allSeries.find(s =>
        s.titulo.toLowerCase().includes(normalizedSeriesName) ||
        normalizedSeriesName.includes(s.titulo.toLowerCase().split(" - ")[0].toLowerCase())
      );

      if (matchingSeries) {
        const episodesOfSeries = await getEpisodesBySeries(matchingSeries.id);
        episodeOrder = latestVideo.weekNumber > 0
          ? latestVideo.weekNumber
          : Math.max(...episodesOfSeries.map(e => e.ordem), 0) + 1;
        targetSeriesId = matchingSeries.id;
        targetSeriesTitle = matchingSeries.titulo;
      } else {
        // Nova série
        isNewSeries = true;
        const maxOrdem = Math.max(...allSeries.map(s => s.ordem), 0);
        targetSeriesId = `${slugify(latestVideo.seriesName)}-${videoYear}`;
        targetSeriesTitle = `${latestVideo.seriesName} - ${monthName} ${videoYear}`;
        episodeOrder = latestVideo.weekNumber > 0 ? latestVideo.weekNumber : 1;

        await insertSeries({
          id: targetSeriesId,
          titulo: targetSeriesTitle,
          descricao: `Série "${latestVideo.seriesName}" de ${monthName} ${videoYear}.`,
          destaque: false,
          ordem: maxOrdem + 1,
          ano: videoYear,
        });
      }
    } else {
      // Fallback: usar mês/ano
      const seriesOfYear = allSeries.filter(s => s.ano === videoYear).sort((a, b) => b.ordem - a.ordem);
      const latestSeriesOfYear = seriesOfYear[0];

      if (latestSeriesOfYear) {
        const latestSeriesMonth = Object.entries(MONTH_NAMES).find(([, name]) =>
          latestSeriesOfYear.titulo.includes(name)
        );
        if (latestSeriesMonth && parseInt(latestSeriesMonth[0]) === videoMonth) {
          const episodesOfSeries = await getEpisodesBySeries(latestSeriesOfYear.id);
          episodeOrder = Math.max(...episodesOfSeries.map(e => e.ordem), 0) + 1;
          targetSeriesId = latestSeriesOfYear.id;
          targetSeriesTitle = latestSeriesOfYear.titulo;
        } else {
          isNewSeries = true;
          const maxOrdem = Math.max(...allSeries.map(s => s.ordem), 0);
          targetSeriesId = `${slugify(monthName)}-${videoYear}`;
          targetSeriesTitle = `Nova Série - ${monthName} ${videoYear}`;
          episodeOrder = 1;
          await insertSeries({
            id: targetSeriesId,
            titulo: targetSeriesTitle,
            descricao: `Série de ${monthName} ${videoYear}.`,
            destaque: false,
            ordem: maxOrdem + 1,
            ano: videoYear,
          });
        }
      } else {
        isNewSeries = true;
        targetSeriesId = `${slugify(monthName)}-${videoYear}`;
        targetSeriesTitle = `Nova Série - ${monthName} ${videoYear}`;
        episodeOrder = 1;
        await insertSeries({
          id: targetSeriesId,
          titulo: targetSeriesTitle,
          descricao: `Série de ${monthName} ${videoYear}.`,
          destaque: false,
          ordem: 1,
          ano: videoYear,
        });
      }
    }

    // 4. Inserir episódio no banco
    const cleanTitle = latestVideo.episodeTitle.replace(/"/g, "'");
    const cleanDesc = (latestVideo.description.replace(/"/g, "'").replace(/\n/g, " ").substring(0, 200))
      || `Semana ${episodeOrder}: ${cleanTitle}`;
    const episodeId = `${targetSeriesId}-ep${episodeOrder}-${Date.now()}`;

    await insertEpisode({
      id: episodeId,
      serieId: targetSeriesId,
      ordem: episodeOrder,
      titulo: latestVideo.rawTitle,
      youtubeVideoId: latestVideo.videoId,
      duracao: "1h",
      descricaoCurta: cleanDesc,
    });

    // 5. Definir como série de destaque
    await setSeriesDestaque(targetSeriesId);

    // 6. Registrar no histórico
    await insertSyncHistory({
      status: "success",
      videoId: latestVideo.videoId,
      videoTitle: latestVideo.episodeTitle,
      videoDescription: latestVideo.description,
      action: isNewSeries ? "new_series" : "new_episode",
      seriesId: targetSeriesId,
      seriesTitle: targetSeriesTitle,
      episodeOrder,
      details: isNewSeries
        ? `Nova série "${targetSeriesTitle}" criada automaticamente`
        : `Episódio ${episodeOrder} adicionado à série "${targetSeriesTitle}"`
    });

    // 7. Atualizar config
    await upsertSyncConfig({ lastSyncAt: new Date(), lastVideoId: latestVideo.videoId });

    return {
      status: "success",
      message: isNewSeries
        ? `Nova série "${targetSeriesTitle}" criada com o episódio "${latestVideo.episodeTitle}"`
        : `"${latestVideo.episodeTitle}" adicionado como episódio ${episodeOrder} de "${targetSeriesTitle}"`,
      videoId: latestVideo.videoId,
      videoTitle: latestVideo.episodeTitle,
      parsedTitle: {
        weekNumber: latestVideo.weekNumber,
        episodeTitle: latestVideo.episodeTitle,
        seriesName: latestVideo.seriesName,
      },
      action: isNewSeries ? "new_series" : "new_episode",
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error("[YouTubeSync] Erro:", errorMessage);
    await insertSyncHistory({ status: "error", errorMessage });
    return { status: "error", message: errorMessage };
  }
}
