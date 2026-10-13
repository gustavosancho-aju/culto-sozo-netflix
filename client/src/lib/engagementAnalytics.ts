import { track } from '@vercel/analytics';

// Two properties per event fit the project's existing Analytics plan.
export function recordEngagement(name: string, properties: Record<string, string | number>) {
  if (!import.meta.env.PROD) return;
  try { track(name, properties); } catch { /* Analytics must never interrupt navigation. */ }
}

export function readingProgress(top: number, height: number, viewport: number): number {
  if (height <= 0 || top >= viewport) return 0;
  return Math.max(0, Math.min(100, Math.floor(((viewport - top) / height) * 100)));
}

export function activeReadingDelta(elapsed: number, visible: boolean, focused: boolean, inView: boolean, idle: number): number {
  return visible && focused && inView && idle < 90_000 ? Math.max(0, Math.min(elapsed, 2_000)) : 0;
}
