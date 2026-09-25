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

function decodeXml(value: string): string {
  return value.replace(/&(?:amp|lt|gt|quot|apos|#\d+|#x[0-9a-f]+);/gi, entity => {
    const named: Record<string, string> = { '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&apos;': "'" };
    if (named[entity]) return named[entity];
    const hex = entity.match(/^&#x([0-9a-f]+);$/i);
    const decimal = entity.match(/^&#(\d+);$/);
    return hex ? String.fromCodePoint(parseInt(hex[1], 16)) : decimal ? String.fromCodePoint(parseInt(decimal[1], 10)) : entity;
  });
}

export function parseYouTubeFeed(xml: string): YouTubeVideoInfo[] {
  const field = (entry: string, tag: string) => decodeXml(entry.match(new RegExp(`<${tag}>([\\s\\S]*?)<\\/${tag}>`))?.[1]?.trim() || '');
  const entries = xml.match(/<entry>[\s\S]*?<\/entry>/g) || [];
  return entries.map(entry => {
    const videoId = field(entry, 'yt:videoId');
    const rawTitle = field(entry, 'title');
    const publishedAt = new Date(field(entry, 'published'));
    if (!/^[\w-]{11}$/.test(videoId) || !rawTitle || Number.isNaN(publishedAt.getTime())) return null;
    const parsed = parseTitlePattern(rawTitle);
    return {
      videoId, rawTitle, episodeTitle: parsed?.episodeTitle || rawTitle,
      seriesName: parsed?.seriesName || '', weekNumber: parsed?.weekNumber || 0,
      description: field(entry, 'media:description').substring(0, 500),
      thumbnailUrl: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`, publishedAt,
    };
  }).filter((video): video is YouTubeVideoInfo => video !== null).reverse();
}

async function fetchRecentVideos(channelUrl: string): Promise<YouTubeVideoInfo[]> {
  const channelId = await resolveChannelId(channelUrl);
  if (!channelId) throw new Error(`Não foi possível resolver o channelId para: ${channelUrl}`);
  const { data } = await axios.get<string>(`https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`, { timeout: 15000 });
  const videos = parseYouTubeFeed(data);
  if (!videos.length) throw new Error('Nenhum vídeo válido no RSS do canal');
  return videos;
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

    const recentVideos = await fetchRecentVideos(channelUrl);
    let newestAdded: Awaited<ReturnType<typeof addVideo>> | null = null;
    let count = 0;
    for (const video of recentVideos) {
      // Vídeos avulsos não fazem parte do catálogo de séries do Sozo.
      if (!video.seriesName) continue;
      if (await videoExistsInDb(video.videoId)) continue;
      newestAdded = await addVideo(video);
      count++;
    }
    const latestVideo = recentVideos[recentVideos.length - 1];
    await upsertSyncConfig({ lastSyncAt: new Date(), lastVideoId: latestVideo.videoId });
    if (count) return {
      status: 'success', message: `${count} vídeo(s) adicionado(s)`,
      videoId: newestAdded!.videoId, videoTitle: newestAdded!.videoTitle,
      parsedTitle: newestAdded!.parsedTitle, action: newestAdded!.action,
    };
    await insertSyncHistory({ status: 'no_new_videos', videoId: latestVideo.videoId,
      videoTitle: latestVideo.rawTitle, action: 'none', details: 'Nenhum episódio novo de série; vídeos avulsos ignorados' });
    return { status: 'no_new_videos', message: 'Nenhum episódio novo de série encontrado',
      videoId: latestVideo.videoId, videoTitle: latestVideo.rawTitle };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error("[YouTubeSync] Erro:", errorMessage);
    try { await insertSyncHistory({ status: "error", errorMessage }); } catch (historyError) { console.error('[YouTubeSync] Histórico indisponível:', historyError); }
    return { status: "error", message: errorMessage };
  }
}

async function addVideo(latestVideo: YouTubeVideoInfo) {
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
      titulo: latestVideo.episodeTitle, // salva apenas o título real, sem semana/série
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
}
