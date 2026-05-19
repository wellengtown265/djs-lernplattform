/**
 * BeatTheAI — Pixel-Terminal Notiz-System
 *
 * Erscheint als floating Button (überall in der App)
 * + optional als kontextueller Mini-Button (z.B. auf Fragekarten).
 *
 * Look: Wellingtown_Productions Pixel-Terminal — passend zum Intro.
 */
import { useState, useEffect, useCallback } from 'react';
import { useBeatTheAI, type BeatNote } from '../hooks/useBeatTheAI';

const PIXEL_FONT = "'Press Start 2P', 'Courier New', monospace";

const NOTE_TYPES: { value: BeatNote['type']; label: string; color: string; emoji: string }[] = [
  { value: 'correction', label: 'KORREKTUR', color: '#C8191A', emoji: '✗' },
  { value: 'idea',       label: 'IDEE',      color: '#00dd88', emoji: '💡' },
  { value: 'source',     label: 'QUELLE',    color: '#38bdf8', emoji: '🔗' },
  { value: 'general',    label: 'NOTIZ',     color: '#888',    emoji: '📝' },
];

interface BeatTheAIProps {
  /** Kontext-Info — wird automatisch getaggt */
  page?: string;
  questionId?: string;
  questionText?: string;
  /** 'float' = großer roter Floating-Button (global)
   *  'inline' = kleiner kontextueller Button auf Karten */
  variant?: 'float' | 'inline';
}

export default function BeatTheAI({
  page = 'unknown',
  questionId,
  questionText,
  variant = 'float',
}: BeatTheAIProps) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');
  const [type, setType] = useState<BeatNote['type']>('general');
  const [sendState, setSendState] = useState<'idle' | 'sending' | 'synced' | 'localOnly' | 'error'>('idle');
  const [sendError, setSendError] = useState<string | null>(null);
  const [count, setCount] = useState(0);
  const [cursorBlink, setCursorBlink] = useState(true);
  const { addNote, getNoteCount, getServerNotes } = useBeatTheAI();

  useEffect(() => {
    let cancelled = false;
    setCount(getNoteCount());
    getServerNotes().then(res => {
      if (!cancelled && res.ok) setCount(Math.max(getNoteCount(), res.total));
    });
    return () => { cancelled = true; };
  }, []);
  useEffect(() => {
    const i = setInterval(() => setCursorBlink(b => !b), 530);
    return () => clearInterval(i);
  }, []);

  // ESC schließt Modal
  useEffect(() => {
    if (!open) return;
    const h = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [open]);

  const handleSend = useCallback(async () => {
    if (!text.trim()) return;
    setSendState('sending');
    setSendError(null);
    const result = await addNote({ page, questionId, questionText: questionText?.slice(0, 80), type, text: text.trim() });
    setSendState(result.serverSynced ? 'synced' : 'localOnly');
    setSendError(result.error || null);
    setCount(c => c + 1);
    if (result.serverSynced) {
      setTimeout(() => { setSendState('idle'); setText(''); setOpen(false); }, 1400);
    }
  }, [text, type, page, questionId, questionText, addNote]);

  const activeType = NOTE_TYPES.find(t => t.value === type)!;

  // ── Floating Button ──────────────────────────────────────
  if (variant === 'float') {
    return (
      <>
        {/* Floating Button — fixed bottom-right */}
        <button
          onClick={() => setOpen(true)}
          title="Beat the AI — Notiz hinterlassen"
          style={{
            position: 'fixed', bottom: 88, right: 14, zIndex: 45,
            fontFamily: PIXEL_FONT,
            fontSize: 7,
            background: '#0a0a0a',
            border: '2px solid #C8191A',
            color: '#C8191A',
            padding: '8px 12px',
            cursor: 'pointer',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            boxShadow: '3px 3px 0 rgba(200,25,26,0.4), 0 0 12px rgba(200,25,26,0.15)',
            transition: 'transform 0.1s, box-shadow 0.1s',
            display: 'flex', alignItems: 'center', gap: 6,
            userSelect: 'none',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.transform = 'translate(-2px,-2px)';
            (e.currentTarget as HTMLButtonElement).style.boxShadow = '5px 5px 0 rgba(200,25,26,0.5)';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.transform = 'none';
            (e.currentTarget as HTMLButtonElement).style.boxShadow = '3px 3px 0 rgba(200,25,26,0.4)';
          }}
        >
          <span style={{ fontSize: 13 }}>🥊</span>
          <span>BEAT THE AI</span>
          {count > 0 && (
            <span style={{
              background: '#C8191A', color: '#fff',
              borderRadius: 0, padding: '2px 5px', fontSize: 7,
              fontFamily: PIXEL_FONT, minWidth: 18, textAlign: 'center',
            }}>
              {count}
            </span>
          )}
        </button>

        {/* Modal */}
        {open && <BeatModal
          page={page} questionId={questionId} questionText={questionText}
          text={text} setText={setText}
          type={type} setType={setType}
          sendState={sendState} sendError={sendError} onSend={handleSend} onClose={() => setOpen(false)}
          cursorBlink={cursorBlink} activeType={activeType}
          getServerNotes={getServerNotes}
        />}
      </>
    );
  }

  // ── Inline Button (auf Fragekarten) ─────────────────────
  return (
    <>
      <button
        onClick={(e) => { e.stopPropagation(); setOpen(true); }}
        title="Beat the AI"
        style={{
          fontFamily: PIXEL_FONT, fontSize: 6,
          background: 'transparent',
          border: '1px solid #2a0a0a',
          color: '#550a0a',
          padding: '4px 8px',
          cursor: 'pointer',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          transition: 'all 0.15s',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLButtonElement).style.borderColor = '#C8191A';
          (e.currentTarget as HTMLButtonElement).style.color = '#C8191A';
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLButtonElement).style.borderColor = '#2a0a0a';
          (e.currentTarget as HTMLButtonElement).style.color = '#550a0a';
        }}
      >
        🥊 beat
      </button>

      {open && <BeatModal
        page={page} questionId={questionId} questionText={questionText}
        text={text} setText={setText}
        type={type} setType={setType}
        sendState={sendState} sendError={sendError} onSend={handleSend} onClose={() => setOpen(false)}
        cursorBlink={cursorBlink} activeType={activeType}
        getServerNotes={getServerNotes}
      />}
    </>
  );
}

