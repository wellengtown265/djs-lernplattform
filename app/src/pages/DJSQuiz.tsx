/**
 * DJSQuiz — Sub-Page von Quiz.
 *
 * Spezial-Modus mit Inline-Kontext (KEINE Tabs), höherer XP, eigener Streak.
 * Quelle: src/data/djsQuestions.json (gespeist aus INHALT_DJS-Dossier.md).
 *
 * Layout:
 *   [Header: ◄ Zurück | 🎮 DJS-SPECIAL | 🔥 Streak]
 *   [Card: Frage → Antwort → Inline-Kontext → Weiter]
 *   [Footer-Progress: 3 / 10]
 *   bei Ende: [Summary-Karte mit XP-Total, Quote, "Nochmal"]
 */

import { useMemo, useState } from 'react';
import type { DJSQuestion } from '../types-djs';
import { useDJSLogic } from '../hooks/useDJSLogic';
import DJSQuizCard from '../components/DJSQuizCard';
import djsData from '../data/djsQuestions.json';
import { colors, spacing, typography } from '../design-system';

const QUESTIONS = djsData as DJSQuestion[];

interface Props {
  onBack: () => void;
}

export default function DJSQuiz({ onBack }: Props) {
  const { progress, submitAnswer, reset } = useDJSLogic();
  const [order] = useState<DJSQuestion[]>(() => shuffle(QUESTIONS));
  const [idx, setIdx] = useState(0);
  const [done, setDone] = useState(false);

  // Session-lokale Stats (separat vom persistenten progress — zeigt, wie diese Runde lief)
  const [sessionStats, setSessionStats] = useState({ correct: 0, total: 0, xp: 0 });

  const current = order[idx];
  const isLast = idx === order.length - 1;
  const completionPct = useMemo(
    () => Math.round(((idx + (done ? 1 : 0)) / order.length) * 100),
    [idx, done, order.length],
  );

  const handleSubmit = (given: string) => {
    const r = submitAnswer(current, given);
    setSessionStats((s) => ({
      correct: s.correct + (r.correct ? 1 : 0),
      total: s.total + 1,
      xp: s.xp + r.xpEarned,
    }));
    return r;
  };

  const handleNext = () => {
    if (isLast) setDone(true);
    else setIdx((i) => i + 1);
  };

  const restart = () => {
    setIdx(0);
    setDone(false);
    setSessionStats({ correct: 0, total: 0, xp: 0 });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[5] }}>
      <Header progress={progress} onBack={onBack} />

      {/* Hero-Akzent: djsRed Top-Streifen */}
      <div
        aria-hidden
        style={{
          height: 6,
          borderRadius: 3,
          background: `linear-gradient(90deg, ${colors.djsRed} 0%, ${colors.accentGold} 100%)`,
        }}
      />

      {!done ? (
        <>
          <DJSQuizCard
            key={current.id}
            question={current}
            onSubmit={handleSubmit}
            onNext={handleNext}
            isLast={isLast}
          />

          {/* Progress-Footer */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: `${spacing[2]} ${spacing[2]}`,
              color: 'var(--color-text-muted)',
              ...typography.label,
            }}
          >
            <span>Frage {idx + 1} / {order.length}</span>
            <span>{completionPct}%</span>
          </div>
          <div
            style={{
              height: 4,
              borderRadius: 2,
              background: 'var(--color-border)',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: `${completionPct}%`,
                height: '100%',
                background: colors.djsRed,
                transition: 'width 400ms var(--ease-smooth)',
              }}
            />
          </div>
        </>
      ) : (
        <Summary
          stats={sessionStats}
          totalQuestions={order.length}
          onRestart={restart}
          onBack={onBack}
          onResetAll={reset}
        />
      )}
    </div>
  );
}

/* ---------- Subkomponenten ---------- */

