import { useState, useEffect } from 'react';
import { useBildertestState, BildertestSelfRating } from '../hooks/useBildertestState';

interface BildertestItem {
  id: string;
  roundId: string;
  prompt: string;
  correctAnswer: string;
  image: {
    path: string;
    attribution?: string;
  };
}

interface BildertestRound {
  id: string;
  title: string;
  items: BildertestItem[];
}

const SAMPLE_DATA: BildertestRound[] = [
  {
    id: 'r01',
    title: 'Deutsche Bundesregierung & Machtwechsel',
    items: [
      {
        id: 'bt26-r01-01',
        roundId: 'r01',
        prompt: 'Wer ist das?',
        correctAnswer: 'Friedrich Merz',
        image: {
          path: '/bildertest/2026/r01/friedrich-merz.jpg',
          attribution: 'Wikimedia Commons',
        },
      },
    ],
  },
];

interface Props {
  onComplete?: (roundId: string) => void;
}

export default function BildertestMode({ onComplete }: Props) {
  const { rateItem, getRoundStats } = useBildertestState();
  const [currentRound, setCurrentRound] = useState(SAMPLE_DATA[0]);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [revealed, setRevealed] = useState(false);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);

  const currentItem = currentRound.items[currentItemIndex];
  const stats = getRoundStats(currentRound.items.map(i => i.id));

  const checkAnswer = () => {
    const isCorrect = userInput.toLowerCase().trim() === currentItem.correctAnswer.toLowerCase().trim();
    setFeedback(isCorrect ? 'correct' : 'wrong');
    setRevealed(true);
    rateItem(
      currentItem.id,
      isCorrect ? 'gewusst' : userInput.length > 0 ? 'halb' : 'nicht'
    );
  };

  const handleNext = () => {
    if (currentItemIndex < currentRound.items.length - 1) {
      setCurrentItemIndex(currentItemIndex + 1);
      setUserInput('');
      setRevealed(false);
      setFeedback(null);
    } else {
      onComplete?.(currentRound.id);
    }
  };

  if (!currentItem) {
    return <div className="text-center text-gray-400 py-8">Keine Items gefunden</div>;
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress */}
      <div className="text-sm text-gray-400 mb-4">
        Runde: {currentRound.title} · Item {currentItemIndex + 1}/{currentRound.items.length}
      </div>
      <div className="w-full h-1 bg-gray-800 rounded-full mb-6 overflow-hidden">
        <div
          className="h-full bg-djs-red transition-all"
          style={{
            width: `${((currentItemIndex + 1) / currentRound.items.length) * 100}%`,
          }}
        />
      </div>

      {/* Image */}
      <div className="mb-6 rounded-lg overflow-hidden border border-gray-800 bg-gray-900">
        <img
          src={currentItem.image.path}
          alt="Bildertest Item"
          className="w-full h-96 object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23333" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23999" font-size="18" font-family="system-ui"%3E[Bild nicht verfügbar]%3C/text%3E%3C/svg%3E';
          }}
        />
        {currentItem.image.attribution && (
          <div className="p-2 bg-gray-900 border-t border-gray-800 text-xs text-gray-500">
            © {currentItem.image.attribution}
          </div>
        )}
      </div>

      {/* Question & Answer */}
      <div className="bg-gray-900 rounded-lg border border-gray-800 p-6 mb-6">
        <h3 className="text-xl font-semibold text-gray-100 mb-6">{currentItem.prompt}</h3>

        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && !revealed && checkAnswer()}
          placeholder="Deine Antwort eingeben..."
          disabled={revealed}
          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-djs-red transition mb-4 disabled:opacity-50"
        />

        {revealed && (
          <div
            className={`p-4 rounded-lg mb-4 ${
              feedback === 'correct'
                ? 'bg-green-900/20 border border-green-600 text-green-300'
                : 'bg-red-900/20 border border-red-600 text-red-300'
            }`}
          >
            {feedback === 'correct' ? (
              <div>✓ Korrekt! Es ist: <strong>{currentItem.correctAnswer}</strong></div>
            ) : (
              <div>✗ Leider falsch. Korrekte Antwort: <strong>{currentItem.correctAnswer}</strong></div>
            )}
          </div>
        )}

        <div className="flex gap-3">
          {!revealed ? (
            <button
              onClick={checkAnswer}
              disabled={!userInput.trim()}
              className="flex-1 py-3 bg-djs-red text-white rounded-lg font-semibold hover:bg-red-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Überprüfen
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="flex-1 py-3 bg-djs-red text-white rounded-lg font-semibold hover:bg-red-700 transition"
            >
              {currentItemIndex < currentRound.items.length - 1 ? 'Nächstes Bild' : 'Fertig'}
            </button>
          )}
        </div>
      </div>

      {/* Stats Footer */}
      <div className="text-xs text-gray-500 text-center">
        Bearbeitet: {stats.done}/{stats.total} · Richtig: {stats.correct}
      </div>
    </div>
  );
}
