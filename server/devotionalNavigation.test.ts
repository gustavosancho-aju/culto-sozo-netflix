import { describe, expect, it } from 'vitest';
import { resolveDevotionalDate, neighborDate, devotionalPath } from '../client/src/lib/devotionalNavigation';

describe('devotional links and day navigation', () => {
  it('opens shared dates instead of today and rejects unknown dates', () => {
    expect(resolveDevotionalDate('?dia=2026-10-05', '2026-10-13')).toBe('2026-10-05');
    expect(resolveDevotionalDate('?dia=invalid', '2026-10-13')).toBe('2026-10-13');
    expect(resolveDevotionalDate('?dia=2027-01-01', '2026-10-13')).toBe('2026-10-13');
  });
  it('crosses weekly boundaries without wrapping at the catalog edges', () => {
    expect(neighborDate('2026-10-11', 1)).toBe('2026-10-12');
    expect(neighborDate('2026-10-12', -1)).toBe('2026-10-11');
    expect(neighborDate('2026-10-05', -1)).toBeUndefined();
    expect(neighborDate('2026-11-01', 1)).toBeUndefined();
    expect(devotionalPath('2026-10-14')).toBe('/semanal?dia=2026-10-14');
  });
});
