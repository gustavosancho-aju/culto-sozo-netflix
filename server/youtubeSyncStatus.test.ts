import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const { getSyncConfig, getSyncHistory } = vi.hoisted(() => ({ getSyncConfig: vi.fn(), getSyncHistory: vi.fn() }));
vi.mock("./db", () => ({ getSyncConfig, getSyncHistory }));
import { getYouTubeSyncStatus } from "./youtubeSyncStatus";

beforeEach(() => {
  vi.clearAllMocks();
  vi.stubEnv("DATABASE_URL", "postgresql://example.invalid/test");
  vi.stubEnv("CRON_SECRET", "test-only-secret");
  getSyncConfig.mockResolvedValue(null);
  getSyncHistory.mockResolvedValue([]);
});
afterEach(() => vi.unstubAllEnvs());

describe("scheduled YouTube synchronization diagnostics", () => {
  it("identifies the missing database without attempting a connection", async () => {
    vi.stubEnv("DATABASE_URL", "");
    expect(await getYouTubeSyncStatus()).toMatchObject({ configured: false, reason: "database_missing", scheduleUtc: "0 9 * * *" });
    expect(getSyncConfig).not.toHaveBeenCalled();
  });

  it("distinguishes missing scheduler credentials from a paused automation", async () => {
    vi.stubEnv("CRON_SECRET", "");
    expect(await getYouTubeSyncStatus()).toMatchObject({ configured: false, reason: "cron_secret_missing" });
    vi.stubEnv("CRON_SECRET", "test-only-secret");
    getSyncConfig.mockResolvedValue({ enabled: false });
    expect(await getYouTubeSyncStatus()).toMatchObject({ configured: false, reason: "paused" });
  });

  it("reports configuration separately from actual successful execution", async () => {
    expect(await getYouTubeSyncStatus()).toMatchObject({ configured: true, lastSuccessfulCheckAt: null, lastExecution: null });
    const at = new Date("2026-10-20T09:00:00Z");
    getSyncConfig.mockResolvedValue({ enabled: true, lastSyncAt: at, lastVideoId: "GIzggcamUQM" });
    getSyncHistory.mockResolvedValue([{ executedAt: new Date("2026-10-21T09:00:00Z"), status: "error", errorMessage: "private details" }]);
    const status = await getYouTubeSyncStatus();
    expect(status).toMatchObject({ configured: true, lastSuccessfulCheckAt: at, lastExecution: { status: "error" } });
    expect(JSON.stringify(status)).not.toContain("private details");
  });

  it("reports database failure without disclosing connection details", async () => {
    getSyncConfig.mockRejectedValue(new Error("private connection details"));
    const result = await getYouTubeSyncStatus();
    expect(result).toMatchObject({ configured: false, reason: "database_unavailable" });
    expect(JSON.stringify(result)).not.toContain("private connection details");
  });
});
