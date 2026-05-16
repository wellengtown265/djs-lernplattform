/**
 * Qualitäts-Filter für Fragen.
 *
 * Eine Frage ist "spielbar", wenn sie freigegeben oder bisher unaufgefallen ist.
 * Alles mit reviewStatus = 'korrigieren' / 'umformulieren' / 'aktualisieren' /
 * 'archiv' / 'streichen' wird aus dem Quiz-/Lern-Pool ausgeschlossen.
 *
 * Quelle: Prüfbericht KORREKTUR_FRAGEN_V1.md + KRITISCHE_FRAGEN.md.
 */

import type { Question, ReviewStatus } from '../types';

const PLAYABLE: ReadonlySet<ReviewStatus> = new Set(['ok',
  'ok-präzisieren',
  'ungeprüft',
]);

/** Spielbar: ohne reviewStatus (default ok) oder explizit freigegeben. */
export function isPlayable(q: Question): boolean {
  if (!q.reviewStatus) return true;
  return PLAYABLE.has(q.reviewStatus);
}

export function filterPlayable(qs: Question[]): Question[] {
  return qs.filter(isPlayable);
}

/** Für Statistik: wie viele Fragen sind gerade geblockt? */
export function countBlocked(qs: Question[]): number {
  return qs.length - qs.filter(isPlayable).length;
}

export interface QualityStats {
  total: number;
  playable: number;
  blocked: number;
  byStatus: Record<string, number>;
  withSourceUrl: number;
  withoutSourceUrl: number;
  withAsOfDate: number;
  withReviewNote: number;
}

/** Aggregiert Qualitäts-Kennzahlen für den Statistik-Block. */
export function getQualityStats(qs: Question[]): QualityStats {
  const byStatus: Record<string, number> = {};
  let withSourceUrl = 0;
  let withAsOfDate = 0;
  let withReviewNote = 0;

  for (const q of qs) {
    const status = q.reviewStatus ?? 'ok';
    byStatus[status] = (byStatus[status] || 0) + 1;

    if (Array.isArray(q.sources) && q.sources.some(s => s?.url?.trim())) {
      withSourceUrl++;
    }
    if (q.asOfDate) withAsOfDate++;
    if (q.reviewNote?.trim()) withReviewNote++;
  }

  const playable = qs.filter(isPlayable).length;

  return {
    total: qs.length,
    playable,
    blocked: qs.length - playable,
    byStatus,
    withSourceUrl,
    withoutSourceUrl: qs.length - withSourceUrl,
    withAsOfDate,
    withReviewNote,
  };
}
