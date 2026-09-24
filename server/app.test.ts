import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";
import { createServer } from "node:http";
import type { AddressInfo } from "node:net";
import app from "./app";

const server = createServer(app);
let baseUrl: string;

beforeAll(async () => {
  vi.stubEnv("DATABASE_URL", "");
  vi.stubEnv("CRON_SECRET", "regression-test-cron-secret");
  await new Promise<void>(resolve => server.listen(0, "127.0.0.1", resolve));
  baseUrl = `http://127.0.0.1:${(server.address() as AddressInfo).port}`;
});
afterAll(async () => {
  await new Promise<void>((resolve, reject) => server.close(error => error ? reject(error) : resolve()));
  vi.unstubAllEnvs();
});

describe("Vercel-compatible HTTP application", () => {
  it("serves the recovered catalog over tRPC", async () => {
    const response = await fetch(`${baseUrl}/api/trpc/content.series`);
    expect(response.status).toBe(200);
    expect((await response.json()).result.data.json).toHaveLength(17);
  });
  it("protects scheduled sync, and refuses to sync without persistence", async () => {
    const unauthorized = await fetch(`${baseUrl}/api/scheduled/youtube-sync`);
    expect(unauthorized.status).toBe(401);
    const authorized = await fetch(`${baseUrl}/api/scheduled/youtube-sync`, {
      headers: { Authorization: "Bearer regression-test-cron-secret" },
    });
    expect(authorized.status).toBe(503);
  });
  it("returns a JSON 404 for missing API routes", async () => {
    const response = await fetch(`${baseUrl}/api/missing`);
    expect(response.status).toBe(404);
    expect(response.headers.get("content-type")).toContain("application/json");
  });
});