function Header({
  progress,
  onBack,
}: {
  progress: { streak: number; totalXp: number };
  onBack: () => void;
}) {
  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: spacing[4],
      }}
    >
      <button
        onClick={onBack}
        aria-label="Zurück"
        style={{
          background: 'none',
          border: 'none',
          color: 'var(--color-text-muted)',
          fontSize: 18,
          cursor: 'pointer',
          padding: spacing[2],
        }}
      >
        ◄
      </button>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: spacing[2],
          ...typography.label,
          color: colors.djsRed,
        }}
      >
        <span style={{ fontSize: 18 }}>🎮</span>
        DJS-SPECIAL
      </div>

      <div
        style={{
          ...typography.mono,
          color: 'var(--color-text-muted)',
          display: 'flex',
          alignItems: 'center',
          gap: spacing[2],
        }}
        aria-label={`Streak ${progress.streak}`}
      >
        🔥 {progress.streak}
      </div>
    </header>
  );
}

function Summary({
  stats,
  totalQuestions,
  onRestart,
  onBack,
  onResetAll,
}: {
  stats: { correct: number; total: number; xp: number };
  totalQuestions: number;
  onRestart: () => void;
  onBack: () => void;
  onResetAll: () => void;
}) {
  const pct = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
  const masterUnlocked = pct === 100 && stats.total === totalQuestions;

  return (
    <article
      className="djs-anim-slide-up"
      style={{
        background: 'var(--color-bg-elevated)',
        borderRadius: 16,
        padding: spacing[10],
        border: '1px solid var(--color-border)',
        textAlign: 'center',
      }}
    >
      <h2 style={{ ...typography.h2, color: colors.djsRed, margin: 0, marginBottom: spacing[4] }}>
        DJS-Special abgeschlossen
      </h2>
      <p
        style={{
          ...typography.bodyLarge,
          color: 'var(--color-text-muted)',
          margin: 0,
          marginBottom: spacing[8],
        }}
      >
        {stats.correct} / {stats.total} richtig · {pct}%
      </p>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: spacing[6],
          marginBottom: spacing[8],
        }}
      >
        <Stat label="XP DIESE RUNDE" value={`${stats.xp >= 0 ? '+' : ''}${stats.xp}`} />
        <Stat label="QUOTE" value={`${pct}%`} />
      </div>

      {masterUnlocked && (
        <div
          className="djs-anim-bounce"
          style={{
            padding: spacing[5],
            background: `${colors.accentGold}1F`,
            border: `2px solid ${colors.accentGold}`,
            borderRadius: 12,
            marginBottom: spacing[6],
          }}
        >
          <p style={{ ...typography.label, color: colors.accentGold, margin: 0 }}>
            🏆 Badge freigeschaltet: DJS-Master
          </p>
        </div>
      )}

      <div style={{ display: 'flex', gap: spacing[3], justifyContent: 'center', flexWrap: 'wrap' }}>
        <button
          onClick={onRestart}
          style={{
            padding: `${spacing[3]} ${spacing[6]}`,
            background: colors.djsRed,
            color: colors.textLight,
            border: 'none',
            borderRadius: 10,
            fontFamily: 'var(--font-sans)',
            fontSize: 14,
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Nochmal
        </button>
        <button
          onClick={onBack}
          style={{
            padding: `${spacing[3]} ${spacing[6]}`,
            background: 'transparent',
            color: 'var(--color-text)',
            border: '1px solid var(--color-border)',
            borderRadius: 10,
            fontFamily: 'var(--font-sans)',
            fontSize: 14,
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Zurück
        </button>
        <button
          onClick={onResetAll}
          style={{
            padding: `${spacing[3]} ${spacing[6]}`,
            background: 'transparent',
            color: 'var(--color-text-muted)',
            border: 'none',
            fontFamily: 'var(--font-sans)',
            fontSize: 12,
            cursor: 'pointer',
            textDecoration: 'underline',
          }}
        >
          Fortschritt zurücksetzen
        </button>
      </div>
    </article>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ ...typography.label, color: 'var(--color-text-muted)' }}>{label}</div>
      <div
        style={{
          ...typography.h2,
          fontSize: 32,
          color: colors.djsRed,
          marginTop: spacing[1],
        }}
      >
        {value}
      </div>
    </div>
  );
}

/* ---------- Util ---------- */

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
