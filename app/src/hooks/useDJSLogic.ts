/**
 * useDJSLogic — State + Validation für den DJS-Quiz-Modus.
 *
 * Eigenes localStorage (`djs_progress`, `djs_history`) — bewusst getrennt
 * vom Haupt-Quiz, damit DJS-Stats separat ausgewertet werden können.
 *
 * Validation:
 *  - textinput:      case-insensitive trim, jede `correctAnswers`-Variante okay,
 *                    + leichter Fuzzy-Match (Levenshtein ≤ 2 bei Wörtern ≥ 4 Zeichen)
 *  - multiplechoice: strikter Vergleich gegen einzigen Eintrag in `correctAnswers`
 *  - keywords:       zählt Treffer (case-insensitive, includes); gewinnt, wenn
 *                    ≥ `requiredKeywords` (Default 2) gefunden
 *
 * XP:
 *  - richtig:  +75 (×1.5 wenn streak ≥ 5)
 *  - falsch:   -15
 */

import { useCallback, useEffect, useState } from 'react';
import type {
  DJSQuestion,
  DJSAnswerRecord,
  DJSProgress,
} from '../types-djs';

const PROGRESS_KEY = 'djs_progress';
const HISTORY_KEY  = 'djs_history';

const XP_CORRECT = 75;
const XP_WRONG   = -15;
const STREAK_MULTIPLIER_THRESHOLD = 5;
const STREAK_MULTIPLIER = 1.5;

const todayISO = () => new Date().toISOString().slice(0, 10);

/* ---------- Validation Helpers ---------- */

function normalize(s: string): string {
  return s.toLowerCase().trim().replace(/\s+/g, ' ');
}

/** Levenshtein-Distanz, knapp und nicht performance-optimiert (kurze Inputs). */
function levenshtein(a: string, b: string): number {
  if (a === b) return 0;
  const m = a.length, n = b.length;
  if (!m) return n; if (!n) return m;
  const dp = Array.from({ length: m + 1 }, (_, i) => i);
  for (let j = 1; j <= n; j++) {
    let prev = dp[0]; dp[0] = j;
    for (let i = 1; i <= m; i++) {
      const tmp = dp[i];
      dp[i] = a[i - 1] === b[j - 1]
        ? prev
        : 1 + Math.min(prev, dp[i], dp[i - 1]);
      prev = tmp;
    }
  }
  return dp[m];
}

function fuzzyMatch(given: string, expected: string): boolean {
  const g = normalize(given);
  const e = normalize(expected);
  if (!g || !e) return false;
  if (g === e) return true;
  if (g.includes(e) || e.includes(g)) return true;
  if (e.length >= 4) {
    const d = levenshtein(g, e);
    if (d <= 2) return true;
  }
  return false;
}

export function validateAnswer(question: DJSQuestion, given: string): boolean {
  if (!given || !given.trim()) return false;

  if (question.type === 'multiplechoice') {
    return question.correctAnswers.some((c) => normalize(c) === normalize(given));
  }

  if (question.type === 'textinput') {
    return question.correctAnswers.some((c) => fuzzyMatch(given, c));
  }

  if (question.type === 'keywords') {
    const need = question.requiredKeywords ?? 2;
    const g = normalize(given);
    const hits = new Set<string>();
    for (const kw of question.correctAnswers) {
      if (g.includes(normalize(kw))) hits.add(normalize(kw));
    }
    return hits.size >= need;
  }

  return false;
}

/* ---------- Storage ---------- */

function readProgress(): DJSProgress {
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    if (raw) return JSON.parse(raw) as DJSProgress;
  } catch { /* ignore */ }
  return {
    answered: 0,
    correct: 0,
    totalXp: 0,
    streak: 0,
    lastSessionDate: '',
  };
}

function readHistory(): Record<string, DJSAnswerRecord> {
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    if (raw) return JSON.parse(raw) as Record<string, DJSAnswerRecord>;
  } catch { /* ignore */ }
  return {};
}

function writeProgress(p: DJSProgress) {
  try { localStorage.setItem(PROGRESS_KEY, JSON.stringify(p)); } catch { /* ignore */ }
}
function writeHistory(h: Record<string, DJSAnswerRecord>) {
  try { localStorage.setItem(HISTORY_KEY, JSON.stringify(h)); } catch { /* ignore */ }
}

/* ---------- Hook ---------- */

export function useDJSLogic() {
  const [progress, setProgress] = useState<DJSProgress>(() => readProgress());
  const [history, setHistory] = useState<Record<string, DJSAnswerRecord>>(() => readHistory());

  useEffect(() => { writeProgress(progress); }, [progress]);
  useEffect(() => { writeHistory(history); }, [history]);

  const submitAnswer = useCallback((question: DJSQuestion, given: string) => {
    const correct = validateAnswer(question, given);

    // Streak-Logik: nur einmal pro Tag erhöhen; bei Wrong nicht zurücksetzen
    // (wir resetten nur bei einem Tag Pause).
    setProgress((prev) => {
      const today = todayISO();
      let streak = prev.streak;
      if (correct && prev.lastSessionDate !== today) {
        // Wenn gestern: streak +1, sonst neuer Start
        const yesterday = new Date(Date.now() - 86_400_000).toISOString().slice(0, 10);
        streak = prev.lastSessionDate === yesterday ? prev.streak + 1 : 1;
      }

      const multiplier = streak >= STREAK_MULTIPLIER_THRESHOLD ? STREAK_MULTIPLIER : 1;
      const earned = correct
        ? Math.round(XP_CORRECT * multiplier)
        : XP_WRONG;

      return {
        answered: prev.answered + 1,
        correct: prev.correct + (correct ? 1 : 0),
        totalXp: Math.max(0, prev.totalXp + earned),
        streak,
        lastSessionDate: correct ? today : prev.lastSessionDate,
      };
    });

    const earnedXp = correct
      ? Math.round(XP_CORRECT * (progress.streak >= STREAK_MULTIPLIER_THRESHOLD ? STREAK_MULTIPLIER : 1))
      : XP_WRONG;

    setHistory((prev) => ({
      ...prev,
      [question.id]: {
        questionId: question.id,
        correct,
        xpEarned: earnedXp,
        givenAnswer: given,
        timestamp: new Date().toISOString(),
      },
    }));

    return { correct, xpEarned: earnedXp };
  }, [progress.streak]);

  const reset = useCallback(() => {
    setProgress({
      answered: 0, correct: 0, totalXp: 0, streak: 0, lastSessionDate: '',
    });
    setHistory({});
  }, []);

  return { progress, history, submitAnswer, reset, validateAnswer };
}
