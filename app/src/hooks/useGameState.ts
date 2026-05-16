import { useState, useCallback, useEffect, useRef } from 'react';
import type { GameState, Question } from '../types';

const BASE_KEY = 'djs_gamestate_v1';
function storageKey(profileId: string | null | undefined): string {
  return profileId ? `${BASE_KEY}__${profileId}` : BASE_KEY;
}

const DEFAULT_STATE: GameState = {
  xp: 0,
  streak: 0,
  lastSessionDate: '',
  todayAnswered: 0,
  todayCorrect: 0,
  weekAnswered: 0,
  badges: [],
  progress: {},
  sessionHistory: [],
};

const INTERVALS = {
  wrong: 1 / 144,      // 10 min in days
  unsure: 1,
  correct: 3,
  verySure: 7,
  mastered: 14,
};

export function useGameState(profileId?: string | null) {
  const STORAGE_KEY = storageKey(profileId);
  const lastProfileRef = useRef<string | null | undefined>(profileId);

  const [state, setState] = useState<GameState>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        const today = new Date().toDateString();
        if (parsed.lastSessionDate !== today) {
          parsed.todayAnswered = 0;
          parsed.todayCorrect = 0;
        }
        return parsed;
      }
    } catch {}
    return DEFAULT_STATE;
  });

  // Wenn das Profil wechselt: GameState aus neuem Slot laden
  useEffect(() => {
    if (lastProfileRef.current === profileId) return;
    lastProfileRef.current = profileId;
    const key = storageKey(profileId);
    try {
      const stored = localStorage.getItem(key);
      const parsed = stored ? JSON.parse(stored) : DEFAULT_STATE;
      const today = new Date().toDateString();
      if (parsed.lastSessionDate !== today) {
        parsed.todayAnswered = 0;
        parsed.todayCorrect = 0;
      }
      setState(parsed);
    } catch {
      setState(DEFAULT_STATE);
    }
  }, [profileId]);

  // Update streak on mount
  useEffect(() => {
    const today = new Date().toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    setState(prev => {
      let newStreak = prev.streak;
      if (prev.lastSessionDate === yesterday || prev.lastSessionDate === today) {
        // streak intact
      } else if (prev.lastSessionDate !== today) {
        newStreak = 0; // streak broken
      }
      return { ...prev, streak: newStreak };
    });
  }, []);

  const save = useCallback((newState: GameState) => {
    setState(newState);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
  }, []);

  const answerQuestion = useCallback((
    question: Question,
    isCorrect: boolean,
    isLearningMode = false
  ) => {
    setState(prev => {
      const today = new Date().toDateString();
      const todayISO = new Date().toISOString();

      // XP calculation
      let xpGain = isCorrect
        ? (isLearningMode ? 60 : 50)
        : -10;

      // Streak bonus
      const existingProgress = prev.progress[question.id];
      const newTodayAnswered = prev.todayAnswered + 1;
      const newTodayCorrect = prev.todayCorrect + (isCorrect ? 1 : 0);

      // Spaced repetition
      const confidence = isCorrect
        ? (existingProgress?.confidence === 'correct' ? 'verySure' :
           existingProgress?.confidence === 'verySure' ? 'mastered' : 'correct')
        : 'wrong';

      const interval = INTERVALS[confidence] || 3;
      const nextReview = new Date(Date.now() + interval * 86400000).toISOString();

      const newProgress: Record<string, QuestionProgressEntry> = {
        ...prev.progress,
        [question.id]: {
          questionId: question.id,
          timesCorrect: (existingProgress?.timesCorrect || 0) + (isCorrect ? 1 : 0),
          timesWrong: (existingProgress?.timesWrong || 0) + (isCorrect ? 0 : 1),
          lastAnswered: todayISO,
          nextReview,
          interval,
          confidence,
        },
      };

      // Check streak
      let newStreak = prev.streak;
      if (prev.lastSessionDate !== today) {
        const yesterday = new Date(Date.now() - 86400000).toDateString();
        if (prev.lastSessionDate === yesterday || prev.streak === 0) {
          newStreak = prev.streak + 1;
        } else {
          newStreak = 1;
        }
      }

      // Badges
      const badges = [...prev.badges];
      const totalQuestions = Object.keys(newProgress).length;
      const totalQ = 303; // playable questions after V1.3 (303 = 100 ok + 202 ungeprüft + 1 präzisieren)
      if (totalQuestions / totalQ >= 0.25 && !badges.includes('bronze')) badges.push('bronze');
      if (totalQuestions / totalQ >= 0.5 && !badges.includes('silver')) badges.push('silver');
      if (totalQuestions / totalQ >= 0.75 && !badges.includes('gold')) badges.push('gold');
      if (totalQuestions / totalQ >= 1 && !badges.includes('diamond')) badges.push('diamond');
      if (newStreak >= 7 && !badges.includes('streak7')) badges.push('streak7');
      if (newStreak >= 30 && !badges.includes('streak30')) badges.push('streak30');

      // Weekly XP bonus
      const newWeekAnswered = prev.weekAnswered + 1;
      if (newWeekAnswered === 50) xpGain += 500;
      // Daily XP bonus
      if (newTodayAnswered === 5) xpGain += 100;

      const newXP = Math.max(0, prev.xp + xpGain);

      const newState: GameState = {
        ...prev,
        xp: newXP,
        streak: newStreak,
        lastSessionDate: today,
        todayAnswered: newTodayAnswered,
        todayCorrect: newTodayCorrect,
        weekAnswered: newWeekAnswered,
        badges,
        progress: newProgress,
        sessionHistory: prev.sessionHistory,
      };

      localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
      return newState;
    });
  }, []);

  const getDueQuestions = useCallback((questions: Question[]) => {
    const now = new Date().toISOString();
    return questions.filter(q => {
      const p = state.progress[q.id];
      if (!p) return true; // never answered = always due
      return p.nextReview <= now;
    }).sort((a, b) => {
      const pa = state.progress[a.id];
      const pb = state.progress[b.id];
      // wrong first, then unsure, then new
      const order: Record<string, number> = { wrong: 0, unsure: 1, new: 2, correct: 3, verySure: 4, mastered: 5 };
      const oa = pa ? order[pa.confidence] : 2;
      const ob = pb ? order[pb.confidence] : 2;
      return oa - ob;
    });
  }, [state.progress]);

  const getCompletionByCategory = useCallback((questions: Question[]) => {
    const cats: Record<string, { total: number; answered: number; correct: number }> = {};
    questions.forEach(q => {
      if (!cats[q.category]) cats[q.category] = { total: 0, answered: 0, correct: 0 };
      cats[q.category].total++;
      const p = state.progress[q.id];
      if (p) {
        cats[q.category].answered++;
        if (p.timesCorrect > p.timesWrong) cats[q.category].correct++;
      }
    });
    return cats;
  }, [state.progress]);

  const resetProgress = useCallback(() => {
    const fresh = DEFAULT_STATE;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(fresh));
    setState(fresh);
  }, []);

  const getOverallProgress = useCallback((questions: Question[]) => {
    const answered = Object.keys(state.progress).length;
    return Math.round((answered / questions.length) * 100);
  }, [state.progress]);

  return {
    state,
    answerQuestion,
    getDueQuestions,
    getCompletionByCategory,
    resetProgress,
    getOverallProgress,
    save,
  };
}

// local alias to avoid import cycle
type QuestionProgressEntry = import('../types').QuestionProgress;
