import updates from "../data/catalogo-atualizacoes.json";

// Explicit editorial additions supplement successful reads, never database
// errors. A synchronized database record wins by video ID, preserving its URL.
export const publishedSeries = updates.series;
export const publishedEpisodes = updates.episodes;

type Series = Omit<typeof publishedSeries[number], "descricao"> & { descricao: string | null };

export function mergePublishedSeries(current: Series[]) {
  const additions = publishedSeries.filter(item => !current.some(existing => existing.id === item.id));
  const highlighted = additions.find(item => item.destaque && !current.some(existing =>
    existing.ano > item.ano || (existing.ano === item.ano && existing.ordem > item.ordem),
  ));
  return [...current.map(item => highlighted ? { ...item, destaque: false } : item),
    ...additions.map(item => ({ ...item, destaque: item.id === highlighted?.id }))]
    .sort((a, b) => b.ano - a.ano || b.ordem - a.ordem);
}

type Episode = Omit<typeof publishedEpisodes[number], "duracao" | "descricaoCurta"> & {
  duracao: string | null;
  descricaoCurta: string | null;
};

export function mergePublishedEpisodes(current: Episode[], seriesId?: string) {
  const additions = publishedEpisodes.filter(item => (!seriesId || item.serieId === seriesId)
    && !current.some(existing => existing.id === item.id || existing.youtubeVideoId === item.youtubeVideoId));
  return [...current, ...additions].sort((a, b) => a.serieId.localeCompare(b.serieId) || a.ordem - b.ordem);
}

export function latestPublishedVideo(config: { lastSyncAt: Date | null; lastVideoId: string | null } | null) {
  return config?.lastSyncAt && config.lastSyncAt.getTime() >= Date.parse(updates.updatedAt)
    ? config.lastVideoId : updates.latestVideoId;
}
