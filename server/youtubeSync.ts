/**
 * YouTube Sync Service
 * Busca o vídeo mais recente do canal e adiciona ao sistema automaticamente.
 *
 * Padrão de título esperado:
 *   "1º SEMANA | O QUE VOCÊ TEM MEDO DE PERDER? | LIVRES PARA PROSPERAR"
 *    ↑ Semana     ↑ Título do episódio              ↑ Nome da série
 *
 * Lógica:
 * 1. Busca o último vídeo do canal via RSS feed público
 * 2. Tenta extrair semana, título e série do padrão acima
 * 3. Verifica se o vídeo já existe no sistema
 * 4. Se o nome da série bater com uma série existente → adiciona episódio
 * 5. Se for uma série nova → cria a série e adiciona o episódio
 * 6. Registra o resultado no histórico
 */

import axios from "axios";
import { insertSyncHistory, getSyncConfig, upsertSyncConfig } from "./db";
import { INITIAL_SERIES, INITIAL_EPISODES } from "../client/src/constants";
import * as fs from "fs";
import * as path from "path";

const CONSTANTS_PATH = path.resolve(process.cwd(), "client/src/constants.ts");

const MONTH_NAMES: Record<number, string> = {
  1: "Janeiro", 2: "Fevereiro", 3: "Março", 4: "Abril",
  5: "Maio", 6: "Junho", 7: "Julho", 8: "Agosto",
  9: "Setembro", 10: "Outubro", 11: "Novembro", 12: "Dezembro"
};

interface YouTubeVideoInfo {
  videoId: string;
  rawTitle: string;        // Título original do YouTube
  episodeTitle: string;    // Título extraído do padrão (parte do meio)
  seriesName: string;      // Nome da série extraído do padrão (última parte)
  weekNumber: number;      // Número da semana extraído (1, 2, 3...)
  description: string;
  thumbnailUrl: string;
  publishedAt: Date;
}

/**
 * Normaliza string para uso como ID (remove acentos, espaços → hífens)
 */
function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Extrai as partes do padrão de título:
 * "1º SEMANA | TÍTULO DO EPISÓDIO | NOME DA SÉRIE"
 * Retorna { weekNumber, episodeTitle, seriesName } ou null se não seguir o padrão
 */
function parseTitlePattern(rawTitle: string): {
  weekNumber: number;
  episodeTitle: string;
  seriesName: string;
} | null {
  // Separar por "|" e limpar espaços
  const parts = rawTitle.split("|").map(p => p.trim());

  if (parts.length < 3) {
    // Tenta com 2 partes: "TÍTULO | SÉRIE"
    if (parts.length === 2) {
      return {
        weekNumber: 0,
        episodeTitle: parts[0],
        seriesName: parts[1],
      };
    }
    return null;
  }

  // Extrair número da semana da primeira parte (ex: "1º SEMANA", "2ª SEMANA", "SEMANA 3")
  const weekPart = parts[0];
  const weekMatch = weekPart.match(/(\d+)/);
  const weekNumber = weekMatch ? parseInt(weekMatch[1]) : 1;

  const episodeTitle = parts[1];
  const seriesName = parts[2];

  return { weekNumber, episodeTitle, seriesName };
}

/**
 * Resolve o channelId a partir de uma URL de canal do YouTube.
 * Estratégia: scraping da página canônica (não usa oEmbed que retorna 404 para handles).
 */
async function resolveChannelId(channelUrl: string): Promise<string | null> {
  try {
    // Se já for um channelId direto (UCxxxxxx), usar diretamente
    const directIdMatch = channelUrl.match(/\/channel\/(UC[a-zA-Z0-9_-]{22})/);
    if (directIdMatch) return directIdMatch[1];

    // Buscar a página do canal e extrair o canonical URL que contém o channelId
    const res = await axios.get(channelUrl, {
      timeout: 15000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept-Language': 'pt-BR,pt;q=0.9',
      },
    });
    const html = res.data as string;

    // Tentar extrair via link canonical
    const canonicalMatch = html.match(/rel="canonical"\s+href="https:\/\/www\.youtube\.com\/channel\/(UC[a-zA-Z0-9_-]{22})"/);
    if (canonicalMatch) return canonicalMatch[1];

    // Tentar via og:url
    const ogMatch = html.match(/property="og:url"\s+content="https:\/\/www\.youtube\.com\/channel\/(UC[a-zA-Z0-9_-]{22})"/);
    if (ogMatch) return ogMatch[1];

    // Tentar via externalChannelId no JSON embutido
    const jsonMatch = html.match(/"externalChannelId":"(UC[a-zA-Z0-9_-]{22})"/);
    if (jsonMatch) return jsonMatch[1];

    return null;
  } catch (err) {
    console.error("[YouTubeSync] Erro ao resolver channelId:", err);
    return null;
  }
}

