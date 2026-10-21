import { describe, expect, it } from "vitest";
import { latestPublishedVideo, mergePublishedEpisodes, mergePublishedSeries, publishedEpisodes, publishedSeries } from "./catalogUpdates";

describe("editorial catalog publication", () => {
  it("publishes the confirmed episode and highlights its new series", () => {
    const old = { ...publishedSeries[0], id: "old-series", ordem: 9 };
    const series = mergePublishedSeries([old]);
    expect(series[0]).toMatchObject({ id: "aprovados-2026", destaque: true });
    expect(series.find(item => item.id === old.id)?.destaque).toBe(false);
    expect(mergePublishedEpisodes([])).toContainEqual(publishedEpisodes[0]);
    expect(mergePublishedEpisodes([], "old-series")).toEqual([]);
  });

  it("keeps the database episode URL when synchronization catches up", () => {
    const synchronized = { ...publishedEpisodes[0], id: "canonical-database-id", titulo: "Título atualizado no YouTube" };
    expect(mergePublishedEpisodes([synchronized])).toEqual([synchronized]);
    const series = { ...publishedSeries[0], descricao: null, ordem: 12 };
    expect(mergePublishedSeries([series])).toEqual([series]);
  });

  it("does not displace a newer featured series", () => {
    const newer = { ...publishedSeries[0], id: "november-series", ordem: 11 };
    const result = mergePublishedSeries([newer]);
    expect(result.find(item => item.id === newer.id)?.destaque).toBe(true);
    expect(result.filter(item => item.destaque)).toHaveLength(1);
  });

  it("allows a later successful synchronization to replace the new-video badge", () => {
    expect(latestPublishedVideo(null)).toBe("GIzggcamUQM");
    expect(latestPublishedVideo({ lastSyncAt: new Date("2026-10-20"), lastVideoId: "older-video" })).toBe("GIzggcamUQM");
    expect(latestPublishedVideo({ lastSyncAt: new Date("2026-10-22"), lastVideoId: "later-video" })).toBe("later-video");
  });
});
