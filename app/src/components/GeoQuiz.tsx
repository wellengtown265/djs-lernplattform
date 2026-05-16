import { useState, useEffect } from 'react';
import MapDisplay, { MapMode } from './MapDisplay';

interface GeoQuestion {
  mode: MapMode;
  highlightCodes: string[];
  question: string;
  options: string[];
  correctOptionIndex: number;
  specialNote?: string;
}

const GEO_QUESTIONS: GeoQuestion[] = [
  {
    mode: 'deutschland',
    highlightCodes: ['DE-BB'],
    question: 'Welches Bundesland ist das?',
    options: ['Brandenburg', 'Bayern', 'Baden-Württemberg', 'Bremen'],
    correctOptionIndex: 0,
  },
  {
    mode: 'deutschland',
    highlightCodes: ['DE-BY'],
    question: 'Welches Bundesland ist das?',
    options: ['Schleswig-Holstein', 'Bayern', 'Sachsen', 'Hessen'],
    correctOptionIndex: 1,
  },
  {
    mode: 'europa',
    highlightCodes: ['DE'],
    question: 'Wo liegt Deutschland auf der Europakarte?',
    options: ['Südeuropa', 'Mitteleuropa', 'Osteuropa', 'Westeuropa'],
    correctOptionIndex: 1,
  },
  {
    mode: 'welt',
    highlightCodes: ['DE'],
    question: 'Auf welchem Kontinent liegt Deutschland?',
    options: ['Asien', 'Afrika', 'Europa', 'Südamerika'],
    correctOptionIndex: 2,
  },
];

interface Props {
  onComplete?: (score: number) => void;
}

export default function GeoQuiz({ onComplete }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const currentQuestion = GEO_QUESTIONS[currentIndex];
  const isCorrect = selectedOption === currentQuestion.correctOptionIndex;

  const handleSelectOption = (index: number) => {
    if (!revealed) {
      setSelectedOption(index);
      setRevealed(true);
      if (index === currentQuestion.correctOptionIndex) {
        setScore(score + 1);
      }
    }
  };

  const handleNext = () => {
    if (currentIndex < GEO_QUESTIONS.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setRevealed(false);
      setSelectedOption(null);
    } else {
      setCompleted(true);
      onComplete?.(score + (isCorrect ? 1 : 0));
    }
  };

  if (completed) {
    return (
      <div className="w-full max-w-2xl mx-auto bg-gray-900 rounded-lg border border-gray-800 p-8 text-center">
        <div className="text-5xl mb-4">🎉</div>
        <h2 className="text-3xl font-bold text-gray-100 mb-2">Quiz abgeschlossen!</h2>
        <p className="text-xl text-gray-400 mb-6">
          Dein Score: <span className="text-djs-red font-bold">{score}/{GEO_QUESTIONS.length}</span>
        </p>
        <button
          onClick={() => {
            setCurrentIndex(0);
            setRevealed(false);
            setSelectedOption(null);
            setScore(0);
            setCompleted(false);
          }}
          className="px-6 py-2 bg-djs-red text-white rounded-lg font-semibold hover:bg-red-700 transition"
        >
          Nochmal spielen
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress */}
      <div className="text-sm text-gray-400 mb-4">
        Frage {currentIndex + 1} von {GEO_QUESTIONS.length}
      </div>

      {/* Map */}
      <div className="mb-6">
        <MapDisplay
          mode={currentQuestion.mode}
          highlightCodes={revealed ? currentQuestion.highlightCodes : []}
          revealed={revealed}
          specialNote={currentQuestion.specialNote}
        />
      </div>

      {/* Question */}
      <div className="bg-gray-900 rounded-lg border border-gray-800 p-6 mb-6">
        <h3 className="text-xl font-semibold text-gray-100 mb-6">{currentQuestion.question}</h3>

        {/* Options */}
        <div className="space-y-3 mb-6">
          {currentQuestion.options.map((option, idx) => {
            const isSelected = selectedOption === idx;
            const isCorrectOption = idx === currentQuestion.correctOptionIndex;

            let bgClass = 'bg-gray-800 hover:bg-gray-700 border-gray-700';
            if (revealed) {
              if (isCorrectOption) {
                bgClass = 'bg-green-900/30 border-green-600';
              } else if (isSelected && !isCorrect) {
                bgClass = 'bg-red-900/30 border-red-600';
              }
            } else if (isSelected) {
              bgClass = 'bg-djs-red/20 border-djs-red';
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelectOption(idx)}
                disabled={revealed}
                className={`w-full p-4 text-left rounded-lg border transition ${bgClass} ${
                  revealed ? 'cursor-default' : 'cursor-pointer'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                      isSelected ? 'border-djs-red bg-djs-red' : 'border-gray-600'
                    }`}
                  >
                    {isSelected && <div className="w-2 h-2 bg-white rounded-sm" />}
                  </div>
                  <span className="text-gray-200">{option}</span>
                  {revealed && isCorrectOption && <span className="ml-auto text-green-400">✓</span>}
                  {revealed && isSelected && !isCorrect && <span className="ml-auto text-red-400">✗</span>}
                </div>
              </button>
            );
          })}
        </div>

        {/* Feedback & Next Button */}
        {revealed && (
          <div className="space-y-4">
            <div
              className={`p-4 rounded-lg ${
                isCorrect
                  ? 'bg-green-900/20 border border-green-600 text-green-300'
                  : 'bg-red-900/20 border border-red-600 text-red-300'
              }`}
            >
              {isCorrect ? '✓ Korrekt!' : '✗ Leider falsch.'}
            </div>
            <button
              onClick={handleNext}
              className="w-full py-3 bg-djs-red text-white rounded-lg font-semibold hover:bg-red-700 transition"
            >
              {currentIndex < GEO_QUESTIONS.length - 1 ? 'Nächste Frage' : 'Ergebnis sehen'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
