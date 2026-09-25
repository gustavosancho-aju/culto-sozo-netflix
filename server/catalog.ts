import snapshot from "../data/catalogo-conteudo.json";

// Read-only recovery source. An explicitly configured database always takes
// precedence; database errors must not silently substitute an older snapshot.
export const catalogSeries = snapshot.series
  .map(series => ({ ...series, destaque: Boolean(series.destaque) }))
  .sort((a, b) => b.ano - a.ano || b.ordem - a.ordem);

export const catalogEpisodes = [...snapshot.episodes].sort(
  (a, b) => a.serieId.localeCompare(b.serieId) || a.ordem - b.ordem,
);

export const catalogSnapshotDate = snapshot.generatedAt;
