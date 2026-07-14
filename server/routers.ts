import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { protectedProcedure, publicProcedure, router } from "./_core/trpc";
import {
  getSyncHistory, getSyncConfig, upsertSyncConfig,
  createTestimonial, getApprovedTestimonials, getAllTestimonials,
  moderateTestimonial, deleteTestimonial, likeTestimonial,
  getVisitorLikes, countTestimonialsByStatus,
  getAllSeries, getSeriesById, getEpisodesBySeries, getEpisodeById, getAllEpisodes
} from "./db";
import { runYouTubeSync } from "./youtubeSync";
import { z } from "zod";
import { TRPCError } from "@trpc/server";
import crypto from "crypto";

// Helper para gerar hash anônimo do visitante (IP + User-Agent)
function getVisitorHash(req: { headers: Record<string, string | string[] | undefined> }): string {
  const ip = (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() 
    || (req.headers["x-real-ip"] as string) 
    || "unknown";
  const ua = (req.headers["user-agent"] as string) || "unknown";
  return crypto.createHash("sha256").update(`${ip}:${ua}`).digest("hex").slice(0, 32);
}

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

  // === CONTEÚDO (séries e episódios do banco) ===
  content: router({
    // Listar todas as séries
    series: publicProcedure.query(async () => {
      return getAllSeries();
    }),

    // Buscar série por ID com seus episódios
    seriesById: publicProcedure
      .input(z.object({ id: z.string() }))
      .query(async ({ input }) => {
        const serie = await getSeriesById(input.id);
        if (!serie) return null;
        const eps = await getEpisodesBySeries(input.id);
        return { ...serie, episodes: eps };
      }),

    // Buscar episódio por ID
    episodeById: publicProcedure
      .input(z.object({ id: z.string() }))
      .query(async ({ input }) => {
        return getEpisodeById(input.id);
      }),

    // Listar todos os episódios (para o select de depoimentos)
    allEpisodes: publicProcedure.query(async () => {
      return getAllEpisodes();
    }),
  }),

  // Endpoint público: retorna o ID do último vídeo sincronizado (para o selo 'Novo')
  latestVideoId: publicProcedure.query(async () => {
    const config = await getSyncConfig();
    return { lastVideoId: config?.lastVideoId ?? null };
  }),

  // === DEPOIMENTOS (público) ===
  testimonials: router({
    // Listar depoimentos aprovados (feed público)
    list: publicProcedure
      .input(z.object({
        limit: z.number().min(1).max(100).default(20),
        offset: z.number().min(0).default(0),
      }))
      .query(async ({ input }) => {
        return getApprovedTestimonials(input.limit, input.offset);
      }),

    // Enviar novo depoimento (qualquer visitante)
    submit: publicProcedure
      .input(z.object({
        content: z.string().min(10, "Depoimento muito curto").max(1000, "Máximo 1000 caracteres"),
        authorName: z.string().max(128).optional(),
        authorCity: z.string().max(128).optional(),
        linkedEpisodeId: z.string().max(64).optional(),
        linkedEpisodeTitle: z.string().max(256).optional(),
      }))
      .mutation(async ({ input }) => {
        await createTestimonial({
          content: input.content,
          authorName: input.authorName || null,
          authorCity: input.authorCity || null,
          linkedEpisodeId: input.linkedEpisodeId || null,
          linkedEpisodeTitle: input.linkedEpisodeTitle || null,
          status: "pending",
        });
        return { success: true };
      }),

    // Curtir/descurtir depoimento
    like: publicProcedure
      .input(z.object({ testimonialId: z.number() }))
      .mutation(async ({ ctx, input }) => {
        const visitorHash = getVisitorHash(ctx.req as any);
        return likeTestimonial(input.testimonialId, visitorHash);
      }),

    // Verificar quais depoimentos o visitante já curtiu
    myLikes: publicProcedure
      .input(z.object({ testimonialIds: z.array(z.number()) }))
      .query(async ({ ctx, input }) => {
        const visitorHash = getVisitorHash(ctx.req as any);
        const likes = await getVisitorLikes(visitorHash, input.testimonialIds);
        return likes.map(l => l.testimonialId);
      }),
  }),

  // === ADMIN: Moderação de depoimentos ===
  admin: router({
    // Listar todos os depoimentos com filtro de status
    testimonials: protectedProcedure
      .input(z.object({
        status: z.enum(["pending", "approved", "rejected", "all"]).default("pending"),
      }))
      .query(async ({ ctx, input }) => {
        if (ctx.user?.role !== "admin") throw new TRPCError({ code: "FORBIDDEN" });
        const status = input.status === "all" ? undefined : input.status;
        return getAllTestimonials(status);
      }),

    // Contar depoimentos por status
    testimonialCounts: protectedProcedure.query(async ({ ctx }) => {
      if (ctx.user?.role !== "admin") throw new TRPCError({ code: "FORBIDDEN" });
      return countTestimonialsByStatus();
    }),

    // Aprovar ou rejeitar depoimento
    moderate: protectedProcedure
      .input(z.object({
        id: z.number(),
        status: z.enum(["approved", "rejected"]),
        adminNote: z.string().max(500).optional(),
      }))
      .mutation(async ({ ctx, input }) => {
        if (ctx.user?.role !== "admin") throw new TRPCError({ code: "FORBIDDEN" });
        await moderateTestimonial(input.id, input.status, input.adminNote);
        return { success: true };
      }),

    // Deletar depoimento
    deleteTestimonial: protectedProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ ctx, input }) => {
        if (ctx.user?.role !== "admin") throw new TRPCError({ code: "FORBIDDEN" });
        await deleteTestimonial(input.id);
        return { success: true };
      }),
  }),

  // Admin: Gerenciamento de sincronização com YouTube
  sync: router({
    history: protectedProcedure.query(async ({ ctx }) => {
      if (ctx.user?.role !== "admin") throw new TRPCError({ code: "FORBIDDEN" });
      return getSyncHistory(50);
    }),
    config: protectedProcedure.query(async ({ ctx }) => {
      if (ctx.user?.role !== "admin") throw new TRPCError({ code: "FORBIDDEN" });
      return getSyncConfig();
    }),
    updateConfig: protectedProcedure
      .input(z.object({
        channelUrl: z.string().url().optional(),
        enabled: z.boolean().optional(),
      }))
      .mutation(async ({ ctx, input }) => {
        if (ctx.user?.role !== "admin") throw new TRPCError({ code: "FORBIDDEN" });
        return upsertSyncConfig(input);
      }),
    runNow: protectedProcedure.mutation(async ({ ctx }) => {
      if (ctx.user?.role !== "admin") throw new TRPCError({ code: "FORBIDDEN" });
      return runYouTubeSync();
    }),
  }),
});

export type AppRouter = typeof appRouter;
