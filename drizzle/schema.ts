import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, boolean } from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

// Tabela de histórico de sincronizações com YouTube
export const syncHistory = mysqlTable("sync_history", {
  id: int("id").autoincrement().primaryKey(),
  executedAt: timestamp("executedAt").defaultNow().notNull(),
  status: mysqlEnum("status", ["success", "error", "no_new_videos"]).notNull(),
  videoId: varchar("videoId", { length: 64 }),
  videoTitle: text("videoTitle"),
  videoDescription: text("videoDescription"),
  action: mysqlEnum("action", ["new_episode", "new_series", "none"]),
  seriesId: varchar("seriesId", { length: 128 }),
  seriesTitle: text("seriesTitle"),
  episodeOrder: int("episodeOrder"),
  errorMessage: text("errorMessage"),
  details: text("details"),
});

export type SyncHistory = typeof syncHistory.$inferSelect;
export type InsertSyncHistory = typeof syncHistory.$inferInsert;

// Tabela de configuração do sync
export const syncConfig = mysqlTable("sync_config", {
  id: int("id").autoincrement().primaryKey(),
  channelUrl: varchar("channelUrl", { length: 256 }).notNull(),
  channelId: varchar("channelId", { length: 128 }),
  enabled: boolean("enabled").default(true).notNull(),
  lastSyncAt: timestamp("lastSyncAt"),
  lastVideoId: varchar("lastVideoId", { length: 64 }),
  scheduleCronTaskUid: varchar("scheduleCronTaskUid", { length: 65 }),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type SyncConfig = typeof syncConfig.$inferSelect;
export type InsertSyncConfig = typeof syncConfig.$inferInsert;

// Tabela de depoimentos
export const testimonials = mysqlTable("testimonials", {
  id: int("id").autoincrement().primaryKey(),
  // Texto do depoimento
  content: text("content").notNull(),
  // Nome opcional (null = anônimo)
  authorName: varchar("authorName", { length: 128 }),
  // Cidade/localidade opcional
  authorCity: varchar("authorCity", { length: 128 }),
  // Episódio vinculado (opcional) — armazena o youtubeVideoId
  linkedEpisodeId: varchar("linkedEpisodeId", { length: 64 }),
  linkedEpisodeTitle: text("linkedEpisodeTitle"),
  // Status de moderação
  status: mysqlEnum("status", ["pending", "approved", "rejected"]).default("pending").notNull(),
  // Nota do admin (motivo de rejeição, etc.)
  adminNote: text("adminNote"),
  // Reações (curtidas)
  likesCount: int("likesCount").default(0).notNull(),
  // Metadados
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  approvedAt: timestamp("approvedAt"),
});

export type Testimonial = typeof testimonials.$inferSelect;
export type InsertTestimonial = typeof testimonials.$inferInsert;

// Tabela de curtidas em depoimentos (para evitar duplicatas por IP/sessão)
export const testimonialLikes = mysqlTable("testimonial_likes", {
  id: int("id").autoincrement().primaryKey(),
  testimonialId: int("testimonialId").notNull(),
  // Identificador anônimo do visitante (fingerprint leve via IP+UserAgent hash)
  visitorHash: varchar("visitorHash", { length: 64 }).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type TestimonialLike = typeof testimonialLikes.$inferSelect;
export type InsertTestimonialLike = typeof testimonialLikes.$inferInsert;
