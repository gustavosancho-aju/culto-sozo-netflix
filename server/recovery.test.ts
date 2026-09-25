import { afterEach, describe, expect, it, vi } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

vi.mock("drizzle-orm/node-postgres", () => ({
  drizzle: vi.fn(() => { throw new Error("Database unavailable in regression test"); }),
}));

const anonymousContext: TrpcContext = {
  user: null,
  req: { headers: {} } as TrpcContext["req"],
  res: {} as TrpcContext["res"],
};

afterEach(() => vi.unstubAllEnvs());

describe("public catalog recovery without managed services", () => {
  it("serves a consistent catalog and resolves every series and player link", async () => {
    vi.stubEnv("DATABASE_URL", "");
    const caller = appRouter.createCaller(anonymousContext);
    const series = await caller.content.series();
    const episodes = await caller.content.allEpisodes();
    expect(series).toHaveLength(17);
    expect(episodes).toHaveLength(67);
    expect(new Set(episodes.map(ep => ep.id)).size).toBe(episodes.length);
    expect(new Set(episodes.map(ep => ep.youtubeVideoId)).size).toBe(episodes.length);

    for (const item of series) {
      const detail = await caller.content.seriesById({ id: item.id });
      expect(detail?.episodes.length).toBeGreaterThan(0);
      expect(typeof detail?.destaque).toBe("boolean");
    }
    for (const episode of episodes) {
      expect(series.some(item => item.id === episode.serieId)).toBe(true);
      expect(episode.youtubeVideoId).toMatch(/^[A-Za-z0-9_-]{11}$/);
      expect(await caller.content.episodeById({ id: episode.id })).toMatchObject(episode);
    }
    expect(await caller.content.seriesById({ id: "missing-series" })).toBeNull();
    expect(await caller.content.episodeById({ id: "missing-episode" })).toBeNull();
  });

  it("rejects submissions instead of pretending unsaved testimony was stored", async () => {
    vi.stubEnv("DATABASE_URL", "");
    const caller = appRouter.createCaller(anonymousContext);
    expect(await caller.status()).toMatchObject({ catalogSource: "snapshot", testimonialsAvailable: false, loginAvailable: false });
    await expect(caller.testimonials.submit({ content: "Um testemunho válido para testar a indisponibilidade." }))
      .rejects.toMatchObject({ code: "SERVICE_UNAVAILABLE" });
    await expect(caller.sync.runNow()).rejects.toMatchObject({ code: "UNAUTHORIZED" });
    await expect(caller.admin.testimonialCounts()).rejects.toMatchObject({ code: "UNAUTHORIZED" });
    expect(await caller.latestVideoId()).toEqual({ lastVideoId: null });
  });

  it("does not report snapshot data as a working database", async () => {
    vi.stubEnv("DATABASE_URL", "postgresql://unavailable.invalid/catalog");
    const caller = appRouter.createCaller(anonymousContext);
    const warning = vi.spyOn(console, "warn").mockImplementation(() => {});
    try {
      await expect(caller.content.series()).rejects.toThrow("Database not available");
      await expect(caller.content.allEpisodes()).rejects.toThrow("Database not available");
    } finally {
      warning.mockRestore();
    }
  });
});
