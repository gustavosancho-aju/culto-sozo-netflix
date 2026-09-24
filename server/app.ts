import "dotenv/config";
import express from "express";
import { timingSafeEqual } from "node:crypto";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { registerOAuthRoutes } from "./_core/oauth";
import { registerStorageProxy } from "./_core/storageProxy";
import { createContext } from "./_core/context";
import { sdk } from "./_core/sdk";
import { appRouter } from "./routers";
import { runYouTubeSync } from "./youtubeSync";

const app = express();
app.disable("x-powered-by");
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ limit: "1mb", extended: true }));
registerStorageProxy(app);
registerOAuthRoutes(app);

// Vercel Cron calls GET with Authorization: Bearer <CRON_SECRET>.
// The original authenticated Manus POST remains available for existing users.
app.all("/api/scheduled/youtube-sync", async (req, res) => {
  if (req.method !== "GET" && req.method !== "POST") {
    res.set("Allow", "GET, POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  let authorized = false;
  if (req.method === "GET") {
    const secret = process.env.CRON_SECRET;
    const header = req.headers.authorization ?? "";
    const expected = secret ? `Bearer ${secret}` : "";
    authorized = Boolean(expected) && Buffer.byteLength(header) === Buffer.byteLength(expected)
      && timingSafeEqual(Buffer.from(header), Buffer.from(expected));
  } else {
    try {
      authorized = (await sdk.authenticateRequest(req)).isCron === true;
    } catch {
      authorized = false;
    }
  }

  if (!authorized) return res.status(401).json({ error: "Unauthorized" });
  if (!process.env.DATABASE_URL) {
    return res.status(503).json({ error: "Sincronização temporariamente indisponível." });
  }

  try {
    const result = await runYouTubeSync();
    return res.status(result.status === "error" ? 502 : 200).json({ ok: result.status !== "error", result });
  } catch (error) {
    console.error("[YouTube Sync] Execution failed", error);
    return res.status(500).json({ error: "Não foi possível sincronizar o canal." });
  }
});

app.use("/api/trpc", createExpressMiddleware({ router: appRouter, createContext }));
app.use("/api", (_req, res) => res.status(404).json({ error: "API route not found" }));

// Exporting the app, without listen(), supports Vercel Functions and local tests.
export default app;
