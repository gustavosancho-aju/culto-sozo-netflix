import { datesForWeek, october2026Weeks } from '../data/weeklyDevotionals';

export const devotionalDates = october2026Weeks.flatMap(week => datesForWeek(week.startsOn));

export function resolveDevotionalDate(query: string, today: string): string {
  const requested = new URLSearchParams(query).get('dia');
  if (requested && devotionalDates.includes(requested)) return requested;
  return devotionalDates.includes(today) ? today : devotionalDates[0];
}

export function devotionalPath(date: string): string {
  return `/semanal?dia=${encodeURIComponent(date)}`;
}

export function neighborDate(date: string, offset: -1 | 1): string | undefined {
  const index = devotionalDates.indexOf(date);
  return index < 0 ? undefined : devotionalDates[index + offset];
}
