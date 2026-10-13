import { useEffect, useRef } from 'react';
import { activeReadingDelta, readingProgress, recordEngagement } from '../lib/engagementAnalytics';

export function useDevotionalAnalytics(date: string, week: number, available: boolean) {
  const articleRef = useRef<HTMLElement>(null);
  useEffect(() => {
    recordEngagement('Devocional aberto', { devocional: date, estado: available ? 'publicado' : 'em preparação' });
    if (!available) return;
    let previous = performance.now();
    let lastActivity = previous;
    let activeMs = 0;
    let reportedSeconds = 0;
    let maxProgress = 0;
    let completed = false;
    const milestones = new Set<number>();
    const context = `${date} | Semana ${week}`;
    const inView = () => {
      const rect = articleRef.current?.getBoundingClientRect();
      return !!rect && rect.bottom > 0 && rect.top < window.innerHeight;
    };
    const account = () => {
      const now = performance.now();
      activeMs += activeReadingDelta(now - previous, document.visibilityState === 'visible', document.hasFocus(), inView(), now - lastActivity);
      previous = now;
    };
    const flush = () => {
      const seconds = Math.floor(activeMs / 1000);
      const delta = seconds - reportedSeconds;
      if (delta < 1) return;
      recordEngagement('Tempo ativo de leitura', { devocional: context, segundos: delta });
      reportedSeconds = seconds;
    };
    const progress = () => {
      const rect = articleRef.current?.getBoundingClientRect();
      if (!rect || document.visibilityState !== 'visible' || !document.hasFocus() || !inView()) return;
      maxProgress = Math.max(maxProgress, readingProgress(rect.top, rect.height, window.innerHeight));
      for (const percent of [25, 50, 75, 100]) {
        if (maxProgress >= percent && !milestones.has(percent)) {
          milestones.add(percent);
          recordEngagement('Avanço no devocional', { devocional: context, percentual: percent });
        }
      }
      if (maxProgress >= 95 && activeMs >= 30_000 && !completed) {
        completed = true;
        recordEngagement('Final do devocional alcançado', { devocional: context, segundos: Math.floor(activeMs / 1000) });
      }
    };
    const activity = () => { account(); lastActivity = performance.now(); progress(); };
    const pause = () => { account(); flush(); };
    const resume = () => { previous = performance.now(); lastActivity = previous; };
    const visibility = () => { if (document.visibilityState === 'hidden') pause(); else resume(); };
    const timer = window.setInterval(() => { account(); progress(); if (Math.floor(activeMs / 1000) - reportedSeconds >= 30) flush(); }, 1000);
    document.addEventListener('visibilitychange', visibility);
    window.addEventListener('blur', pause);
    window.addEventListener('focus', resume);
    window.addEventListener('pagehide', pause);
    const activities = ['scroll', 'pointerdown', 'keydown', 'touchstart'] as const;
    activities.forEach(event => window.addEventListener(event, activity, { passive: true }));
    progress();
    return () => {
      account(); flush(); window.clearInterval(timer);
      document.removeEventListener('visibilitychange', visibility);
      window.removeEventListener('blur', pause);
      window.removeEventListener('focus', resume);
      window.removeEventListener('pagehide', pause);
      activities.forEach(event => window.removeEventListener(event, activity));
    };
  }, [date, week, available]);
  return articleRef;
}
