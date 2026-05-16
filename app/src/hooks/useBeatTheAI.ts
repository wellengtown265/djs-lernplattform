/**
 * useBeatTheAI — Notiz-System für Beat the AI
 *
 * Speichert Notizen in localStorage UND posted sie an
 * /api/notes (Vite dev middleware → BEAT_THE_AI_NOTES.json + .md)
 */

export interface BeatNote {
  id: string;
  timestamp: string;
  page: string;
  questionId?: string;
  questionText?: string;
  type: 'correction' | 'idea' | 'source' | 'general';
  text: string;
}

const STORAGE_KEY = 'djs_beat_the_ai_notes';

function loadNotes(): BeatNote[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch { return []; }
}

function saveNotes(notes: BeatNote[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

async function postToAPI(note: BeatNote) {
  try {
    await fetch('/api/notes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(note),
    });
  } catch {
    // Im Production-Build kein Dev-Server → nur localStorage
  }
}

export function useBeatTheAI() {
  const addNote = async (
    note: Omit<BeatNote, 'id' | 'timestamp'>
  ): Promise<BeatNote> => {
    const full: BeatNote = {
      ...note,
      id: `beat-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      timestamp: new Date().toISOString(),
    };
    const existing = loadNotes();
    saveNotes([...existing, full]);
    await postToAPI(full);
    return full;
  };

  const getAllNotes = (): BeatNote[] => loadNotes();
  const getNoteCount = (): number => loadNotes().length;

  return { addNote, getAllNotes, getNoteCount };
}
