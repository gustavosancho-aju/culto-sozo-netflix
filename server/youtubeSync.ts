/**
 * YouTube Sync Service
 * Busca o vídeo mais recente do canal e adiciona ao sistema automaticamente.
 * Lógica:
 * 1. Busca o último vídeo do canal via YouTube oEmbed + RSS feed
 * 2. Verifica se já existe no sistema (constants.ts)
 * 3. Identifica o mês/ano do vídeo
 * 4. Se o mês for o mesmo da série mais recente → adiciona como novo episódio
 * 5. Se for um mês novo → cria uma nova série e adiciona o episódio
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
  title: string;
  description: string;
  thumbnailUrl: string;
  publishedAt: Date;
}

/**
 * Busca o vídeo mais recente do canal via RSS feed público do YouTube
 */
async function fetchLatestVideo(channelUrl: string): Promise<YouTubeVideoInfo | null> {
  try {
    // Extrair o handle do canal da URL
    const handleMatch = channelUrl.match(/@([^/]+)/);
    if (!handleMatch) throw new Error("URL do canal inválida");
    const handle = handleMatch[1];

    // Buscar o RSS feed do canal (funciona com handle)
    // Primeiro, precisamos do channelId via oEmbed
    const oembedUrl = `https://www.youtube.com/oembed?url=${encodeURIComponent(channelUrl)}&format=json`;
    const oembedRes = await axios.get(oembedUrl, { timeout: 10000 });
    
    // Extrair channelId da URL do author
    const authorUrl = oembedRes.data.author_url as string;
    const channelIdMatch = authorUrl.match(/channel\/([^/]+)/);
    
    let rssUrl: string;
    if (channelIdMatch) {
      rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelIdMatch[1]}`;
    } else {
      // Fallback: tentar buscar diretamente pelo handle
      rssUrl = `https://www.youtube.com/feeds/videos.xml?user=${handle}`;
    }

    const rssRes = await axios.get(rssUrl, { timeout: 10000 });
    const rssContent = rssRes.data as string;

    // Parse do RSS XML para extrair o vídeo mais recente
    const videoIdMatch = rssContent.match(/<yt:videoId>([^<]+)<\/yt:videoId>/);
    const titleMatch = rssContent.match(/<title>([^<]+)<\/title>/g);
    const publishedMatch = rssContent.match(/<published>([^<]+)<\/published>/g);
    const descriptionMatch = rssContent.match(/<media:description>([^<]*)<\/media:description>/);

    if (!videoIdMatch) throw new Error("Não foi possível extrair o videoId do RSS");

    const videoId = videoIdMatch[1];
    // O primeiro <title> é o título do canal, o segundo é o do vídeo
    const videoTitle = titleMatch && titleMatch[1] 
      ? titleMatch[1].replace(/<\/?title>/g, "").trim()
      : "Vídeo sem título";
    
    const publishedStr = publishedMatch && publishedMatch[1]
      ? publishedMatch[1].replace(/<\/?published>/g, "").trim()
      : new Date().toISOString();

    const description = descriptionMatch 
      ? descriptionMatch[1].trim().substring(0, 500)
      : "";

    return {
      videoId,
      title: videoTitle,
      description,
      thumbnailUrl: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
      publishedAt: new Date(publishedStr),
    };
  } catch (error) {
    console.error("[YouTubeSync] Erro ao buscar vídeo:", error);
    throw error;
  }
}

/**
 * Lê o constants.ts atual e extrai as séries e episódios
 */
function readConstantsFile(): string {
  return fs.readFileSync(CONSTANTS_PATH, "utf-8");
}

/**
 * Verifica se o videoId já existe no sistema
 */
function videoAlreadyExists(videoId: string, constantsContent: string): boolean {
  return constantsContent.includes(`"${videoId}"`);
}

/**
 * Determina a ação correta: adicionar episódio ou criar nova série
 */
function determineAction(video: YouTubeVideoInfo, constantsContent: string): {
  action: "new_episode" | "new_series";
  targetSeriesId: string;
  targetSeriesTitle: string;
  episodeOrder: number;
  isNewSeries: boolean;
  newSeriesData?: { id: string; titulo: string; descricao: string; ordem: number };
} {
  const videoMonth = video.publishedAt.getMonth() + 1;
  const videoYear = video.publishedAt.getFullYear();
  const monthName = MONTH_NAMES[videoMonth];

  // Buscar a série mais recente (maior ordem) do mesmo ano
  const seriesOfYear = INITIAL_SERIES
    .filter(s => s.ano === videoYear)
    .sort((a, b) => b.ordem - a.ordem);

  if (seriesOfYear.length === 0) {
    // Nenhuma série do ano → criar nova série
    const maxOrdem = Math.max(...INITIAL_SERIES.map(s => s.ordem), 0);
    const seriesId = `${monthName.toLowerCase().replace(/ç/g, 'c').replace(/ã/g, 'a').replace(/é/g, 'e').replace(/ê/g, 'e').replace(/á/g, 'a').replace(/ó/g, 'o')}-${videoYear}`;
    return {
      action: "new_series",
      targetSeriesId: seriesId,
      targetSeriesTitle: `Nova Série - ${monthName} ${videoYear}`,
      episodeOrder: 1,
      isNewSeries: true,
      newSeriesData: {
        id: seriesId,
        titulo: `Nova Série - ${monthName} ${videoYear}`,
        descricao: `Série de ${monthName} ${videoYear}.`,
        ordem: maxOrdem + 1,
      }
    };
  }

  const latestSeries = seriesOfYear[0];
  
  // Verificar se a série mais recente é do mesmo mês
  const latestSeriesTitle = latestSeries.titulo;
  const latestSeriesMonth = Object.entries(MONTH_NAMES).find(([, name]) => 
    latestSeriesTitle.includes(name)
  );

  if (latestSeriesMonth && parseInt(latestSeriesMonth[0]) === videoMonth) {
    // Mesmo mês → adicionar episódio à série existente
    const episodesOfSeries = INITIAL_EPISODES.filter(e => e.serieId === latestSeries.id);
    const maxEpOrder = Math.max(...episodesOfSeries.map(e => e.ordem), 0);
    return {
      action: "new_episode",
      targetSeriesId: latestSeries.id,
      targetSeriesTitle: latestSeries.titulo,
      episodeOrder: maxEpOrder + 1,
      isNewSeries: false,
    };
  } else {
    // Mês diferente → criar nova série
    const maxOrdem = Math.max(...INITIAL_SERIES.map(s => s.ordem), 0);
    const seriesId = `nova-serie-${monthName.toLowerCase().replace(/ç/g, 'c').replace(/ã/g, 'a').replace(/é/g, 'e').replace(/ê/g, 'e').replace(/á/g, 'a').replace(/ó/g, 'o')}-${videoYear}`;
    return {
      action: "new_series",
      targetSeriesId: seriesId,
      targetSeriesTitle: `Nova Série - ${monthName} ${videoYear}`,
      episodeOrder: 1,
      isNewSeries: true,
      newSeriesData: {
        id: seriesId,
        titulo: `Nova Série - ${monthName} ${videoYear}`,
        descricao: `Série de ${monthName} ${videoYear}.`,
        ordem: maxOrdem + 1,
      }
    };
  }
}

