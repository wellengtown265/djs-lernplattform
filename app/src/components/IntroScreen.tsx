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

// Terminal-Zeilen die nacheinander erscheinen
const TERMINAL_LINES = [
  { text: '> wellingtown_productions init', delay: 200, color: '#888' },
  { text: '✓ vibe_engine loaded', delay: 700, color: '#00dd88' },
  { text: '✓ pixel_mode: MAXIMUM', delay: 1100, color: '#00dd88' },
  { text: '✓ DJS_prüfung: incoming (41d)', delay: 1500, color: '#00dd88' },
  { text: '✓ beats: ████████████ 100%', delay: 1900, color: '#C8191A' },
  { text: '> READY TO LEARN HARD', delay: 2300, color: '#fff' },
];

interface Props {
  onEnter: () => void;
}

export default function IntroScreen({ onEnter }: Props) {
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [mottoIndex] = useState(() => Math.floor(Math.random() * MOTIVATIONS.length));
  const [terminalLines, setTerminalLines] = useState<number>(0);
  const [cursorBlink, setCursorBlink] = useState(true);
  const daysLeft = getDaysLeft();

  // Pixel-Font laden
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => { document.head.removeChild(link); };
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  // Terminal-Zeilen nacheinander einblenden
  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    TERMINAL_LINES.forEach((_, i) => {
      timers.push(setTimeout(() => setTerminalLines(i + 1), TERMINAL_LINES[i].delay));
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  // Cursor blinken
  useEffect(() => {
    const interval = setInterval(() => setCursorBlink(b => !b), 530);
    return () => clearInterval(interval);
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

  const pixelFont = "'Press Start 2P', 'Courier New', monospace";

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 50,
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        justifyContent: 'flex-start', overflowY: 'auto',
        background: '#020202',
        opacity: visible && !leaving ? 1 : 0,
        transition: 'opacity 0.6s ease',
        cursor: 'pointer',
      }}
      onClick={handleEnter}
    >
      {/* ── Pixel-Dot Hintergrund ── */}
      <div style={{
        position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0,
        backgroundImage: 'radial-gradient(circle, #1a1a1a 1px, transparent 1px)',
        backgroundSize: '20px 20px',
        opacity: 0.6,
      }} />

      {/* ── CRT Scanlines ── */}
      <div style={{
        position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 1,
        backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.15) 0px, rgba(0,0,0,0.15) 1px, transparent 1px, transparent 3px)',
      }} />

      {/* ── Roter Ambient-Glow (Ecken) ── */}
      <div style={{
        position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0,
        background: 'radial-gradient(ellipse at 50% 0%, rgba(200,25,26,0.08) 0%, transparent 60%)',
      }} />

      <div style={{
        position: 'relative', zIndex: 2,
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        padding: '32px 20px 48px', maxWidth: 600, width: '100%', margin: '0 auto',
        gap: 0,
      }}>

        {/* ═══════════════════════════════════════
            WELLINGTOWN_PRODUCTIONS HEADER
        ═══════════════════════════════════════ */}
        <div style={{
          opacity: visible && !leaving ? 1 : 0,
          transform: visible && !leaving ? 'translateY(0)' : 'translateY(-8px)',
          transition: 'all 0.6s ease 0.1s',
          textAlign: 'center', width: '100%', marginBottom: 8,
        }}>
          {/* Trennlinie oben */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16,
            justifyContent: 'center',
          }}>
            <div style={{ height: 2, flex: 1, background: '#C8191A', maxWidth: 60 }} />
            <span style={{
              fontFamily: pixelFont, fontSize: 7, color: '#555',
              letterSpacing: '0.2em', textTransform: 'uppercase',
            }}>est. 2026</span>
            <div style={{ height: 2, flex: 1, background: '#C8191A', maxWidth: 60 }} />
          </div>

          {/* WELLINGTOWN_PRODUCTIONS */}
          <div style={{
            fontFamily: pixelFont,
            fontSize: 'clamp(7px, 2.2vw, 11px)',
            color: '#C8191A',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            lineHeight: 1.8,
            textShadow: '0 0 20px rgba(200,25,26,0.5), 2px 2px 0 rgba(200,25,26,0.3)',
          }}>
            WELLINGTOWN_PRODUCTIONS
          </div>

          <div style={{
            fontFamily: pixelFont, fontSize: 7, color: '#444',
            letterSpacing: '0.4em', marginTop: 6, marginBottom: 24,
          }}>
            — präsentiert —
          </div>
        </div>

        {/* ═══════════════════════════════════════
            LEARN HARD ★ VIBE CODE — Haupttitel
        ═══════════════════════════════════════ */}
        <div style={{
          opacity: visible && !leaving ? 1 : 0,
          transform: visible && !leaving ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.97)',
          transition: 'all 0.7s ease 0.25s',
          textAlign: 'center', width: '100%', marginBottom: 32,
        }}>
          {/* LEARN HARD */}
          <div style={{
            fontFamily: pixelFont,
            fontSize: 'clamp(16px, 5vw, 28px)',
            color: '#f1f5f9',
            letterSpacing: '0.08em',
            lineHeight: 1.4,
            textShadow: '3px 3px 0 #C8191A, 6px 6px 0 rgba(200,25,26,0.3)',
            marginBottom: 4,
          }}>
            LEARN HARD
          </div>

          {/* ★ Stern Trenner */}
          <div style={{
            fontFamily: pixelFont, fontSize: 18, color: '#C8191A',
            textShadow: '0 0 15px rgba(200,25,26,0.8)',
            margin: '6px 0',
            animation: 'pulse 2s ease-in-out infinite',
          }}>
            ★
          </div>

          {/* VIBE CODE */}
          <div style={{
            fontFamily: pixelFont,
            fontSize: 'clamp(16px, 5vw, 28px)',
            color: '#C8191A',
            letterSpacing: '0.08em',
            lineHeight: 1.4,
            textShadow: '3px 3px 0 rgba(200,25,26,0.4), 0 0 30px rgba(200,25,26,0.3)',
          }}>
            VIBE CODE
          </div>
        </div>

        {/* ═══════════════════════════════════════
            PIXEL ART — VIBE CODER ILLUSTRATION
        ═══════════════════════════════════════ */}
        <div style={{
          opacity: visible && !leaving ? 1 : 0,
          transition: 'opacity 0.8s ease 0.5s',
          width: '100%', marginBottom: 24,
          fontFamily: "'Courier New', monospace",
          fontSize: 'clamp(8px, 2.5vw, 13px)',
          lineHeight: 1.5,
          color: '#2a6', textAlign: 'center',
          letterSpacing: '0.05em',
          userSelect: 'none',
        }}>
          {/* Terminal-Box */}
          <div style={{
            display: 'inline-block', textAlign: 'left',
            background: '#050f05', border: '2px solid #1a3a1a',
            borderRadius: 4, padding: '14px 18px',
            boxShadow: '0 0 30px rgba(0,180,80,0.1), inset 0 0 20px rgba(0,0,0,0.5)',
            minWidth: 260, maxWidth: 380,
            position: 'relative', overflow: 'hidden',
          }}>
            {/* Fake Titelleiste */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0,
              height: 22, background: '#0a1a0a',
              borderBottom: '1px solid #1a3a1a',
              display: 'flex', alignItems: 'center', padding: '0 8px', gap: 6,
            }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#C8191A' }} />
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#555' }} />
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#555' }} />
              <span style={{ fontSize: 7, color: '#333', marginLeft: 4, fontFamily: pixelFont }}>
                vibe_terminal v2.6
              </span>
            </div>

            {/* Terminal-Inhalt */}
            <div style={{ marginTop: 22, paddingTop: 8 }}>
              {TERMINAL_LINES.slice(0, terminalLines).map((line, i) => (
                <div key={i} style={{
                  color: line.color,
                  fontSize: 'clamp(8px, 2.2vw, 11px)',
                  fontFamily: "'Courier New', monospace",
                  marginBottom: 3,
                  opacity: 0.9,
                }}>
                  {line.text}
                </div>
              ))}
              {/* Blinkender Cursor */}
              <span style={{
                display: 'inline-block', width: 8, height: 13,
                background: '#00dd88',
                opacity: cursorBlink ? 1 : 0,
                verticalAlign: 'text-bottom',
                marginTop: 4,
                boxShadow: '0 0 6px #00dd88',
              }} />
            </div>
          </div>

          {/* Pixel-Figur unter dem Terminal */}
          <div style={{
            marginTop: 12, fontSize: 'clamp(9px, 2.5vw, 12px)',
            color: '#334', fontFamily: "'Courier New', monospace",
            letterSpacing: '0.1em', lineHeight: 2,
          }}>
            <div style={{ color: '#1a4a1a' }}>{'    (ง •̀_•́)ง'}</div>
            <div style={{ color: '#1a3a1a' }}>{'   ╱|  |╲  *tap tap*'}</div>
            <div style={{ color: '#111' }}>{'  ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾'}</div>
          </div>
        </div>

        {/* ═══════════════════════════════════════
            DJS LOGO + COUNTDOWN (unverändert)
        ═══════════════════════════════════════ */}
        <div style={{
          opacity: visible && !leaving ? 1 : 0,
          transform: visible && !leaving ? 'translateY(0)' : 'translateY(8px)',
          transition: 'all 0.7s ease 0.8s',
          textAlign: 'center',
          borderTop: '1px solid #111', paddingTop: 28,
          width: '100%',
        }}>
          {/* Trennlinie */}
          <div style={{ fontFamily: pixelFont, fontSize: 7, color: '#222', marginBottom: 20, letterSpacing: '0.3em' }}>
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          </div>

          <img
            src="/djs-logo.jpg"
            alt="Deutsche Journalistenschule"
            style={{
              width: 'clamp(120px, 40vw, 200px)', borderRadius: 12,
              boxShadow: '0 8px 40px rgba(200,25,26,0.2)',
              marginBottom: 20,
            }}
          />

          {/* Countdown */}
          <div style={{
            fontSize: 'clamp(56px, 18vw, 96px)',
            fontWeight: 700, lineHeight: 1,
            color: '#C8191A',
            fontFamily: "'Playfair Display', serif",
            textShadow: '0 0 40px rgba(200,25,26,0.3)',
          }}>
            {daysLeft}
          </div>
          <div style={{ color: '#666', fontSize: 13, letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: 4 }}>
            {daysLeft === 1 ? 'Tag bis zur Prüfung' : 'Tage bis zur Prüfung'}
          </div>
          <div style={{ color: '#333', fontSize: 11, marginTop: 4, letterSpacing: '0.1em' }}>
            27. Juni 2026 · Deutsche Journalistenschule
          </div>

          {/* Motivation */}
          <p style={{
            color: '#aaa', fontSize: 'clamp(14px, 3.5vw, 18px)',
            fontStyle: 'italic',
            fontFamily: "'Playfair Display', serif",
            marginTop: 20, marginBottom: 28,
          }}>
            „{MOTIVATIONS[mottoIndex]}"
          </p>

          {/* CTA Button */}
          <button
            onClick={(e) => { e.stopPropagation(); handleEnter(); }}
            style={{
              padding: '14px 36px',
              background: '#C8191A',
              border: '3px solid #ff4444',
              borderRadius: 0,
              color: '#fff',
              fontSize: 'clamp(11px, 3vw, 14px)',
              fontFamily: pixelFont,
              letterSpacing: '0.12em',
              cursor: 'pointer',
              boxShadow: '4px 4px 0 rgba(200,25,26,0.5), 0 0 20px rgba(200,25,26,0.3)',
              transition: 'transform 0.1s, box-shadow 0.1s',
              textTransform: 'uppercase',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.transform = 'translate(-2px, -2px)';
              (e.currentTarget as HTMLButtonElement).style.boxShadow = '6px 6px 0 rgba(200,25,26,0.5)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.transform = 'none';
              (e.currentTarget as HTMLButtonElement).style.boxShadow = '4px 4px 0 rgba(200,25,26,0.5)';
            }}
          >
            LOS GEHT'S →
          </button>

          <p style={{ marginTop: 14, color: '#333', fontSize: 11, letterSpacing: '0.1em', fontFamily: "'Courier New', monospace" }}>
            oder{' '}
            <kbd style={{
              padding: '2px 7px', background: '#111', border: '1px solid #333',
              borderRadius: 3, color: '#555', fontSize: 10,
              fontFamily: "'Courier New', monospace",
            }}>
              Enter
            </kbd>
            {' '}drücken
          </p>

          {/* Footer */}
          <div style={{ marginTop: 32, fontFamily: pixelFont, fontSize: 6, color: '#1a1a1a', letterSpacing: '0.2em' }}>
            WELLINGTOWN_PRODUCTIONS © 2026 · ALL RIGHTS RESERVED
          </div>
        </div>

      </div>
    </div>
  );
}
