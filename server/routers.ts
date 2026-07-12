import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { protectedProcedure, publicProcedure, router } from "./_core/trpc";
import { getSyncHistory, getSyncConfig, upsertSyncConfig } from "./db";
import { runYouTubeSync } from "./youtubeSync";
import { z } from "zod";
import { TRPCError } from "@trpc/server";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),

  // Endpoint público: retorna o ID do último vídeo sincronizado (para o selo 'Novo')
  latestVideoId: publicProcedure.query(async () => {
    const config = await getSyncConfig();
    return { lastVideoId: config?.lastVideoId ?? null };
  }),

  // Admin: Gerenciamento de sincronização com YouTube
  sync: router({
    // Buscar histórico de sincronizações
    history: protectedProcedure.query(async ({ ctx }) => {
      if (ctx.user?.role !== "admin") throw new TRPCError({ code: "FORBIDDEN" });
      return getSyncHistory(50);
    }),

    // Buscar configuração atual
    config: protectedProcedure.query(async ({ ctx }) => {
      if (ctx.user?.role !== "admin") throw new TRPCError({ code: "FORBIDDEN" });
      return getSyncConfig();
    }),

    // Atualizar configuração
    updateConfig: protectedProcedure
      .input(z.object({
        channelUrl: z.string().url().optional(),
        enabled: z.boolean().optional(),
      }))
      .mutation(async ({ ctx, input }) => {
        if (ctx.user?.role !== "admin") throw new TRPCError({ code: "FORBIDDEN" });
        return upsertSyncConfig(input);
      }),

    // Executar sincronização manual
    runNow: protectedProcedure.mutation(async ({ ctx }) => {
      if (ctx.user?.role !== "admin") throw new TRPCError({ code: "FORBIDDEN" });
      const result = await runYouTubeSync();
      return result;
    }),
  }),
});

export type AppRouter = typeof appRouter;