/**
 * Atualiza o constants.ts com o novo episódio/série
 */
function updateConstantsFile(
  video: YouTubeVideoInfo,
  decision: ReturnType<typeof determineAction>
): void {
  let content = readConstantsFile();

  // Se for nova série, adicionar antes da primeira série existente
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

    // Inserir no início do array de séries e marcar as outras como destaque: false
    content = content.replace(
      /export const INITIAL_SERIES: Series\[\] = \[\n  \{/,
      `export const INITIAL_SERIES: Series[] = [\n${seriesEntry}  {`
    );
    // Desmarcar destaque das outras séries
    content = content.replace(/destaque: true,/g, "destaque: false,");
    // Marcar a nova série como destaque
    content = content.replace(
      `id: "${newSeries.id}",\n    titulo: "${newSeries.titulo}",\n    descricao: "${newSeries.descricao}",\n    destaque: false,`,
      `id: "${newSeries.id}",\n    titulo: "${newSeries.titulo}",\n    descricao: "${newSeries.descricao}",\n    destaque: true,`
    );
  }

  // Adicionar o novo episódio no início do array de episódios
  const cleanTitle = video.title.replace(/"/g, "'");
  const cleanDesc = video.description.replace(/"/g, "'").replace(/\n/g, " ").substring(0, 200);
  const episodeId = `${decision.targetSeriesId}-${decision.episodeOrder}`;
  
  const newEpisode = `  { 
    id: "${episodeId}", 
    serieId: "${decision.targetSeriesId}", 
    ordem: ${decision.episodeOrder}, 
    titulo: "${cleanTitle}", 
    youtubeVideoId: "${video.videoId}", 
    duracao: "1h", 
    descricaoCurta: "${cleanDesc || `Semana ${decision.episodeOrder}: ${cleanTitle.split('|')[0].trim()}`}" 
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

    console.log(`[YouTubeSync] Vídeo mais recente: ${latestVideo.title} (${latestVideo.videoId})`);

    // 2. Verificar se já existe
    const constantsContent = readConstantsFile();
    if (videoAlreadyExists(latestVideo.videoId, constantsContent)) {
      await insertSyncHistory({
        status: "no_new_videos",
        videoId: latestVideo.videoId,
        videoTitle: latestVideo.title,
        action: "none",
        details: "Vídeo já existe no sistema"
      });
      await upsertSyncConfig({ lastSyncAt: new Date(), lastVideoId: latestVideo.videoId });
      return { status: "no_new_videos", message: "Nenhum vídeo novo encontrado", videoId: latestVideo.videoId, videoTitle: latestVideo.title };
    }

    // 3. Determinar ação
    const decision = determineAction(latestVideo, constantsContent);
    console.log(`[YouTubeSync] Ação: ${decision.action} → série: ${decision.targetSeriesTitle}`);

    // 4. Atualizar constants.ts
    updateConstantsFile(latestVideo, decision);

    // 5. Registrar no histórico
    await insertSyncHistory({
      status: "success",
      videoId: latestVideo.videoId,
      videoTitle: latestVideo.title,
      videoDescription: latestVideo.description,
      action: decision.action,
      seriesId: decision.targetSeriesId,
      seriesTitle: decision.targetSeriesTitle,
      episodeOrder: decision.episodeOrder,
      details: decision.isNewSeries ? "Nova série criada automaticamente" : "Episódio adicionado à série existente"
    });

    // 6. Atualizar config
    await upsertSyncConfig({ lastSyncAt: new Date(), lastVideoId: latestVideo.videoId });

    return {
      status: "success",
      message: decision.isNewSeries
        ? `Nova série "${decision.targetSeriesTitle}" criada com o vídeo "${latestVideo.title}"`
        : `Vídeo "${latestVideo.title}" adicionado como episódio ${decision.episodeOrder} de "${decision.targetSeriesTitle}"`,
      videoId: latestVideo.videoId,
      videoTitle: latestVideo.title,
      action: decision.action,
    };

  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : String(error);
    console.error("[YouTubeSync] Erro:", errorMsg);
    await insertSyncHistory({ status: "error", errorMessage: errorMsg }).catch(() => {});
    return { status: "error", message: errorMsg };
  }
}