// ── Modal-Komponente ─────────────────────────────────────────────────
interface ModalProps {
  page: string;
  questionId?: string;
  questionText?: string;
  text: string;
  setText: (t: string) => void;
  type: BeatNote['type'];
  setType: (t: BeatNote['type']) => void;
  sendState: 'idle' | 'sending' | 'synced' | 'localOnly' | 'error';
  sendError: string | null;
  onSend: () => void;
  onClose: () => void;
  cursorBlink: boolean;
  activeType: typeof NOTE_TYPES[0];
  getServerNotes: ReturnType<typeof useBeatTheAI>['getServerNotes'];
}

function BeatModal({
  page, questionId, questionText,
  text, setText, type, setType,
  sendState, sendError, onSend, onClose, cursorBlink, activeType, getServerNotes,
}: ModalProps) {
  const [showArchive, setShowArchive] = useState(false);
  const [serverNotes, setServerNotes] = useState<BeatNote[]>([]);
  const [archiveState, setArchiveState] = useState<'idle' | 'loading' | 'error'>('idle');
  const [archiveError, setArchiveError] = useState<string | null>(null);

  const loadArchive = useCallback(async () => {
    setShowArchive(true);
    setArchiveState('loading');
    setArchiveError(null);
    const res = await getServerNotes();
    if (res.ok) {
      setServerNotes(res.notes);
      setArchiveState('idle');
    } else {
      setArchiveState('error');
      setArchiveError(res.error || 'Notizen konnten nicht geladen werden');
    }
  }, [getServerNotes]);

  const isBusy = sendState === 'sending';
  const isSynced = sendState === 'synced';
  const isLocalOnly = sendState === 'localOnly' || sendState === 'error';

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, zIndex: 200,
          background: 'rgba(0,0,0,0.75)',
          backdropFilter: 'blur(3px)',
        }}
      />

      {/* Terminal-Fenster */}
      <div
        onClick={e => e.stopPropagation()}
        style={{
          position: 'fixed', zIndex: 201,
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'min(92vw, 480px)',
          background: '#040d04',
          border: '2px solid #1a3a1a',
          boxShadow: '0 0 60px rgba(0,180,80,0.08), 6px 6px 0 rgba(0,0,0,0.8)',
          fontFamily: "'Courier New', monospace",
          overflow: 'hidden',
        }}
      >
        {/* Titelleiste */}
        <div style={{
          background: '#0a1a0a', borderBottom: '1px solid #1a3a1a',
          padding: '8px 12px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 10, height: 10, background: '#C8191A', cursor: 'pointer' }} onClick={onClose} />
            <div style={{ width: 10, height: 10, background: '#333' }} />
            <div style={{ width: 10, height: 10, background: '#333' }} />
            <span style={{ fontFamily: PIXEL_FONT, fontSize: 7, color: '#2a4a2a', marginLeft: 6 }}>
              beat_the_ai.exe
            </span>
          </div>
          <span style={{ fontFamily: PIXEL_FONT, fontSize: 6, color: '#2a4a2a' }}>
            WELLINGTOWN_PRODUCTIONS
          </span>
        </div>

        {/* Inhalt */}
        <div style={{ padding: '16px 18px 20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <button
              onClick={loadArchive}
              style={{
                fontFamily: PIXEL_FONT, fontSize: 6,
                background: showArchive ? '#00dd8822' : 'transparent',
                border: `1px solid ${showArchive ? '#00dd88' : '#1a3a1a'}`,
                color: showArchive ? '#00dd88' : '#2a4a2a',
                padding: '5px 8px',
                cursor: 'pointer',
                letterSpacing: '0.05em',
              }}
            >
              SERVER-ARCHIV
            </button>
            <span style={{ fontSize: 9, color: '#345a34' }}>
              live sync: Netlify Blobs
            </span>
          </div>

          {/* Kontext-Info */}
          <div style={{ marginBottom: 14, fontSize: 10, color: '#2a5a2a', lineHeight: 1.8 }}>
            <span style={{ color: '#888' }}>&gt; </span>
            <span style={{ color: '#00dd88' }}>page</span>
            <span style={{ color: '#555' }}>:</span>
            <span style={{ color: '#aaa' }}> {page}</span>
            {questionId && (
              <>
                <br />
                <span style={{ color: '#888' }}>&gt; </span>
                <span style={{ color: '#00dd88' }}>id</span>
                <span style={{ color: '#555' }}>:</span>
                <span style={{ color: '#aaa' }}> {questionId}</span>
              </>
            )}
            {questionText && (
              <>
                <br />
                <span style={{ color: '#888' }}>&gt; </span>
                <span style={{ color: '#00dd88' }}>q</span>
                <span style={{ color: '#555' }}>:</span>
                <span style={{ color: '#666' }}> {questionText.slice(0, 55)}{questionText.length > 55 ? '...' : ''}</span>
              </>
            )}
          </div>

          {/* Typ-Auswahl */}
          <div style={{ display: 'flex', gap: 6, marginBottom: 12, flexWrap: 'wrap' }}>
            {NOTE_TYPES.map(t => (
              <button
                key={t.value}
                onClick={() => setType(t.value)}
                style={{
                  fontFamily: PIXEL_FONT, fontSize: 6,
                  padding: '5px 9px',
                  background: type === t.value ? `${t.color}22` : 'transparent',
                  border: `1px solid ${type === t.value ? t.color : '#1a3a1a'}`,
                  color: type === t.value ? t.color : '#2a4a2a',
                  cursor: 'pointer',
                  letterSpacing: '0.05em',
                  transition: 'all 0.15s',
                }}
              >
                {t.emoji} {t.label}
              </button>
            ))}
          </div>

          {/* Prompt-Zeile */}
          <div style={{ marginBottom: 8, fontSize: 11, color: activeType.color }}>
            <span style={{ color: '#888' }}>&gt; </span>
            {type === 'correction' && 'was ist falsch oder besser?'}
            {type === 'idea'       && 'welche idee hast du?'}
            {type === 'source'     && 'welche quelle fehlt / ist falsch?'}
            {type === 'general'    && 'deine anmerkung:'}
            <span style={{
              display: 'inline-block', width: 7, height: 12,
              background: activeType.color, marginLeft: 4,
              verticalAlign: 'text-bottom',
              opacity: cursorBlink ? 1 : 0,
            }} />
          </div>

          {/* Textarea */}
          <textarea
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="// schreib hier..."
            autoFocus
            rows={4}
            onKeyDown={e => {
              if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) onSend();
            }}
            style={{
              width: '100%', boxSizing: 'border-box',
              background: '#020802',
              border: `1px solid ${text.trim() ? activeType.color + '66' : '#1a3a1a'}`,
              color: '#ccc',
              fontFamily: "'Courier New', monospace",
              fontSize: 12, lineHeight: 1.7,
              padding: '10px 12px',
              resize: 'vertical',
              outline: 'none',
              transition: 'border-color 0.2s',
            }}
          />

          <div style={{
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'center', marginTop: 12,
          }}>
            <span style={{ fontSize: 9, color: '#1a3a1a', fontFamily: PIXEL_FONT }}>
              ⌘+Enter zum Senden
            </span>

            {/* Senden-Button */}
            <button
              onClick={onSend}
              disabled={!text.trim() || isBusy || isSynced}
              style={{
                fontFamily: PIXEL_FONT, fontSize: 8,
                padding: '9px 16px',
                background: isSynced ? '#00dd88' : isLocalOnly ? '#f59e0b' : (text.trim() ? activeType.color : '#111'),
                border: `2px solid ${isSynced ? '#00dd88' : isLocalOnly ? '#f59e0b' : (text.trim() ? activeType.color : '#222')}`,
                color: '#fff',
                cursor: text.trim() && !isBusy && !isSynced ? 'pointer' : 'default',
                letterSpacing: '0.08em',
                boxShadow: text.trim() && !isBusy && !isSynced ? `3px 3px 0 ${activeType.color}66` : 'none',
                transition: 'all 0.15s',
              }}
            >
              {isBusy ? 'SENDE...' : isSynced ? '✓ SERVER OK' : isLocalOnly ? 'LOKAL GESICHERT' : 'SENDEN →'}
            </button>
          </div>

          {isLocalOnly && (
            <div style={{
              marginTop: 10,
              padding: '8px 10px',
              border: '1px solid #78350f',
              background: '#451a0322',
              color: '#fbbf24',
              fontSize: 10,
              lineHeight: 1.5,
            }}>
              Server-Sync fehlgeschlagen. Die Notiz ist lokal im Browser gespeichert.
              {sendError ? ` (${sendError})` : ''}
            </div>
          )}

          {showArchive && (
            <div style={{
              marginTop: 14,
              border: '1px solid #1a3a1a',
              background: '#020802',
              maxHeight: 170,
              overflowY: 'auto',
              padding: 10,
            }}>
              {archiveState === 'loading' && (
                <div style={{ fontSize: 10, color: '#00dd88' }}>&gt; lade server-notizen...</div>
              )}
              {archiveState === 'error' && (
                <div style={{ fontSize: 10, color: '#f87171' }}>&gt; {archiveError}</div>
              )}
              {archiveState === 'idle' && serverNotes.length === 0 && (
                <div style={{ fontSize: 10, color: '#2a4a2a' }}>&gt; server-archiv ist leer</div>
              )}
              {archiveState === 'idle' && serverNotes.slice().reverse().slice(0, 8).map(note => (
                <div key={note.id} style={{ borderBottom: '1px solid #102610', paddingBottom: 8, marginBottom: 8 }}>
                  <div style={{ fontSize: 9, color: '#00dd88' }}>
                    {new Date(note.timestamp).toLocaleString('de-DE')} · {note.type} · {note.page}
                  </div>
                  {note.questionId && <div style={{ fontSize: 9, color: '#537a53' }}>{note.questionId}</div>}
                  <div style={{ fontSize: 11, color: '#ccc', marginTop: 4, whiteSpace: 'pre-wrap' }}>{note.text}</div>
                </div>
              ))}
            </div>
          )}

          {/* Footer */}
          <div style={{ marginTop: 12, fontSize: 8, color: '#1a2a1a', textAlign: 'center', fontFamily: PIXEL_FONT }}>
            beat_the_ai · lokal + live · esc = close
          </div>
        </div>
      </div>
    </>
  );
}
