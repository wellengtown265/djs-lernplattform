/**
 * useBeatTheAI — Notiz-System für Beat the AI
 *
 * Speichert Notizen immer lokal und synchronisiert zusätzlich mit /api/notes.
 *
 * Dev:        Vite middleware schreibt BEAT_THE_AI_NOTES.json + .md
 * Production: Netlify Function schreibt persistent in Netlify Blobs
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

export interface BeatNotesResponse {
  ok: boolean;
  notes: BeatNote[];
  total: number;
  lastUpdated: string | null;
  error?: string;
}

export interface AddBeatNoteResult {
  note: BeatNote;
  serverSynced: boolean;
  error?: string;
}

function loadNotes(): BeatNote[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch { return []; }
}

function saveNotes(notes: BeatNote[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

async function postToAPI(note: BeatNote): Promise<{ ok: true } | { ok: false; error: string }> {
  try {
    const res = await fetch('/api/notes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(note),
    });
    if (!res.ok) {
      let detail = '';
      try {
        const body = await res.json();
        detail = body?.error ? `: ${body.error}` : '';
      } catch {}
      return { ok: false, error: `Server antwortet ${res.status}${detail}` };
    }
    return { ok: true };
  } catch {
    return { ok: false, error: 'Server nicht erreichbar; lokal gespeichert' };
  }
}

async function fetchFromAPI(): Promise<BeatNotesResponse> {
  try {
    const res = await fetch('/api/notes', { method: 'GET' });
    if (!res.ok) {
      return {
        ok: false,
        notes: [],
        total: 0,
        lastUpdated: null,
        error: `Server antwortet ${res.status}`,
      };
    }
    const data = await res.json();
    return {
      ok: data?.ok !== false,
      notes: Array.isArray(data?.notes) ? data.notes : [],
      total: typeof data?.total === 'number' ? data.total : Array.isArray(data?.notes) ? data.notes.length : 0,
      lastUpdated: typeof data?.lastUpdated === 'string' ? data.lastUpdated : null,
    };
  } catch {
    return {
      ok: false,
      notes: [],
      total: 0,
      lastUpdated: null,
      error: 'Server nicht erreichbar',
    };
  }
}

export function useBeatTheAI() {
  const addNote = async (
    note: Omit<BeatNote, 'id' | 'timestamp'>
  ): Promise<AddBeatNoteResult> => {
    const full: BeatNote = {
      ...note,
      id: `beat-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      timestamp: new Date().toISOString(),
    };
    const existing = loadNotes();
    saveNotes([...existing, full]);
    const posted = await postToAPI(full);
    return posted.ok
      ? { note: full, serverSynced: true }
      : { note: full, serverSynced: false, error: posted.error };
  };

  const getAllNotes = (): BeatNote[] => loadNotes();
  const getNoteCount = (): number => loadNotes().length;
  const getServerNotes = (): Promise<BeatNotesResponse> => fetchFromAPI();

  return { addNote, getAllNotes, getNoteCount, getServerNotes };
}
