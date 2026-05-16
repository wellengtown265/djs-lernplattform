import { useState } from 'react';
import type { Question } from '../types';

interface Props {
  question: Question;
  onAnswer: (isCorrect: boolean, selectedAnswers: string[]) => void;
  showFeedback: boolean;
  isCorrect: boolean | null;
  selectedAnswers: string[];
}

export default function QuestionCard({ question, onAnswer, showFeedback, isCorrect: _isCorrect, selectedAnswers }: Props) {
  const [selected, setSelected] = useState<string[]>([]);

  const handleSingleChoice = (option: string) => {
    if (showFeedback) return;
    const correct = question.correctAnswers.includes(option);
    onAnswer(correct, [option]);
  };

  const handleMultiChoice = (option: string) => {
    if (showFeedback) return;
    setSelected(prev =>
      prev.includes(option) ? prev.filter(o => o !== option) : [...prev, option]
    );
  };

  const handleMultiSubmit = () => {
    if (showFeedback) return;
    const correct =
      selected.length === question.correctAnswers.length &&
      selected.every(s => question.correctAnswers.includes(s));
    onAnswer(correct, selected);
  };

  const getOptionClass = (option: string) => {
    const base = 'w-full text-left px-4 py-3 rounded-xl border transition-all text-sm font-medium';
    if (!showFeedback) {
      const isSelected = selected.includes(option);
      return `${base} ${isSelected
        ? 'border-blue-500 bg-blue-500/10 text-white'
        : 'border-gray-700 bg-gray-800 text-gray-200 hover:border-gray-500'
      }`;
    }
    const isCorrectOption = question.correctAnswers.includes(option);
    const wasSelected = selectedAnswers.includes(option);
    if (isCorrectOption) return `${base} border-emerald-500 bg-emerald-500/15 text-emerald-300`;
    if (wasSelected && !isCorrectOption) return `${base} border-red-500 bg-red-500/15 text-red-300`;
    return `${base} border-gray-800 bg-gray-900 text-gray-500`;
  };

  if (question.type === 'singlechoice' || question.type === 'cloze') {
    return (
      <div className="space-y-3">
        {question.options.map((option, i) => (
          <button
            key={i}
            onClick={() => handleSingleChoice(option)}
            className={getOptionClass(option)}
            disabled={showFeedback}
          >
            <span className="inline-flex items-center gap-3">
              <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 ${
                showFeedback
                  ? question.correctAnswers.includes(option) ? 'bg-emerald-500 text-white' : 'bg-gray-700 text-gray-400'
                  : 'bg-gray-700 text-gray-300'
              }`}>
                {String.fromCharCode(65 + i)}
              </span>
              {option}
            </span>
          </button>
        ))}
      </div>
    );
  }

  if (question.type === 'multiplechoice' || question.type === 'matching') {
    return (
      <div className="space-y-3">
        {question.options.map((option, i) => (
          <button
            key={i}
            onClick={() => handleMultiChoice(option)}
            className={getOptionClass(option)}
            disabled={showFeedback}
          >
            <span className="inline-flex items-center gap-3">
              <span className={`w-6 h-6 rounded flex items-center justify-center text-xs border-2 shrink-0 ${
                selected.includes(option) || (showFeedback && question.correctAnswers.includes(option))
                  ? 'border-emerald-500 bg-emerald-500 text-white'
                  : showFeedback && selectedAnswers.includes(option)
                  ? 'border-red-500 bg-red-500 text-white'
                  : 'border-gray-600'
              }`}>
                {(selected.includes(option) || (showFeedback && question.correctAnswers.includes(option))) ? '✓' : ''}
              </span>
              {option}
            </span>
          </button>
        ))}
        {!showFeedback && (
          <button
            onClick={handleMultiSubmit}
            disabled={selected.length === 0}
            className="w-full py-3 rounded-xl bg-djs-red text-white font-semibold disabled:opacity-40 hover:bg-djs-red-dark transition-colors"
          >
            Antwort prüfen
          </button>
        )}
        <p className="text-xs text-gray-500 text-center">Mehrere Antworten möglich</p>
      </div>
    );
  }

  return null;
}
