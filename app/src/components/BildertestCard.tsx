/**
 * BildertestCard — v2 (Mai 2026)
 *
 * Vollständig überarbeitetes Design:
 *  - Echte Fotos: groß, eindrucksvoll, mit Blur-Effekt im Pro-Modus
 *  - Anfänger-Modus: Bild sofort sichtbar + 4 MC-Buttons
 *  - Pro-Modus: Bild verschwommen → nach Auflösen scharf mit Overlay
 *  - Credit-Zeile dezent am Bildrand
 *  - Smooth Reveal-Animation
 *  - Schöne Lerncard mit DJS-Design
 */
import { useState, useMemo } from 'react';
import type { BildertestItem } from '../types-bildertest';
import type { BildertestSelfRating } from '../hooks/useBildertestState';
import type { Difficulty } from '../types';
import BeatTheAI from './BeatTheAI';

interface Props {
  item: BildertestItem;
  index: number;
  total: number;
  onRate: (rating: BildertestSelfRating) => void;
  onNext: () => void;
  isLast: boolean;
  difficulty?: Difficulty;
}

function shuffleArr<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const DIFFICULTY_CONFIG = {
  leicht: { color: '#10b981', bg: '#064e3b22', label: 'Leicht' },
  mittel:  { color: '#f59e0b', bg: '#78350f22', label: 'Mittel' },
  schwer:  { color: '#ef4444', bg: '#7f1d1d22', label: 'Schwer' },
} as const;

const PROB_CONFIG = {
  'sehr hoch': { color: '#10b981', icon: '⬆⬆' },
  'hoch':      { color: '#22c55e', icon: '⬆' },
  'mittel':    { color: '#f59e0b', icon: '→' },
  'niedrig':   { color: '#6b7280', icon: '⬇' },
} as const;

