import { beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({
  insertSyncHistory: vi.fn(), getSyncConfig: vi.fn(), upsertSyncConfig: vi.fn(),
  getAllSeries: vi.fn(), getEpisodesBySeries: vi.fn(), getEpisodeByVideoId: vi.fn(),
  updateEpisodeTitleByVideoId: vi.fn(), insertSeries: vi.fn(), insertEpisode: vi.fn(),
  setSeriesDestaque: vi.fn(), get: vi.fn(),
}));
vi.mock("./db", () => mocks);
vi.mock("axios", () => ({ default: { get: mocks.get } }));
import { runYouTubeSync } from "./youtubeSync";

const title = "3º SEMANA | PORQUE É TAO DIFICIL RECONHECER NOSSOS ERROS? | APROVADOS";
const feed = `<feed>
  <entry><yt:videoId>abcdefghijk</yt:videoId><title>Vídeo avulso</title><published>2026-10-21T12:00:00Z</published></entry>
  <entry><yt:videoId>GIzggcamUQM</yt:videoId><title>${title}</title><published>2026-10-20T12:00:00Z</published></entry>
</feed>`;

beforeEach(() => {
  vi.resetAllMocks();
  mocks.getSyncConfig.mockResolvedValue({ enabled: true, channelUrl: "UCabcdefghijklmnopqrstuv" });
  mocks.get.mockResolvedValue({ data: feed });
  mocks.getAllSeries.mockResolvedValue([{ id: "aprovados-2026", titulo: "APROVADOS - Outubro 2026", ordem: 10 }]);
  mocks.getEpisodesBySeries.mockResolvedValue([{ ordem: 1 }, { ordem: 2 }]);
});

describe("scheduled ingestion of a new series episode", () => {
  it("adds episode 3, highlights its series and ignores a later standalone video", async () => {
    const result = await runYouTubeSync({ scheduled: true });
    expect(result).toMatchObject({ status: "success", videoId: "GIzggcamUQM", action: "new_episode" });
    expect(mocks.insertEpisode).toHaveBeenCalledTimes(1);
    expect(mocks.insertEpisode).toHaveBeenCalledWith(expect.objectContaining({
      serieId: "aprovados-2026", ordem: 3, youtubeVideoId: "GIzggcamUQM", titulo: title,
    }));
    expect(mocks.insertSeries).not.toHaveBeenCalled();
    expect(mocks.setSeriesDestaque).toHaveBeenCalledWith("aprovados-2026");
    expect(mocks.upsertSyncConfig).toHaveBeenCalledWith({ lastSyncAt: expect.any(Date), lastVideoId: "GIzggcamUQM" });
  });

  it("keeps the last catalog video when the feed only contains standalone videos", async () => {
    mocks.getSyncConfig.mockResolvedValue({ channelUrl: "UCabcdefghijklmnopqrstuv", lastVideoId: "GIzggcamUQM" });
    mocks.get.mockResolvedValue({ data: `<feed><entry><yt:videoId>abcdefghijk</yt:videoId><title>Vídeo avulso</title><published>2026-10-21T12:00:00Z</published></entry></feed>` });
    expect(await runYouTubeSync({ scheduled: true })).toMatchObject({ status: "no_new_videos" });
    expect(mocks.insertEpisode).not.toHaveBeenCalled();
    expect(mocks.upsertSyncConfig).toHaveBeenCalledWith({ lastSyncAt: expect.any(Date), lastVideoId: "GIzggcamUQM" });
  });

  it("does not advance successful-check metadata when persistence fails", async () => {
    mocks.insertEpisode.mockRejectedValue(new Error("Simulated persistence failure"));
    const log = vi.spyOn(console, "error").mockImplementation(() => {});
    try {
      expect(await runYouTubeSync({ scheduled: true })).toMatchObject({ status: "error" });
      expect(mocks.upsertSyncConfig).not.toHaveBeenCalled();
      expect(mocks.insertSyncHistory).toHaveBeenCalledWith(expect.objectContaining({ status: "error" }));
    } finally { log.mockRestore(); }
  });
});
