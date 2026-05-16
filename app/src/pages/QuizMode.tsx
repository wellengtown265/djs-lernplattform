import { useState, useCallback } from 'react';
import type { Question, Category, Page, Difficulty } from '../types';
import type { useGameState } from '../hooks/useGameState';
import QuestionCard from '../components/QuestionCard';
import FeedbackPanel from '../components/FeedbackPanel';
import { isPlayable } from '../lib/quality';

interface Props {
  questions: Question[];
  categories: Category[];
  gameState: ReturnType<typeof useGameState>;
  filterCategory: string | null;
  onNavigate: (page: Page) => void;
  difficulty?: Difficulty;
}

// Anfänger: nur Fragen mit Antwort-Optionen (singlechoice, multiplechoice, cloze)
// Pro: alles inkl. kurzantwort (Freitext) und matching
function filterByDifficulty(questions: Question[], difficulty: Difficulty): Question[] {
  if (difficulty === 'pro') return questions;
  return questions.filter(q =>
    q.type === 'singlechoice' || q.type === 'multiplechoice' || q.type === 'cloze'
  );
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function QuizMode({ questions, categories, gameState, filterCategory, onNavigate, difficulty = 'beginner' }: Props) {
  // QA-Filter: nur freigegebene Fragen (siehe lib/quality.ts + KRITISCHE_FRAGEN.md)
  const playable = questions.filter(isPlayable);
  const byDifficulty = filterByDifficulty(playable, difficulty);
  const filtered = filterCategory
    ? byDifficulty.filter(q => q.category === filterCategory)
    : byDifficulty;

  const [queue] = useState<Question[]>(() => shuffle(filtered));
  const [idx, setIdx] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [sessionCorrect, setSessionCorrect] = useState(0);
  const [sessionTotal, setSessionTotal] = useState(0);
  const [showPause, setShowPause] = useState(false);
  const [pauseMilestone, setPauseMilestone] = useState(0);
  const [xpGained, setXpGained] = useState(0);

  const currentQuestion = queue[idx];

  const handleAnswer = useCallback((correct: boolean, selected: string[]) => {
    setIsCorrect(correct);
    setSelectedAnswers(selected);
    setShowFeedback(true);
    const xp = correct ? 50 : -10;
    setXpGained(xp);
    gameState.answerQuestion(currentQuestion, correct, false);
    setSessionTotal(p => p + 1);
    if (correct) setSessionCorrect(p => p + 1);
  }, [currentQuestion, gameState]);

  const handleNext = useCallback(() => {
    const newTotal = sessionTotal + 1;
    if (newTotal === 5 || newTotal === 10 || newTotal === 25) {
      setPauseMilestone(newTotal);
      setShowPause(true);
    } else {
      setIdx(p => p + 1);
      setShowFeedback(false);
      setIsCorrect(null);
      setSelectedAnswers([]);
    }
  }, [sessionTotal]);

  const handleContinue = () => {
    setShowPause(false);
    setIdx(p => p + 1);
    setShowFeedback(false);
    setIsCorrect(null);
    setSelectedAnswers([]);
  };

  if (idx >= queue.length) {
    return (
      <div className="p-4 pt-8 text-center space-y-6">
        <div className="text-5xl">🎉</div>
        <h2 className="font-serif text-2xl font-black text-white">Session beendet!</h2>
        <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 space-y-4">
          <div className="text-4xl font-black text-djs-red">{Math.round(sessionCorrect / Math.max(sessionTotal, 1) * 100)}%</div>
          <div className="grid grid-cols-3 gap-4">
            <div><div className="text-xl font-bold text-emerald-400">{sessionCorrect}</div><div className="text-xs text-gray-500">Richtig</div></div>
            <div><div className="text-xl font-bold text-red-400">{sessionTotal - sessionCorrect}</div><div className="text-xs text-gray-500">Falsch</div></div>
            <div><div className="text-xl font-bold text-white">{sessionTotal}</div><div className="text-xs text-gray-500">Gesamt</div></div>
          </div>
          <div className="text-amber-400 text-lg font-bold">🔥 Streak: {gameState.state.streak} Tage</div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <button onClick={() => { setIdx(0); setSessionCorrect(0); setSessionTotal(0); }} className="py-3 bg-djs-red text-white rounded-xl font-bold">Nochmal ⚡</button>
          <button onClick={() => onNavigate('dashboard')} className="py-3 bg-gray-800 text-white rounded-xl font-bold">Dashboard</button>
        </div>
      </div>
    );
  }

  if (showPause) {
    return (
      <div className="p-4 pt-8 text-center space-y-6">
        <div className="text-4xl">⏸️</div>
        <h2 className="font-serif text-2xl font-black text-white">Pause – {pauseMilestone} Fragen!</h2>
        <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 space-y-4">
          <div className="text-3xl font-black text-djs-red">{Math.round(sessionCorrect / Math.max(sessionTotal, 1) * 100)}%</div>
          <div className="grid grid-cols-2 gap-4">
            <div><div className="text-xl font-bold text-emerald-400">{sessionCorrect}/{sessionTotal}</div><div className="text-xs text-gray-500">Richtig</div></div>
            <div><div className="text-xl font-bold text-amber-400">🔥 {gameState.state.streak}</div><div className="text-xs text-gray-500">Streak</div></div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <button onClick={handleContinue} className="py-3 bg-djs-red text-white rounded-xl font-bold">Weiter →</button>
          <button onClick={() => onNavigate('dashboard')} className="py-3 bg-gray-800 text-white rounded-xl font-bold">Fertig</button>
        </div>
      </div>
    );
  }

  const cat = categories.find(c => c.name === currentQuestion.category);

  return (
    <div className="p-4 pt-6 space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <button onClick={() => onNavigate('dashboard')} className="text-gray-500 hover:text-gray-300 text-sm">← Zurück</button>
        <div className="flex items-center gap-3">
          <span className="text-amber-400 text-sm font-bold">🔥 {gameState.state.streak}</span>
          <span className="text-blue-400 text-sm font-bold">{gameState.state.xp} XP</span>
        </div>
      </div>

      {/* Progress */}
      <div className="space-y-1">
        <div className="flex justify-between text-xs text-gray-500">
          <span>{idx + 1} / {queue.length}</span>
          <span>{sessionCorrect} richtig</span>
        </div>
        <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
          <div className="h-full bg-djs-red rounded-full transition-all" style={{ width: `${((idx + 1) / queue.length) * 100}%` }} />
        </div>
      </div>

      {/* Category badge */}
      <div className="flex items-center gap-2">
        <span className="text-sm">{cat?.icon || '📝'}</span>
        <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">{currentQuestion.category}</span>
        <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
          difficulty === 'pro' ? 'bg-red-900/40 text-red-300' : 'bg-emerald-900/40 text-emerald-300'
        }`}>
          {difficulty === 'pro' ? '🔥 PRO' : '🌱 ANF'}
        </span>
        <span className={`text-xs px-2 py-0.5 rounded-full ml-auto ${
          currentQuestion.difficulty === 'leicht' ? 'bg-emerald-900 text-emerald-400' :
          currentQuestion.difficulty === 'schwer' ? 'bg-red-900 text-red-400' :
          'bg-amber-900 text-amber-400'
        }`}>
          {currentQuestion.difficulty}
        </span>
      </div>

      {/* Question */}
      <div className="bg-gray-900 rounded-2xl p-5 border border-gray-800">
        <p className="font-serif text-lg font-bold text-white leading-snug">
          {currentQuestion.question}
        </p>
      </div>

      {/* Options */}
      <QuestionCard
        question={currentQuestion}
        onAnswer={handleAnswer}
        showFeedback={showFeedback}
        isCorrect={isCorrect}
        selectedAnswers={selectedAnswers}
      />

      {/* Feedback */}
      {showFeedback && isCorrect !== null && (
        <FeedbackPanel
          isCorrect={isCorrect}
          xpGained={xpGained}
          explanation={currentQuestion.explanation}
          onNext={handleNext}
        />
      )}
    </div>
  );
}
