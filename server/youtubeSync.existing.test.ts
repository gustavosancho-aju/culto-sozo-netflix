import { beforeEach, describe, expect, it, vi } from "vitest";

const { getEpisodeByVideoId, updateEpisodeTitleByVideoId, insertSyncHistory, upsertSyncConfig } = vi.hoisted(() => ({
  getEpisodeByVideoId: vi.fn(),
  updateEpisodeTitleByVideoId: vi.fn(),
  insertSyncHistory: vi.fn(),
  upsertSyncConfig: vi.fn(),
}));

vi.mock("./db", () => ({
  getSyncConfig: async () => ({ channelUrl: "UCabcdefghijklmnopqrstuv" }),
  getEpisodeByVideoId,
  updateEpisodeTitleByVideoId,
  insertSyncHistory,
  upsertSyncConfig,
}));

vi.mock("axios", () => ({
  default: { get: async () => ({ data: `<feed><entry>
    <yt:videoId>80aB2_VlgNk</yt:videoId>
    <title>SEMANA 1 | APROVADO</title>
    <published>2026-10-05T12:00:00Z</published>
  </entry></feed>` }) },
}));

import { runYouTubeSync } from "./youtubeSync";

beforeEach(() => {
  vi.clearAllMocks();
  getEpisodeByVideoId.mockResolvedValue({ titulo: "1º SEMAMA" });
});

describe("sincronização de títulos", () => {
  it("atualiza o nome de um vídeo existente mesmo com título de duas partes", async () => {
    const result = await runYouTubeSync();
    expect(updateEpisodeTitleByVideoId).toHaveBeenCalledWith("80aB2_VlgNk", "SEMANA 1 | APROVADO");
    expect(result).toMatchObject({ status: "success", message: "0 vídeo(s) adicionado(s), 1 título(s) atualizado(s)" });
  });
});