export function BildertestCard({
  item, index, total, onRate, onNext, isLast, difficulty = 'beginner',
}: Props) {
  const [revealed, setRevealed] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [rated, setRated] = useState<BildertestSelfRating | null>(null);
  const [pickedMC, setPickedMC] = useState<string | null>(null);

  const isPro = difficulty === 'pro';
  const hasRealImage = item.image?.status === 'READY' && item.image?.localPath;

  const diffCfg = DIFFICULTY_CONFIG[item.difficulty] ?? DIFFICULTY_CONFIG.mittel;
  const probCfg = PROB_CONFIG[item.djsProbability] ?? PROB_CONFIG['mittel'];

  // MC-Optionen für Anfänger-Modus
  const mcOptions = useMemo(() => {
    const pool = [item.correctAnswer, ...(item.distractors || []).slice(0, 3)];
    return shuffleArr(pool);
  }, [item.id]);

  const reveal = () => setRevealed(true);

  const handleMCPick = (opt: string) => {
    if (revealed) return;
    setPickedMC(opt);
    setUserInput(opt);
    setRevealed(true);
  };

  const handleRate = (r: BildertestSelfRating) => {
    setRated(r);
    onRate(r);
  };

  const handleNext = () => {
    setRevealed(false);
    setUserInput('');
    setRated(null);
    setPickedMC(null);
    onNext();
  };

  const isPickedCorrect = pickedMC === item.correctAnswer;
  const progress = (index / total) * 100;

  return (
    <div
      style={{
        background: '#0f172a',
        borderRadius: 20,
        overflow: 'hidden',
        border: '1px solid #1e293b',
        boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
        maxWidth: 520,
        margin: '0 auto',
      }}
    >
      {/* ── Fortschrittsbalken ─────────────────── */}
      <div style={{ height: 3, background: '#1e293b' }}>
        <div
          style={{
            height: '100%',
            background: 'linear-gradient(90deg, #C8191A, #ef4444)',
            width: `${progress}%`,
            transition: 'width 0.4s ease',
          }}
        />
      </div>

      {/* ── Header ─────────────────────────────── */}
      <div
        style={{
          padding: '12px 18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid #1e293b',
        }}
      >
        <span style={{ fontSize: 12, color: '#64748b', fontFamily: 'monospace' }}>
          {index + 1} / {total}
        </span>
        <div style={{ display: 'flex', gap: 8 }}>
          <span
            style={{
              fontSize: 11,
              padding: '2px 8px',
              borderRadius: 999,
              background: diffCfg.bg,
              color: diffCfg.color,
              fontWeight: 600,
            }}
          >
            {diffCfg.label}
          </span>
          <span
            style={{
              fontSize: 11,
              padding: '2px 8px',
              borderRadius: 999,
              background: `${probCfg.color}15`,
              color: probCfg.color,
              fontWeight: 600,
            }}
          >
            DJS {probCfg.icon}
          </span>
        </div>
      </div>

      {/* ── Bildbereich ─────────────────────────── */}
      <div
        style={{
          position: 'relative',
          background: '#020617',
          aspectRatio: '4/3',
          overflow: 'hidden',
        }}
      >
        {hasRealImage ? (
          <>
            {/* Echtes Foto */}
            <img
              src={item.image.localPath}
              alt=""
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
                display: 'block',
                // Pro-Modus: unscharf bis Auflösung
                filter: isPro && !revealed ? 'blur(18px) brightness(0.7)' : 'none',
                transition: 'filter 0.6s cubic-bezier(0.4,0,0.2,1)',
              }}
            />

            {/* Gradient-Overlay unten (immer) */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '35%',
                background: 'linear-gradient(to top, #0f172a, transparent)',
              }}
            />

            {/* Pro: "Auflösen" Overlay vor Reveal */}
            {isPro && !revealed && (
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(0,0,0,0.3)',
                }}
              >
                <div
                  style={{
                    background: 'rgba(15,23,42,0.85)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid #334155',
                    borderRadius: 16,
                    padding: '16px 28px',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ fontSize: 32, marginBottom: 8 }}>🔍</div>
                  <p style={{ color: '#cbd5e1', fontSize: 13, margin: 0 }}>
                    Wer oder was ist zu sehen?
                  </p>
                  <p style={{ color: '#64748b', fontSize: 11, margin: '4px 0 0' }}>
                    Gib deine Antwort ein oder löse auf
                  </p>
                </div>
              </div>
            )}

            {/* Nach Reveal: Name-Overlay */}
            {revealed && (
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '20px 18px 14px',
                  background: 'linear-gradient(to top, rgba(12,15,23,0.98) 60%, transparent)',
                }}
              >
                <p
                  style={{
                    fontSize: 22,
                    fontWeight: 700,
                    color: '#f1f5f9',
                    margin: '0 0 2px',
                    fontFamily: "'Playfair Display', Georgia, serif",
                    textShadow: '0 2px 8px rgba(0,0,0,0.8)',
                  }}
                >
                  {item.correctAnswer}
                </p>
                <p style={{ fontSize: 13, color: '#94a3b8', margin: 0 }}>
                  {item.roleOrShortLabel}
                </p>
              </div>
            )}

            {/* Credit */}
            {item.image.credit && (
              <div
                style={{
                  position: 'absolute',
                  top: 8,
                  right: 8,
                  background: 'rgba(0,0,0,0.65)',
                  borderRadius: 6,
                  padding: '2px 7px',
                  fontSize: 10,
                  color: '#94a3b8',
                  maxWidth: 200,
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                }}
              >
                © {item.image.credit.replace(' / Wikimedia Commons', '')}
              </div>
            )}
          </>
        ) : (
          /* Placeholder */
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, #0f172a, #1e293b)',
            }}
          >
            <div style={{ fontSize: 56, opacity: 0.25, marginBottom: 12 }}>
              {item.itemType === 'person' ? '👤' : '📸'}
            </div>
            <p style={{ fontSize: 13, color: '#475569', textAlign: 'center', padding: '0 20px' }}>
              Bild wird noch beschafft
            </p>
            {item.image?.searchQueries?.[0] && (
              <p style={{ fontSize: 11, color: '#334155', marginTop: 6, textAlign: 'center', padding: '0 20px' }}>
                Suche: {item.image.searchQueries[0]}
              </p>
            )}
          </div>
        )}
      </div>

      {/* ── Prompt ──────────────────────────────── */}
      <div style={{ padding: '18px 18px 4px' }}>
        <p
          style={{
            fontSize: 17,
            color: '#e2e8f0',
            lineHeight: 1.5,
            margin: 0,
            fontFamily: "'Playfair Display', Georgia, serif",
          }}
        >
          {item.prompt}
        </p>
      </div>

      {/* ── Eingabe / MC / Auflöse-Phase ────────── */}
      <div style={{ padding: '14px 18px 20px' }}>

        {/* Anfänger + noch nicht aufgelöst */}
        {!isPro && !revealed && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <p style={{ fontSize: 11, color: '#64748b', margin: '0 0 4px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Wähle die richtige Antwort
            </p>
            {mcOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => handleMCPick(opt)}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  textAlign: 'left',
                  background: '#1e293b',
                  border: '1.5px solid #334155',
                  borderRadius: 10,
                  color: '#e2e8f0',
                  fontSize: 14,
                  cursor: 'pointer',
                  transition: 'all 0.15s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = '#C8191A';
                  (e.currentTarget as HTMLButtonElement).style.background = '#C8191A18';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = '#334155';
                  (e.currentTarget as HTMLButtonElement).style.background = '#1e293b';
                }}
              >
                {opt}
              </button>
            ))}
          </div>
        )}

        {/* Pro + noch nicht aufgelöst */}
        {isPro && !revealed && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <input
              type="text"
              value={userInput}
              onChange={e => setUserInput(e.target.value)}
              placeholder="Name, Rolle, Kontext …"
              onKeyDown={e => { if (e.key === 'Enter') reveal(); }}
              autoFocus
              style={{
                width: '100%',
                padding: '12px 16px',
                background: '#1e293b',
                border: '1.5px solid #334155',
                borderRadius: 10,
                color: '#e2e8f0',
                fontSize: 14,
                outline: 'none',
                boxSizing: 'border-box',
              }}
              onFocus={e => (e.currentTarget.style.borderColor = '#C8191A')}
              onBlur={e => (e.currentTarget.style.borderColor = '#334155')}
            />
            <button
              onClick={reveal}
              style={{
                padding: '12px',
                background: '#C8191A',
                border: 'none',
                borderRadius: 10,
                color: '#fff',
                fontSize: 14,
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Auflösen →
            </button>
          </div>
        )}

        {/* Nach Auflösung */}
        {revealed && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>

            {/* MC-Feedback */}
            {!isPro && pickedMC && (
              <div
                style={{
                  padding: '10px 14px',
                  borderRadius: 10,
                  background: isPickedCorrect ? '#064e3b44' : '#7f1d1d44',
                  border: `1.5px solid ${isPickedCorrect ? '#10b981' : '#ef4444'}`,
                  fontSize: 13,
                  color: isPickedCorrect ? '#6ee7b7' : '#fca5a5',
                  fontWeight: 600,
                }}
              >
                {isPickedCorrect
                  ? `✓ Richtig! ${item.correctAnswer}`
                  : `✗ ${pickedMC} → Richtig wäre: ${item.correctAnswer}`}
              </div>
            )}

            {/* Pro-Freitext Feedback */}
            {isPro && userInput && (
              <div style={{ fontSize: 13, color: '#64748b' }}>
                Dein Tipp: <span style={{ color: '#94a3b8' }}>{userInput}</span>
              </div>
            )}

            {/* Kontext-Box */}
            <div
              style={{
                background: '#1e293b',
                borderRadius: 12,
                padding: '14px 16px',
                borderLeft: '3px solid #C8191A',
              }}
            >
              <p style={{ fontSize: 11, color: '#C8191A', margin: '0 0 6px', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
                DJS-Kontext
              </p>
              <p style={{ fontSize: 13, color: '#cbd5e1', lineHeight: 1.6, margin: 0 }}>
                {item.newsContext}
              </p>
            </div>

            {/* Alternative Prompts */}
            {item.alternativePrompts?.length > 0 && (
              <div style={{ fontSize: 12, color: '#475569' }}>
                <p style={{ margin: '0 0 4px', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: 10 }}>Tiefer fragen:</p>
                <ul style={{ margin: 0, paddingLeft: 16, lineHeight: 1.8 }}>
                  {item.alternativePrompts.slice(0, 3).map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Quellen */}
            {/* Beat the AI — kontextuell */}
            <div style={{ display:'flex', justifyContent:'flex-end', paddingTop: 4 }}>
              <BeatTheAI variant="inline" page="bildertest" questionId={item.id} questionText={item.prompt} />
            </div>

            {item.sources?.length > 0 && (
              <div style={{ fontSize: 11, color: '#475569' }}>
                <p style={{ margin: '0 0 2px', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: 10 }}>Quellen:</p>
                {item.sources.slice(0, 2).map((s, i) => (
                  <div key={i} style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    <a href={s} target="_blank" rel="noreferrer" style={{ color: '#3b82f6' }}>{s}</a>
                  </div>
                ))}
              </div>
            )}

            {/* Self-Rating (nur wenn noch nicht gewertet) */}
            {!rated && (
              <div>
                <p style={{ fontSize: 11, color: '#64748b', margin: '4px 0 8px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Wie gut wusstest du es?
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
                  {[
                    { r: 'nicht' as const, label: '✗ Nicht', bg: '#7f1d1d', border: '#ef4444', text: '#fca5a5' },
                    { r: 'halb' as const,  label: '≈ Halb',  bg: '#78350f', border: '#f59e0b', text: '#fcd34d' },
                    { r: 'gewusst' as const, label: '✓ Gewusst', bg: '#064e3b', border: '#10b981', text: '#6ee7b7' },
                  ].map(({ r, label, bg, border, text }) => (
                    <button
                      key={r}
                      onClick={() => handleRate(r)}
                      style={{
                        padding: '10px 4px',
                        background: `${bg}33`,
                        border: `1.5px solid ${border}66`,
                        borderRadius: 10,
                        color: text,
                        fontSize: 12,
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.15s',
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLButtonElement).style.background = `${bg}66`;
                        (e.currentTarget as HTMLButtonElement).style.borderColor = border;
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLButtonElement).style.background = `${bg}33`;
                        (e.currentTarget as HTMLButtonElement).style.borderColor = `${border}66`;
                      }}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Weiter-Button nach Rating */}
            {rated && (
              <button
                onClick={handleNext}
                style={{
                  width: '100%',
                  padding: '14px',
                  background: 'linear-gradient(135deg, #C8191A, #dc2626)',
                  border: 'none',
                  borderRadius: 12,
                  color: '#fff',
                  fontSize: 15,
                  fontWeight: 700,
                  cursor: 'pointer',
                  letterSpacing: '0.02em',
                }}
              >
                {isLast ? '🏁 Runde beenden' : 'Weiter →'}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
