import { useState, useEffect, useCallback } from 'react';

const EXAM_DATE = new Date('2026-06-27T00:00:00');

function getDaysLeft(): number {
  const now = new Date();
  const diff = EXAM_DATE.getTime() - now.getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

const MOTIVATIONS = [
  'Du schaffst das.',
  'Jeder Tag zählt.',
  'Dein Moment kommt.',
  'Bleib dran. Immer.',
  'Heute besser als gestern.',
  'Die DJS wartet auf dich.',
];

interface Props {
  onEnter: () => void;
}

export default function IntroScreen({ onEnter }: Props) {
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [mottoIndex] = useState(() => Math.floor(Math.random() * MOTIVATIONS.length));
  const daysLeft = getDaysLeft();

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  const handleEnter = useCallback(() => {
    if (leaving) return;
    setLeaving(true);
    setTimeout(onEnter, 600);
  }, [leaving, onEnter]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') handleEnter();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [handleEnter]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-950 transition-opacity duration-600 ${
        visible && !leaving ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleEnter}
    >
      {/* Background subtle pattern */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #C8191A 0px, #C8191A 1px, transparent 1px, transparent 40px)',
        }}
      />

      {/* BETA Badge top-right */}
      <div className="absolute top-5 right-5 px-3 py-1 rounded-full bg-amber-900/40 border border-amber-700/60 text-amber-300 text-xs font-mono uppercase tracking-widest">
        BETA 1.3
      </div>

      <div className="relative flex flex-col items-center gap-8 px-8 text-center select-none">

        {/* DJS Logo */}
        <div className={`transition-all duration-700 delay-100 ${visible && !leaving ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <img
            src="/djs-logo.jpg"
            alt="Deutsche Journalistenschule"
            className="w-48 sm:w-64 rounded-xl shadow-2xl shadow-red-900/30"
          />
        </div>

        {/* Countdown */}
        <div className={`transition-all duration-700 delay-200 ${visible && !leaving ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="text-[6rem] sm:text-[8rem] font-bold leading-none text-djs-red font-serif tabular-nums"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            {daysLeft}
          </div>
          <div className="text-gray-400 text-lg sm:text-xl tracking-widest uppercase mt-1">
            {daysLeft === 1 ? 'Tag bis zur Prüfung' : 'Tage bis zur Prüfung'}
          </div>
          <div className="text-gray-600 text-sm mt-1 tracking-wider">
            27. Juni 2026 · Deutsche Journalistenschule
          </div>
        </div>

        {/* Motivation */}
        <div className={`transition-all duration-700 delay-300 ${visible && !leaving ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-gray-300 text-xl sm:text-2xl italic font-serif"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            „{MOTIVATIONS[mottoIndex]}"
          </p>
        </div>

        {/* CTA Button */}
        <div className={`transition-all duration-700 delay-500 ${visible && !leaving ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <button
            onClick={(e) => { e.stopPropagation(); handleEnter(); }}
            className="group mt-4 px-10 py-4 bg-djs-red hover:bg-red-700 text-white text-xl font-bold rounded-2xl shadow-lg shadow-red-900/40 transition-all duration-200 hover:scale-105 active:scale-95 tracking-wide"
          >
            LOS GEHT'S
            <span className="ml-3 inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
          </button>
          <p className="mt-4 text-gray-600 text-sm tracking-wider">
            oder <kbd className="px-2 py-0.5 bg-gray-800 rounded text-gray-400 text-xs font-mono">Enter</kbd> drücken
          </p>
        </div>

      </div>
    </div>
  );
}
