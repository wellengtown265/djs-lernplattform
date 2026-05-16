/**
 * useBildertestState
 *
 * Lokaler Fortschritt für den Bildertest (V1.3 Foundation).
 * - Pro Item: Selbstkontroll-Status (gewusst / halb / nicht) + Datum.
 * - Pro Runde: Fortschritts-Aggregat (Anzahl bearbeitet / korrekt).
 * - Persistenz: localStorage Key 'djs_bildertest_v1'.
 *
 * Bewusst minimal gehalten: Spaced Repetition kommt in v1.4, hier geht es
 * erstmal um Sichtbarkeit (welche Items habe ich angesehen, welche kann
 * ich, welche fehlen).
 */
import { useEffect, useState, useCallback } from 'react';

export type BildertestSelfRating = 'gewusst' | 'halb' | 'nicht';

export interface BildertestItemProgress {
  itemId: string;
  rating: BildertestSelfRating;
  ratedAt: string;  // ISO date
  viewCount: number;
}

export interface BildertestState {
  items: Record<string, BildertestItemProgress>;
  lastRoundId?: string;
}

const STORAGE_KEY = 'djs_bildertest_v1';

function load(): BildertestState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) { /* ignore */ }
  return { items: {} };
}

function save(state: BildertestState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) { /* ignore */ }
}

export function useBildertestState() {
  const [state, setState] = useState<BildertestState>(load);

  useEffect(() => { save(state); }, [state]);

  const rateItem = useCallback((itemId: string, rating: BildertestSelfRating) => {
    setState(prev => {
      const existing = prev.items[itemId];
      return {
        ...prev,
        items: {
          ...prev.items,
          [itemId]: {
            itemId,
            rating,
            ratedAt: new Date().toISOString(),
            viewCount: (existing?.viewCount ?? 0) + 1,
          },
        },
      };
    });
  }, []);

  const incrementView = useCallback((itemId: string) => {
    setState(prev => {
      const existing = prev.items[itemId];
      if (existing) {
        return {
          ...prev,
          items: {
            ...prev.items,
            [itemId]: { ...existing, viewCount: existing.viewCount + 1 },
          },
        };
      }
      return prev;
    });
  }, []);

  const setLastRound = useCallback((roundId: string) => {
    setState(prev => ({ ...prev, lastRoundId: roundId }));
  }, []);

  const resetProgress = useCallback(() => {
    setState({ items: {} });
  }, []);

  const getRoundStats = useCallback((roundItemIds: string[]) => {
    const done = roundItemIds.filter(id => state.items[id]).length;
    const correct = roundItemIds.filter(id => state.items[id]?.rating === 'gewusst').length;
    const half = roundItemIds.filter(id => state.items[id]?.rating === 'halb').length;
    return {
      total: roundItemIds.length,
      done,
      correct,
      half,
      remaining: roundItemIds.length - done,
      percentDone: roundItemIds.length ? Math.round((done / roundItemIds.length) * 100) : 0,
    };
  }, [state]);

  return {
    state,
    rateItem,
    incrementView,
    setLastRound,
    resetProgress,
    getRoundStats,
  };
}
