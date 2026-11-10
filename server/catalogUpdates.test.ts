import { describe, expect, it } from "vitest";
import { latestPublishedVideo, mergePublishedEpisodes, mergePublishedSeries, publishedEpisodes, publishedSeries } from "./catalogUpdates";

describe("editorial catalog publication", () => {
  const november = publishedSeries.find(item => item.id === 'os-segredos-de-uma-vida-prospera-2026')!;
  const episode = publishedEpisodes.find(item => item.youtubeVideoId === 'B0yqmluQ04E')!;

  it("publishes the confirmed November episode and highlights the newest series", () => {
    const old = { ...publishedSeries[0], id: "old-series", ordem: 9 };
    const series = mergePublishedSeries([old]);
    expect(series[0]).toMatchObject({ id: november.id, destaque: true });
    expect(series.find(item => item.id === old.id)?.destaque).toBe(false);
    expect(series.filter(item => item.destaque)).toHaveLength(1);
    expect(mergePublishedEpisodes([], november.id)).toContainEqual(episode);
    expect(mergePublishedEpisodes([], "old-series")).toEqual([]);
  });

  it("keeps the database episode URL and title when synchronization catches up", () => {
    const synchronized = { ...episode, id: "canonical-database-id", titulo: "Título atualizado no YouTube" };
    const result = mergePublishedEpisodes([synchronized], november.id);
    expect(result.filter(item => item.youtubeVideoId === episode.youtubeVideoId)).toEqual([synchronized]);
    const series = { ...november, descricao: null, ordem: 13 };
    expect(mergePublishedSeries([series]).filter(item => item.id === november.id)).toEqual([series]);
  });

  it("does not displace a newer featured series", () => {
    const newer = { ...november, id: "newer-series", ordem: 14 };
    const result = mergePublishedSeries([newer]);
    expect(result.find(item => item.id === newer.id)?.destaque).toBe(true);
    expect(result.filter(item => item.destaque)).toHaveLength(1);
  });

  it("allows a later successful synchronization to replace the new-video badge", () => {
    expect(latestPublishedVideo(null)).toBe("B0yqmluQ04E");
    expect(latestPublishedVideo({ lastSyncAt: new Date("2026-11-09"), lastVideoId: "older-video" })).toBe("B0yqmluQ04E");
    expect(latestPublishedVideo({ lastSyncAt: new Date("2026-11-11"), lastVideoId: "later-video" })).toBe("later-video");
  });
});
