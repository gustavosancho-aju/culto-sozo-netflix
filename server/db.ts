import { and, desc, eq, sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import {
  InsertSyncConfig, InsertSyncHistory, InsertTestimonial, InsertUser,
  syncConfig, syncHistory, testimonialLikes, testimonials, users
} from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) throw new Error("User openId is required for upsert");
  const db = await getDb();
  if (!db) { console.warn("[Database] Cannot upsert user: database not available"); return; }
  try {
    const values: InsertUser = { openId: user.openId };
    const updateSet: Record<string, unknown> = {};
    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];
    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };
    textFields.forEach(assignNullable);
    if (user.lastSignedIn !== undefined) { values.lastSignedIn = user.lastSignedIn; updateSet.lastSignedIn = user.lastSignedIn; }
    if (user.role !== undefined) { values.role = user.role; updateSet.role = user.role; }
    else if (user.openId === ENV.ownerOpenId) { values.role = 'admin'; updateSet.role = 'admin'; }
    if (!values.lastSignedIn) values.lastSignedIn = new Date();
    if (Object.keys(updateSet).length === 0) updateSet.lastSignedIn = new Date();
    await db.insert(users).values(values).onDuplicateKeyUpdate({ set: updateSet });
  } catch (error) { console.error("[Database] Failed to upsert user:", error); throw error; }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

// === SYNC HISTORY ===
export async function insertSyncHistory(data: InsertSyncHistory) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.insert(syncHistory).values(data);
}

export async function getSyncHistory(limit = 20) {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(syncHistory).orderBy(desc(syncHistory.executedAt)).limit(limit);
}

// === SYNC CONFIG ===
export async function getSyncConfig() {
  const db = await getDb();
  if (!db) return null;
  const result = await db.select().from(syncConfig).limit(1);
  return result.length > 0 ? result[0] : null;
}

export async function upsertSyncConfig(data: Partial<InsertSyncConfig>) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const existing = await getSyncConfig();
  if (existing) {
    await db.update(syncConfig).set(data).where(eq(syncConfig.id, existing.id));
  } else {
    await db.insert(syncConfig).values({
      channelUrl: data.channelUrl || "https://www.youtube.com/@Lorenaamelo",
      ...data,
    });
  }
  return getSyncConfig();
}

// === TESTIMONIALS ===

export async function createTestimonial(data: InsertTestimonial) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const result = await db.insert(testimonials).values(data);
  return result;
}

export async function getApprovedTestimonials(limit = 50, offset = 0) {
  const db = await getDb();
  if (!db) return [];
  return db
    .select()
    .from(testimonials)
    .where(eq(testimonials.status, "approved"))
    .orderBy(desc(testimonials.approvedAt))
    .limit(limit)
    .offset(offset);
}

export async function getAllTestimonials(status?: "pending" | "approved" | "rejected", limit = 100) {
  const db = await getDb();
  if (!db) return [];
  if (status) {
    return db
      .select()
      .from(testimonials)
      .where(eq(testimonials.status, status))
      .orderBy(desc(testimonials.createdAt))
      .limit(limit);
  }
  return db.select().from(testimonials).orderBy(desc(testimonials.createdAt)).limit(limit);
}

export async function moderateTestimonial(
  id: number,
  status: "approved" | "rejected",
  adminNote?: string
) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db
    .update(testimonials)
    .set({
      status,
      adminNote: adminNote ?? null,
      approvedAt: status === "approved" ? new Date() : null,
    })
    .where(eq(testimonials.id, id));
}

export async function deleteTestimonial(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.delete(testimonials).where(eq(testimonials.id, id));
}

export async function likeTestimonial(testimonialId: number, visitorHash: string) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  // Verificar se já curtiu
  const existing = await db
    .select()
    .from(testimonialLikes)
    .where(
      and(
        eq(testimonialLikes.testimonialId, testimonialId),
        eq(testimonialLikes.visitorHash, visitorHash)
      )
    )
    .limit(1);

  if (existing.length > 0) {
    // Descurtir
    await db
      .delete(testimonialLikes)
      .where(
        and(
          eq(testimonialLikes.testimonialId, testimonialId),
          eq(testimonialLikes.visitorHash, visitorHash)
        )
      );
    await db
      .update(testimonials)
      .set({ likesCount: sql`GREATEST(likesCount - 1, 0)` })
      .where(eq(testimonials.id, testimonialId));
    return { liked: false };
  } else {
    // Curtir
    await db.insert(testimonialLikes).values({ testimonialId, visitorHash });
    await db
      .update(testimonials)
      .set({ likesCount: sql`likesCount + 1` })
      .where(eq(testimonials.id, testimonialId));
    return { liked: true };
  }
}

export async function getVisitorLikes(visitorHash: string, testimonialIds: number[]) {
  const db = await getDb();
  if (!db) return [];
  if (testimonialIds.length === 0) return [];
  return db
    .select({ testimonialId: testimonialLikes.testimonialId })
    .from(testimonialLikes)
    .where(eq(testimonialLikes.visitorHash, visitorHash));
}

export async function countTestimonialsByStatus() {
  const db = await getDb();
  if (!db) return { pending: 0, approved: 0, rejected: 0 };
  const rows = await db
    .select({ status: testimonials.status, count: sql<number>`COUNT(*)` })
    .from(testimonials)
    .groupBy(testimonials.status);
  const result = { pending: 0, approved: 0, rejected: 0 };
  for (const row of rows) {
    result[row.status] = Number(row.count);
  }
  return result;
}