/**
 * Busca o vídeo mais recente do canal via RSS feed público do YouTube
 */
async function fetchLatestVideo(channelUrl: string): Promise<YouTubeVideoInfo | null> {
  try {
    // Resolver o channelId a partir da URL do canal
    let channelId = await resolveChannelId(channelUrl);

    // Fallback: se a URL já contiver um channelId embutido, usar diretamente
    if (!channelId) {
      const fallbackMatch = channelUrl.match(/UC[a-zA-Z0-9_-]{22}/);
      channelId = fallbackMatch ? fallbackMatch[0] : null;
    }

    if (!channelId) throw new Error(`Não foi possível resolver o channelId para: ${channelUrl}`);

    const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
    console.log(`[YouTubeSync] Usando RSS: ${rssUrl}`);

    const rssRes = await axios.get(rssUrl, { timeout: 10000 });
    const rssContent = rssRes.data as string;

    // Extrair dados do primeiro vídeo no feed
    const videoIdMatch = rssContent.match(/<yt:videoId>([^<]+)<\/yt:videoId>/);
    const titleMatches = rssContent.match(/<title>([^<]+)<\/title>/g);
    const publishedMatches = rssContent.match(/<published>([^<]+)<\/published>/g);
    const descriptionMatch = rssContent.match(/<media:description>([^<]*)<\/media:description>/);

    if (!videoIdMatch) throw new Error("Não foi possível extrair o videoId do RSS");

    const videoId = videoIdMatch[1];
    // O primeiro <title> é o canal, o segundo é o vídeo
    const rawTitle = titleMatches && titleMatches[1]
      ? titleMatches[1].replace(/<\/?title>/g, "").trim()
      : "Vídeo sem título";

    const publishedStr = publishedMatches && publishedMatches[1]
      ? publishedMatches[1].replace(/<\/?published>/g, "").trim()
      : new Date().toISOString();

    const description = descriptionMatch
      ? descriptionMatch[1].trim().substring(0, 500)
      : "";

    // Tentar extrair padrão do título
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

function readConstantsFile(): string {
  return fs.readFileSync(CONSTANTS_PATH, "utf-8");
}

function videoAlreadyExists(videoId: string, constantsContent: string): boolean {
  return constantsContent.includes(`"${videoId}"`);
}

/**
 * Determina a ação correta usando o nome da série extraído do título.
 * Prioridade:
 * 1. Se o título tem o padrão com nome de série → buscar série pelo nome
 * 2. Fallback: usar mês/ano da data de publicação
 */
function determineAction(video: YouTubeVideoInfo): {
  action: "new_episode" | "new_series";
  targetSeriesId: string;
  targetSeriesTitle: string;
  episodeOrder: number;
  isNewSeries: boolean;
  newSeriesData?: { id: string; titulo: string; descricao: string; ordem: number };
} {
  const videoYear = video.publishedAt.getFullYear();
  const videoMonth = video.publishedAt.getMonth() + 1;
  const monthName = MONTH_NAMES[videoMonth];

  // === ESTRATÉGIA 1: Usar o nome da série do título ===
  if (video.seriesName) {
    // Buscar série existente pelo nome (comparação parcial, case-insensitive)
    const normalizedSeriesName = video.seriesName.toLowerCase().trim();
    const matchingSeries = INITIAL_SERIES.find(s =>
      s.titulo.toLowerCase().includes(normalizedSeriesName) ||
      normalizedSeriesName.includes(s.titulo.toLowerCase().split(" - ")[0].toLowerCase())
    );

    if (matchingSeries) {
      // Série encontrada → adicionar episódio
      const episodesOfSeries = INITIAL_EPISODES.filter(e => e.serieId === matchingSeries.id);
      // Usar o número da semana do título, ou calcular pelo máximo existente
      const episodeOrder = video.weekNumber > 0
        ? video.weekNumber
        : Math.max(...episodesOfSeries.map(e => e.ordem), 0) + 1;

      return {
        action: "new_episode",
        targetSeriesId: matchingSeries.id,
        targetSeriesTitle: matchingSeries.titulo,
        episodeOrder,
        isNewSeries: false,
      };
    }

    // Série não encontrada → criar nova com o nome extraído do título
    const maxOrdem = Math.max(...INITIAL_SERIES.map(s => s.ordem), 0);
    const seriesId = `${slugify(video.seriesName)}-${videoYear}`;
    const seriesTitle = `${video.seriesName} - ${monthName} ${videoYear}`;

    return {
      action: "new_series",
      targetSeriesId: seriesId,
      targetSeriesTitle: seriesTitle,
      episodeOrder: video.weekNumber > 0 ? video.weekNumber : 1,
      isNewSeries: true,
      newSeriesData: {
        id: seriesId,
        titulo: seriesTitle,
        descricao: `Série "${video.seriesName}" de ${monthName} ${videoYear}.`,
        ordem: maxOrdem + 1,
      },
    };
  }

  // === ESTRATÉGIA 2 (fallback): Usar mês/ano ===
  const seriesOfYear = INITIAL_SERIES
    .filter(s => s.ano === videoYear)
    .sort((a, b) => b.ordem - a.ordem);

  if (seriesOfYear.length > 0) {
    const latestSeries = seriesOfYear[0];
    const latestSeriesMonth = Object.entries(MONTH_NAMES).find(([, name]) =>
      latestSeries.titulo.includes(name)
    );

    if (latestSeriesMonth && parseInt(latestSeriesMonth[0]) === videoMonth) {
      const episodesOfSeries = INITIAL_EPISODES.filter(e => e.serieId === latestSeries.id);
      const maxEpOrder = Math.max(...episodesOfSeries.map(e => e.ordem), 0);
      return {
        action: "new_episode",
        targetSeriesId: latestSeries.id,
        targetSeriesTitle: latestSeries.titulo,
        episodeOrder: maxEpOrder + 1,
        isNewSeries: false,
      };
    }
  }

  // Criar nova série pelo mês
  const maxOrdem = Math.max(...INITIAL_SERIES.map(s => s.ordem), 0);
  const seriesId = `${slugify(monthName)}-${videoYear}`;
  const seriesTitle = `Nova Série - ${monthName} ${videoYear}`;
  return {
    action: "new_series",
    targetSeriesId: seriesId,
    targetSeriesTitle: seriesTitle,
    episodeOrder: 1,
    isNewSeries: true,
    newSeriesData: {
      id: seriesId,
      titulo: seriesTitle,
      descricao: `Série de ${monthName} ${videoYear}.`,
      ordem: maxOrdem + 1,
    },
  };
}

/**
 * Atualiza o constants.ts com o novo episódio/série
 */
function updateConstantsFile(
  video: YouTubeVideoInfo,
  decision: ReturnType<typeof determineAction>
): void {
  let content = readConstantsFile();

  // Se for nova série, inserir no início do array
  if (decision.isNewSeries && decision.newSeriesData) {
    const newSeries = decision.newSeriesData;
    const seriesEntry = `  {
    id: "${newSeries.id}",
    titulo: "${newSeries.titulo}",
    descricao: "${newSeries.descricao}",
    destaque: true,
    ordem: ${newSeries.ordem},
    ano: ${video.publishedAt.getFullYear()}
  },\n`;

    content = content.replace(
      /export const INITIAL_SERIES: Series\[\] = \[\n  \{/,
      `export const INITIAL_SERIES: Series[] = [\n${seriesEntry}  {`
    );
    // Desmarcar destaque das outras séries
    content = content.replace(/destaque: true,/g, "destaque: false,");
    // Remarcar a nova série
    content = content.replace(
      `id: "${newSeries.id}",\n    titulo: "${newSeries.titulo}",\n    descricao: "${newSeries.descricao}",\n    destaque: false,`,
      `id: "${newSeries.id}",\n    titulo: "${newSeries.titulo}",\n    descricao: "${newSeries.descricao}",\n    destaque: true,`
    );
  }

  // Usar o título do episódio extraído (sem o nome da série e sem o número da semana)
  const cleanTitle = video.episodeTitle.replace(/"/g, "'");
  const cleanDesc = video.description.replace(/"/g, "'").replace(/\n/g, " ").substring(0, 200)
    || `Semana ${decision.episodeOrder}: ${cleanTitle}`;
  const episodeId = `${decision.targetSeriesId}-ep${decision.episodeOrder}`;

  const newEpisode = `  { 
    id: "${episodeId}", 
    serieId: "${decision.targetSeriesId}", 
    ordem: ${decision.episodeOrder}, 
    titulo: "${cleanTitle}", 
    youtubeVideoId: "${video.videoId}", 
    duracao: "1h", 
    descricaoCurta: "${cleanDesc}" 
  },\n`;

  content = content.replace(
    /export const INITIAL_EPISODES: Episode\[\] = \[\n/,
    `export const INITIAL_EPISODES: Episode[] = [\n${newEpisode}`
  );

  // Atualizar o vídeo de destaque no Home.tsx
  const homePath = path.resolve(process.cwd(), "client/src/pages/Home.tsx");
  let homeContent = fs.readFileSync(homePath, "utf-8");
  homeContent = homeContent.replace(
    /const specificFeaturedEp = loadedData\.episodes\.find\(ep => ep\.youtubeVideoId === "[^"]+"\);/,
    `const specificFeaturedEp = loadedData.episodes.find(ep => ep.youtubeVideoId === "${video.videoId}");`
  );
  fs.writeFileSync(homePath, homeContent, "utf-8");
  fs.writeFileSync(CONSTANTS_PATH, content, "utf-8");
}

/**
 * Função principal de sincronização
 */
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

    // 2. Verificar se já existe
    const constantsContent = readConstantsFile();
    if (videoAlreadyExists(latestVideo.videoId, constantsContent)) {
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

    // 3. Determinar ação
    const decision = determineAction(latestVideo);
    console.log(`[YouTubeSync] Ação: ${decision.action} → série: "${decision.targetSeriesTitle}" | ep: ${decision.episodeOrder}`);

    // 4. Atualizar constants.ts
    updateConstantsFile(latestVideo, decision);

    // 5. Registrar no histórico
    await insertSyncHistory({
      status: "success",
      videoId: latestVideo.videoId,
      videoTitle: latestVideo.episodeTitle,
      videoDescription: latestVideo.description,
      action: decision.action,
      seriesId: decision.targetSeriesId,
      seriesTitle: decision.targetSeriesTitle,
      episodeOrder: decision.episodeOrder,
      details: decision.isNewSeries
        ? `Nova série "${decision.targetSeriesTitle}" criada automaticamente`
        : `Episódio ${decision.episodeOrder} adicionado à série "${decision.targetSeriesTitle}"`
    });

    // 6. Atualizar config
    await upsertSyncConfig({ lastSyncAt: new Date(), lastVideoId: latestVideo.videoId });

    return {
      status: "success",
      message: decision.isNewSeries
        ? `Nova série "${decision.targetSeriesTitle}" criada com o episódio "${latestVideo.episodeTitle}"`
        : `"${latestVideo.episodeTitle}" adicionado como episódio ${decision.episodeOrder} de "${decision.targetSeriesTitle}"`,
      videoId: latestVideo.videoId,
      videoTitle: latestVideo.episodeTitle,
      parsedTitle: {
        weekNumber: latestVideo.weekNumber,
        episodeTitle: latestVideo.episodeTitle,
        seriesName: latestVideo.seriesName,
      },
      action: decision.action,
    };

  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : String(error);
    console.error("[YouTubeSync] Erro:", errorMsg);
    await insertSyncHistory({ status: "error", errorMessage: errorMsg }).catch(() => {});
    return { status: "error", message: errorMsg };
  }
}
