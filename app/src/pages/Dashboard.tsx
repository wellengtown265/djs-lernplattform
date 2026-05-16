import type { Question, Category, Page } from '../types';
import type { useGameState } from '../hooks/useGameState';

interface Props {
  questions: Question[];
  categories: Category[];
  gameState: ReturnType<typeof useGameState>;
  onStartQuiz: (category?: string) => void;
  onStartLearn: (category?: string) => void;
  onNavigate: (page: Page) => void;
}

export default function Dashboard({ questions, categories, gameState, onStartQuiz, onStartLearn }: Props) {
  const { state, getCompletionByCategory, getOverallProgress, getDueQuestions } = gameState;
  const overall = getOverallProgress(questions);
  const catProgress = getCompletionByCategory(questions);
  const due = getDueQuestions(questions);
  const today = new Date();
  const examDate = new Date('2026-06-27');
  const daysLeft = Math.ceil((examDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

  const BADGE_META: Record<string, { icon: string; label: string }> = {
    bronze: { icon: '🥉', label: 'Bronze' },
    silver: { icon: '🥈', label: 'Silber' },
    gold: { icon: '🥇', label: 'Gold' },
    diamond: { icon: '💎', label: 'Diamond' },
    streak7: { icon: '🔥', label: '7 Tage' },
    streak30: { icon: '🏆', label: '30 Tage' },
  };

  return (
    <div className="p-4 pt-6 space-y-4">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-serif text-3xl font-black text-white">DJS.</h1>
          <p className="text-gray-400 text-sm mt-0.5">Lernplattform · Aufnahmeprüfung</p>
        </div>
        <div className="text-right">
          <div className="text-djs-red font-serif font-black text-4xl">{daysLeft}</div>
          <div className="text-gray-400 text-xs">Tage bis 27.06.</div>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-gray-900 rounded-2xl p-3 text-center border border-gray-800">
          <div className="text-2xl font-black text-amber-400">🔥 {state.streak}</div>
          <div className="text-xs text-gray-500 mt-1">Tage Streak</div>
        </div>
        <div className="bg-gray-900 rounded-2xl p-3 text-center border border-gray-800">
          <div className="text-2xl font-black text-blue-400">{state.xp.toLocaleString()}</div>
          <div className="text-xs text-gray-500 mt-1">XP gesamt</div>
        </div>
        <div className="bg-gray-900 rounded-2xl p-3 text-center border border-gray-800">
          <div className="text-2xl font-black text-emerald-400">{overall}%</div>
          <div className="text-xs text-gray-500 mt-1">Abgedeckt</div>
        </div>
      </div>

      {/* Overall progress bar */}
      <div className="bg-gray-900 rounded-2xl p-4 border border-gray-800">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-400 font-medium">Gesamtfortschritt</span>
          <span className="text-white font-bold">{overall}% / 85%</span>
        </div>
        <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-djs-red to-red-400 rounded-full transition-all duration-700"
            style={{ width: `${overall}%` }}
          />
        </div>
        <div className="mt-2 flex justify-between text-xs text-gray-600">
          <span>Ziel: 85%</span>
          <span>{Object.keys(state.progress).length} / {questions.length} beantwortet</span>
        </div>
      </div>

      {/* Today's session */}
      <div className="bg-gray-900 rounded-2xl p-4 border border-gray-800">
        <div className="flex justify-between items-center mb-3">
          <h2 className="font-semibold text-white">Heute</h2>
          <span className="text-xs text-gray-500">{state.todayAnswered} Fragen</span>
        </div>
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="bg-gray-800 rounded-xl p-3 text-center">
            <div className="text-xl font-bold text-white">{state.todayAnswered}</div>
            <div className="text-xs text-gray-500">beantwortet</div>
          </div>
          <div className="bg-gray-800 rounded-xl p-3 text-center">
            <div className="text-xl font-bold text-emerald-400">{state.todayCorrect}</div>
            <div className="text-xs text-gray-500">richtig</div>
          </div>
        </div>
        <button
          onClick={() => onStartQuiz()}
          className="w-full py-3.5 bg-djs-red hover:bg-djs-red-dark text-white font-bold rounded-xl transition-colors"
        >
          ⚡ Jetzt trainieren
        </button>
      </div>

      {/* Due questions */}
      {due.length > 0 && (
        <div className="bg-amber-950/40 rounded-2xl p-4 border border-amber-800/40">
          <h2 className="font-semibold text-amber-400 mb-2">⏰ Heute fällig ({due.length})</h2>
          <p className="text-sm text-gray-400 mb-3">Diese Fragen solltest du heute wiederholen.</p>
          <button
            onClick={() => onStartQuiz()}
            className="w-full py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-xl transition-colors text-sm"
          >
            Wiederholungen starten →
          </button>
        </div>
      )}

      {/* Badges */}
      {state.badges.length > 0 && (
        <div className="bg-gray-900 rounded-2xl p-4 border border-gray-800">
          <h2 className="font-semibold text-white mb-3">🏆 Errungenschaften</h2>
          <div className="flex flex-wrap gap-2">
            {state.badges.map(badge => (
              <div key={badge} className="flex items-center gap-2 bg-gray-800 rounded-lg px-3 py-1.5">
                <span>{BADGE_META[badge]?.icon}</span>
                <span className="text-xs text-gray-300">{BADGE_META[badge]?.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Category overview */}
      <div className="bg-gray-900 rounded-2xl p-4 border border-gray-800">
        <h2 className="font-semibold text-white mb-3">Themenübersicht</h2>
        <div className="space-y-3">
          {categories.map(cat => {
            const cp = catProgress[cat.name] || { total: 0, answered: 0, correct: 0 };
            const pct = cp.total ? Math.round((cp.answered / cp.total) * 100) : 0;
            const accuracy = cp.answered ? Math.round((cp.correct / cp.answered) * 100) : 0;
            return (
              <div key={cat.id}>
                <div className="flex justify-between items-center mb-1">
                  <div className="flex items-center gap-2">
                    <span>{cat.icon}</span>
                    <span className="text-sm text-gray-300">{cat.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {cp.answered > 0 && (
                      <span className={`text-xs ${accuracy >= 70 ? 'text-emerald-400' : accuracy >= 50 ? 'text-amber-400' : 'text-red-400'}`}>
                        {accuracy}% ✓
                      </span>
                    )}
                    <span className="text-xs text-gray-500">{cp.answered}/{cp.total}</span>
                  </div>
                </div>
                <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{ width: `${pct}%`, backgroundColor: cat.color }}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-2 gap-2 mt-4">
          <button
            onClick={() => onStartLearn()}
            className="py-2.5 bg-gray-800 hover:bg-gray-700 text-gray-200 font-semibold rounded-xl text-sm transition-colors"
          >
            📚 Lernmodus
          </button>
          <button
            onClick={() => onStartQuiz()}
            className="py-2.5 bg-gray-800 hover:bg-gray-700 text-gray-200 font-semibold rounded-xl text-sm transition-colors"
          >
            ⚡ Alle Fragen
          </button>
        </div>
      </div>
    </div>
  );
}
