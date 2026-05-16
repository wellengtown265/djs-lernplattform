import { useEffect, useState } from 'react';

interface Props {
  isCorrect: boolean;
  xpGained: number;
  explanation: string;
  onNext: () => void;
  showExplanation?: boolean;
  onShowExplanation?: () => void;
}

export default function FeedbackPanel({ isCorrect, xpGained, explanation, onNext, showExplanation, onShowExplanation }: Props) {
  const [showXP, setShowXP] = useState(true);

  useEffect(() => {
    setShowXP(true);
    const timer = setTimeout(() => setShowXP(false), 1500);
    return () => clearTimeout(timer);
  }, [isCorrect]);

  return (
    <div className={`rounded-2xl p-4 border ${isCorrect ? 'border-emerald-500/30 bg-emerald-500/10' : 'border-red-500/30 bg-red-500/10'}`}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{isCorrect ? '✅' : '❌'}</span>
          <div>
            <p className={`font-bold ${isCorrect ? 'text-emerald-400' : 'text-red-400'}`}>
              {isCorrect ? 'Richtig!' : 'Leider falsch.'}
            </p>
            {showXP && (
              <p className={`text-sm font-semibold ${isCorrect ? 'text-emerald-300' : 'text-red-300'}`}>
                {isCorrect ? `+${xpGained} XP` : `${xpGained} XP`}
              </p>
            )}
          </div>
        </div>
      </div>
      {!isCorrect && explanation && (
        <p className="mt-3 text-sm text-gray-300 border-t border-gray-700 pt-3">{explanation}</p>
      )}
      {isCorrect && onShowExplanation && !showExplanation && (
        <button
          onClick={onShowExplanation}
          className="mt-3 text-sm text-blue-400 underline"
        >
          Vertiefung lesen →
        </button>
      )}
      <button
        onClick={onNext}
        className={`w-full mt-4 py-3 rounded-xl font-semibold transition-colors ${
          isCorrect ? 'bg-emerald-600 hover:bg-emerald-700 text-white' : 'bg-gray-700 hover:bg-gray-600 text-white'
        }`}
      >
        Nächste Frage →
      </button>
    </div>
  );
}
