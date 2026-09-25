import { integer, pgEnum, pgTable, serial, text, timestamp, varchar, boolean } from "drizzle-orm/pg-core";

export const userRole = pgEnum("user_role", ["user", "admin"]);
export const syncStatus = pgEnum("sync_status", ["success", "error", "no_new_videos"]);
export const syncAction = pgEnum("sync_action", ["new_episode", "new_series", "none"]);
export const testimonialStatus = pgEnum("testimonial_status", ["pending", "approved", "rejected"]);

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: userRole("role").default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().$onUpdate(() => new Date()).notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

// Tabela de séries
export const series = pgTable("series", {
  id: varchar("id", { length: 128 }).primaryKey(),
  titulo: varchar("titulo", { length: 256 }).notNull(),
  descricao: text("descricao"),
  destaque: boolean("destaque").default(false).notNull(),
  ordem: integer("ordem").default(0).notNull(),
  ano: integer("ano").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().$onUpdate(() => new Date()).notNull(),
});

export type Series = typeof series.$inferSelect;
export type InsertSeries = typeof series.$inferInsert;

// Tabela de episódios
export const episodes = pgTable("episodes", {
  id: varchar("id", { length: 128 }).primaryKey(),
  serieId: varchar("serieId", { length: 128 }).notNull(),
  ordem: integer("ordem").default(1).notNull(),
  titulo: varchar("titulo", { length: 512 }).notNull(),
  youtubeVideoId: varchar("youtubeVideoId", { length: 64 }).notNull().unique(),
  duracao: varchar("duracao", { length: 32 }).default("1h"),
  descricaoCurta: text("descricaoCurta"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().$onUpdate(() => new Date()).notNull(),
});

export type Episode = typeof episodes.$inferSelect;
export type InsertEpisode = typeof episodes.$inferInsert;

// Tabela de histórico de sincronizações com YouTube
export const syncHistory = pgTable("sync_history", {
  id: serial("id").primaryKey(),
  executedAt: timestamp("executedAt").defaultNow().notNull(),
  status: syncStatus("status").notNull(),
  videoId: varchar("videoId", { length: 64 }),
  videoTitle: text("videoTitle"),
  videoDescription: text("videoDescription"),
  action: syncAction("action"),
  seriesId: varchar("seriesId", { length: 128 }),
  seriesTitle: text("seriesTitle"),
  episodeOrder: integer("episodeOrder"),
  errorMessage: text("errorMessage"),
  details: text("details"),
});

export type SyncHistory = typeof syncHistory.$inferSelect;
export type InsertSyncHistory = typeof syncHistory.$inferInsert;

// Tabela de configuração do sync
export const syncConfig = pgTable("sync_config", {
  id: serial("id").primaryKey(),
  channelUrl: varchar("channelUrl", { length: 256 }).notNull(),
  channelId: varchar("channelId", { length: 128 }),
  enabled: boolean("enabled").default(true).notNull(),
  lastSyncAt: timestamp("lastSyncAt"),
  lastVideoId: varchar("lastVideoId", { length: 64 }),
  scheduleCronTaskUid: varchar("scheduleCronTaskUid", { length: 65 }),
  updatedAt: timestamp("updatedAt").defaultNow().$onUpdate(() => new Date()).notNull(),
});

export type SyncConfig = typeof syncConfig.$inferSelect;
export type InsertSyncConfig = typeof syncConfig.$inferInsert;

// Tabela de depoimentos
export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  content: text("content").notNull(),
  authorName: varchar("authorName", { length: 128 }),
  authorCity: varchar("authorCity", { length: 128 }),
  linkedEpisodeId: varchar("linkedEpisodeId", { length: 64 }),
  linkedEpisodeTitle: text("linkedEpisodeTitle"),
  status: testimonialStatus("status").default("pending").notNull(),
  adminNote: text("adminNote"),
  likesCount: integer("likesCount").default(0).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().$onUpdate(() => new Date()).notNull(),
  approvedAt: timestamp("approvedAt"),
});

export type Testimonial = typeof testimonials.$inferSelect;
export type InsertTestimonial = typeof testimonials.$inferInsert;

// Tabela de curtidas em depoimentos
export const testimonialLikes = pgTable("testimonial_likes", {
  id: serial("id").primaryKey(),
  testimonialId: integer("testimonialId").notNull(),
  visitorHash: varchar("visitorHash", { length: 64 }).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type TestimonialLike = typeof testimonialLikes.$inferSelect;
export type InsertTestimonialLike = typeof testimonialLikes.$inferInsert;
