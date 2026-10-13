import { describe, expect, it } from 'vitest';
import { activeReadingDelta, readingProgress } from '../client/src/lib/engagementAnalytics';

describe('active reading accounting', () => {
  it('excludes hidden, unfocused, offscreen and idle reading', () => {
    expect(activeReadingDelta(1000, false, true, true, 0)).toBe(0);
    expect(activeReadingDelta(1000, true, false, true, 0)).toBe(0);
    expect(activeReadingDelta(1000, true, true, false, 0)).toBe(0);
    expect(activeReadingDelta(1000, true, true, true, 90000)).toBe(0);
    expect(activeReadingDelta(1000, true, true, true, 100)).toBe(1000);
  });
  it('does not count suspended timer gaps as active time', () => {
    expect(activeReadingDelta(60000, true, true, true, 0)).toBe(2000);
  });
  it('measures article progress without counting the surrounding footer', () => {
    expect(readingProgress(1000, 2000, 800)).toBe(0);
    expect(readingProgress(300, 2000, 800)).toBe(25);
    expect(readingProgress(-1200, 2000, 800)).toBe(100);
    expect(readingProgress(-1500, 2000, 800)).toBe(100);
  });
});
