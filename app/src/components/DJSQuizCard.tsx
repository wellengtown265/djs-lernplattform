/**
 * DJSQuizCard — Eine einzelne DJS-Frage mit Inline-Kontext-Flow.
 *
 * Flow:
 *   1. Render Input/Radios je nach Fragetyp
 *   2. Submit → Validation (delegiert an parent via onSubmit)
 *   3. Inline-Kontext + Feedback fadet rein (Gold-Akzent links)
 *   4. "Weiter" → onNext
 *
 * Bewusst NICHT in Tabs — alles im Flow.
 */

import { useEffect, useRef, useState } from 'react';
import type { DJSQuestion } from '../types-djs';
import { colors, spacing, typography } from '../design-system';

interface Props {
  question: DJSQuestion;
  /** Validation + Persistence delegieren wir an den Parent (Hook) */
  onSubmit: (given: string) => { correct: boolean; xpEarned: number };
  onNext: () => void;
  isLast?: boolean;
}

export default function DJSQuizCard({ question, onSubmit, onNext, isLast }: Props) {
  const [given, setGiven] = useState('');
  const [result, setResult] = useState<{ correct: boolean; xp: number } | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Reset bei Frage-Wechsel
  useEffect(() => {
    setGiven('');
    setResult(null);
    // Auto-focus Input bei textinput/keywords
    if (question.type !== 'multiplechoice') {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [question.id, question.type]);

  const handleSubmit = (answer?: string) => {
    if (result) return; // schon beantwortet
    const value = answer ?? given;
    if (!value.trim()) return;
    const r = onSubmit(value);
    setResult({ correct: r.correct, xp: r.xpEarned });
  };

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSubmit();
  };

  const showFeedback = result !== null;

  return (
    <article
      style={{
        background: 'var(--color-bg-elevated)',
        borderRadius: 16,
        padding: spacing[8],
        border: '1px solid var(--color-border)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
        animation: 'djs-fade-in 300ms var(--ease-smooth) both',
      }}
    >
      {/* Frage */}
      <h2
        style={{
          ...typography.h2,
          fontSize: 28,
          color: 'var(--color-text)',
          margin: 0,
          marginBottom: spacing[6],
        }}
      >
        {question.question}
      </h2>

      {/* Input je nach Typ */}
      {question.type === 'multiplechoice' && question.options && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[3] }}>
          {question.options.map((opt) => {
            const isPicked = given === opt;
            const isCorrectOpt = question.correctAnswers.includes(opt);
            // Nach Feedback markieren wir richtig grün, gewählt-falsch rot
            const stateColor = !showFeedback
              ? (isPicked ? colors.djsRed : 'var(--color-border)')
              : isCorrectOpt
                ? colors.feedback.success
                : isPicked
                  ? colors.feedback.error
                  : 'var(--color-border)';
            return (
              <button
                key={opt}
                disabled={showFeedback}
                onClick={() => {
                  setGiven(opt);
                  handleSubmit(opt);
                }}
                style={{
                  padding: `${spacing[4]} ${spacing[5]}`,
                  textAlign: 'left',
                  background: 'var(--color-bg)',
                  color: 'var(--color-text)',
                  border: `2px solid ${stateColor}`,
                  borderRadius: 12,
                  fontFamily: 'var(--font-sans)',
                  fontSize: 16,
                  cursor: showFeedback ? 'default' : 'pointer',
                  transition: 'border-color 200ms var(--ease-smooth)',
                }}
              >
                {opt}
              </button>
            );
          })}
        </div>
      )}

      {(question.type === 'textinput' || question.type === 'keywords') && (
        <div style={{ display: 'flex', gap: spacing[3] }}>
          <input
            ref={inputRef}
            value={given}
            onChange={(e) => setGiven(e.target.value)}
            onKeyDown={handleKey}
            disabled={showFeedback}
            placeholder={
              question.type === 'keywords'
                ? 'Stichwörter durch Komma trennen…'
                : 'Antwort eingeben…'
            }
            style={{
              flex: 1,
              padding: `${spacing[3]} ${spacing[4]}`,
              background: 'var(--color-bg)',
              color: 'var(--color-text)',
              border: `1px solid ${showFeedback
                ? (result?.correct ? colors.feedback.success : colors.feedback.error)
                : 'var(--color-border)'}`,
              borderRadius: 10,
              fontFamily: 'var(--font-sans)',
              fontSize: 16,
              outline: 'none',
              transition: 'border-color 200ms var(--ease-smooth)',
            }}
          />
          {!showFeedback && (
            <button
              onClick={() => handleSubmit()}
              disabled={!given.trim()}
              style={{
                padding: `${spacing[3]} ${spacing[5]}`,
                background: given.trim() ? colors.djsRed : 'var(--color-border)',
                color: colors.textLight,
                border: 'none',
                borderRadius: 10,
                fontFamily: 'var(--font-sans)',
                fontSize: 14,
                fontWeight: 600,
                cursor: given.trim() ? 'pointer' : 'not-allowed',
                transition: 'background 200ms var(--ease-smooth)',
              }}
            >
              Antworten
            </button>
          )}
        </div>
      )}

      {/* Feedback + Inline-Kontext (slide-up) */}
      {showFeedback && (
        <>
          <FeedbackBanner correct={result!.correct} xp={result!.xp} />
          <InlineContext context={question.context} source={question.source} />

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: spacing[6] }}>
            <button
              onClick={onNext}
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
                boxShadow: '0 4px 12px rgba(196,30,58,0.24)',
              }}
            >
              {isLast ? 'Fertig →' : 'Nächste Frage →'}
            </button>
          </div>
        </>
      )}
    </article>
  );
}

/* ---------- Subkomponenten ---------- */

function FeedbackBanner({ correct, xp }: { correct: boolean; xp: number }) {
  return (
    <div
      className="djs-anim-bounce"
      style={{
        marginTop: spacing[6],
        padding: `${spacing[3]} ${spacing[5]}`,
        background: correct ? `${colors.feedback.success}1A` : `${colors.feedback.error}1A`,
        color: correct ? colors.feedback.success : colors.feedback.error,
        borderRadius: 10,
        fontFamily: 'var(--font-sans)',
        fontSize: 16,
        fontWeight: 600,
        display: 'flex',
        alignItems: 'center',
        gap: spacing[3],
      }}
    >
      <span style={{ fontSize: 20 }}>{correct ? '✓' : '✗'}</span>
      <span>
        {correct ? 'RICHTIG!' : 'Daneben — siehe Kontext:'}
      </span>
      <span
        style={{
          marginLeft: 'auto',
          fontFamily: 'var(--font-mono)',
          fontSize: 14,
        }}
      >
        {xp > 0 ? `+${xp}` : xp} XP
      </span>
    </div>
  );
}

function InlineContext({ context, source }: { context: string; source?: string }) {
  return (
    <aside
      className="djs-anim-slide-up"
      style={{
        marginTop: spacing[4],
        padding: spacing[5],
        background: `${colors.accentGold}1A`, // ~10% gold tint
        borderLeft: `4px solid ${colors.djsRed}`,
        borderRadius: '4px 10px 10px 4px',
      }}
    >
      <p
        style={{
          ...typography.body,
          lineHeight: 1.8,
          color: 'var(--color-text)',
          margin: 0,
          whiteSpace: 'pre-wrap',
        }}
      >
        {context}
      </p>
      {source && (
        <p
          style={{
            ...typography.label,
            color: 'var(--color-text-muted)',
            marginTop: spacing[3],
            marginBottom: 0,
          }}
        >
          Quelle: {source}
        </p>
      )}
    </aside>
  );
}
