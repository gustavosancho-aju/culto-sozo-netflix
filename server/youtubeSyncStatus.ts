import deployment from "../vercel.json";
import { getSyncConfig, getSyncHistory } from "./db";

// Configuration and execution evidence are separate: a configured cron does
// not establish that Vercel has invoked it successfully.
export async function getYouTubeSyncStatus() {
  const schedule = deployment.crons.find(job => job.path === "/api/scheduled/youtube-sync")?.schedule ?? null;
  const base = {
    scheduleUtc: schedule,
    lastSuccessfulCheckAt: null as Date | null,
    lastExecution: null as { at: Date; status: string } | null,
    lastVideoId: null as string | null,
  };

  if (!process.env.DATABASE_URL) {
    return { ...base, configured: false, reason: "database_missing" as const };
  }

  try {
    const [config, history] = await Promise.all([getSyncConfig(), getSyncHistory(1)]);
    const latest = history[0];
    const evidence = {
      ...base,
      lastSuccessfulCheckAt: config?.lastSyncAt ?? null,
      lastExecution: latest ? { at: latest.executedAt, status: latest.status } : null,
      lastVideoId: config?.lastVideoId ?? null,
    };
    if (!process.env.CRON_SECRET) {
      return { ...evidence, configured: false, reason: "cron_secret_missing" as const };
    }
    if (config?.enabled === false) {
      return { ...evidence, configured: false, reason: "paused" as const };
    }
    return { ...evidence, configured: Boolean(schedule), reason: schedule ? "configured" as const : "schedule_missing" as const };
  } catch {
    // Do not expose database exceptions or connection details publicly.
    return { ...base, configured: false, reason: "database_unavailable" as const };
  }
}
