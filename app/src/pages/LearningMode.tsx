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

// Erzeugt einen kurzen Hint aus Tags oder erstem Erklärungs-Satz.
// Idee: nicht die Antwort verraten, aber Denkrichtung geben.
function generateHint(q: Question): string {
  // Bevorzugt: erste 1-2 Tags
  if (q.tags && q.tags.length > 0) {
    const meaningful = q.tags.filter(t =>
      !t.startsWith('neu-') && !t.startsWith('variante-') && !t.startsWith('basiert-')
    ).slice(0, 3);
    if (meaningful.length > 0) {
      return `Stichworte: ${meaningful.join(' · ')}`;
    }
  }
  // Fallback: Jahr + Kategorie
  return `${q.category} · ${q.year}${q.subcategory ? ' · ' + q.subcategory : ''}`;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

type Tab = 'kontext' | 'quellen' | 'aehnlich';

export default function LearningMode({ questions, categories, gameState, filterCategory, onNavigate, difficulty = 'beginner' }: Props) {
  // QA-Filter: nur freigegebene Fragen (siehe lib/quality.ts + KRITISCHE_FRAGEN.md)
  const playable = questions.filter(isPlayable);
  const byDifficulty = difficulty === 'pro' ? playable : playable.filter(q =>
    q.type === 'singlechoice' || q.type === 'multiplechoice' || q.type === 'cloze'
  );
  const filtered = filterCategory ? byDifficulty.filter(q => q.category === filterCategory) : byDifficulty;
  const [queue] = useState<Question[]>(() => shuffle(filtered));
  const [idx, setIdx] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [showDeep, setShowDeep] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>('kontext');
  const [xpGained, setXpGained] = useState(0);
  // V1.3: Hint-System — wer Hint genutzt hat, bekommt automatisch volle Kontext-Ansicht
  const [hintShown, setHintShown] = useState(false);

  const currentQuestion = queue[idx];

  const handleAnswer = useCallback((correct: boolean, selected: string[]) => {
    setIsCorrect(correct);
    setSelectedAnswers(selected);
    setShowFeedback(true);
    // Reduzierte XP, wenn Hint genutzt wurde (40 statt 60 bei richtig)
    setXpGained(correct ? (hintShown ? 40 : 60) : -10);
    gameState.answerQuestion(currentQuestion, correct, true);
    // Hint genutzt → automatisch Vertiefung zeigen
    if (hintShown) setShowDeep(true);
  }, [currentQuestion, gameState, hintShown]);

  const handleNext = () => {
    setIdx(p => p + 1);
    setShowFeedback(false);
    setIsCorrect(null);
    setSelectedAnswers([]);
    setShowDeep(false);
    setActiveTab('kontext');
    setHintShown(false);
  };

  if (idx >= queue.length || !currentQuestion) {
    return (
      <div className="p-4 pt-8 text-center space-y-4">
        <div className="text-5xl">📚</div>
        <h2 className="font-serif text-2xl font-black text-white">Alle gelernt!</h2>
        <button onClick={() => onNavigate('dashboard')} className="w-full py-3 bg-djs-red text-white rounded-xl font-bold">
          Zum Dashboard
        </button>
      </div>
    );
  }

  const cat = categories.find(c => c.name === currentQuestion.category);
  const related = questions.filter(q => q.tags.some(t => currentQuestion.tags.includes(t)) && q.id !== currentQuestion.id).slice(0, 3);

  return (
    <div className="p-4 pt-6 space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <button onClick={() => onNavigate('dashboard')} className="text-gray-500 hover:text-gray-300 text-sm">← Zurück</button>
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 bg-purple-900 text-purple-300 text-xs rounded-full font-medium">📚 Lernmodus</span>
          <span className="text-sm text-gray-500">{idx + 1}/{queue.length}</span>
        </div>
      </div>

      {/* Category */}
      <div className="flex items-center gap-2">
        <span>{cat?.icon || '📝'}</span>
        <span className="text-xs text-gray-400 uppercase tracking-wider font-medium">{currentQuestion.category} · {currentQuestion.subcategory}</span>
      </div>

      {/* Question */}
      <div className="bg-gray-900 rounded-2xl p-5 border border-gray-800">
        <p className="font-serif text-lg font-bold text-white leading-snug">{currentQuestion.question}</p>
      </div>

      {/* Hint-System (V1.3) */}
      {!showFeedback && (
        <div className="flex items-center justify-between gap-3">
          {!hintShown ? (
            <button
              onClick={() => setHintShown(true)}
              className="flex items-center gap-2 px-3 py-2 bg-amber-900/20 hover:bg-amber-900/40 border border-amber-700/40 rounded-lg text-amber-300 text-xs"
            >
              💡 Hint anzeigen
              <span className="text-amber-500/70 text-[10px]">(weniger XP, dafür mehr Kontext nach der Antwort)</span>
            </button>
          ) : (
            <div className="flex-1 p-3 bg-amber-900/15 border-l-4 border-amber-600 rounded text-sm text-amber-100">
              <span className="font-semibold text-amber-300 mr-1">Hint:</span>
              {generateHint(currentQuestion)}
            </div>
          )}
        </div>
      )}

      <QuestionCard
        question={currentQuestion}
        onAnswer={handleAnswer}
        showFeedback={showFeedback}
        isCorrect={isCorrect}
        selectedAnswers={selectedAnswers}
      />

      {showFeedback && isCorrect !== null && (
        <>
          <FeedbackPanel
            isCorrect={isCorrect}
            xpGained={xpGained}
            explanation={currentQuestion.explanation}
            onNext={handleNext}
            showExplanation={showDeep}
            onShowExplanation={() => setShowDeep(true)}
          />

          {showDeep && (
            <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden">
              {/* Tabs */}
              <div className="flex border-b border-gray-800">
                {(['kontext', 'quellen', 'aehnlich'] as Tab[]).map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-3 text-xs font-semibold uppercase tracking-wider transition-colors ${
                      activeTab === tab ? 'text-djs-red border-b-2 border-djs-red' : 'text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    {tab === 'kontext' ? '🧠 Kontext' : tab === 'quellen' ? '🔗 Quellen' : '🔁 Ähnlich'}
                  </button>
                ))}
              </div>

              <div className="p-4">
                {activeTab === 'kontext' && (
                  <div className="space-y-3">
                    <p className="text-sm text-gray-300 leading-relaxed">{currentQuestion.context || currentQuestion.explanation}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {currentQuestion.tags.map(tag => (
                        <span key={tag} className="px-2 py-0.5 bg-gray-800 text-gray-400 text-xs rounded-full">{tag}</span>
                      ))}
                    </div>
                  </div>
                )}
                {activeTab === 'quellen' && (
                  <div className="space-y-2">
                    {currentQuestion.sources.length > 0 ? currentQuestion.sources.map((s, i) => (
                      <div key={i} className="flex items-center gap-2 p-2 bg-gray-800 rounded-lg">
                        <span className="text-blue-400 text-sm">🔗</span>
                        <div>
                          <p className="text-sm text-gray-200 font-medium">{s.title}</p>
                          {s.url && <p className="text-xs text-gray-500 break-all">{s.url}</p>}
                        </div>
                      </div>
                    )) : (
                      <p className="text-sm text-gray-500">Keine Quellen hinterlegt.</p>
                    )}
                    <p className="text-xs text-gray-600 mt-2">Status: {currentQuestion.verificationStatus}</p>
                  </div>
                )}
                {activeTab === 'aehnlich' && (
                  <div className="space-y-2">
                    {related.length > 0 ? related.map(q => (
                      <div key={q.id} className="p-3 bg-gray-800 rounded-lg">
                        <p className="text-xs text-gray-400 mb-1">{q.category} · {q.year}</p>
                        <p className="text-sm text-gray-200">{q.question}</p>
                      </div>
                    )) : (
                      <p className="text-sm text-gray-500">Keine ähnlichen Fragen gefunden.</p>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
