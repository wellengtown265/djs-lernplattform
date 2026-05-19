/**
 * Beat-the-AI Notes — Netlify Function
 *
 * Persistente Notizen-API für Production (Netlify Blobs).
 * Im Dev-Server übernimmt der Vite-Plugin (vite.config.ts) den gleichen Endpoint
 * und schreibt in BEAT_THE_AI_NOTES.json + .md.
 *
 * Storage-Modell:
 *   Jeder Note liegt als eigener Blob unter Key `note-<id>` in Store
 *   `beat-the-ai-notes`. Damit gibt es keine Race-Condition beim Append
 *   (wie es ein einzelnes Array-Blob hätte).
 *
 * Endpoints:
 *   GET  /api/notes   → { notes: BeatNote[], total: number, lastUpdated: string|null }
 *   POST /api/notes   → { ok: true, note: BeatNote }
 *   DELETE /api/notes?id=...  → { ok: true } (für Test/Cleanup)
 */
import { getStore } from "@netlify/blobs";

interface BeatNote {
  id: string;
  timestamp: string;
  page: string;
  questionId?: string;
  questionText?: string;
  type: "correction" | "idea" | "source" | "general";
  text: string;
}

const STORE_NAME = "beat-the-ai-notes";
const KEY_PREFIX = "note-";

function corsHeaders(): HeadersInit {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
  };
}

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), { status, headers: corsHeaders() });
}

function errJson(message: string, status = 400): Response {
  return json({ ok: false, error: message }, status);
}

function makeId(): string {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}

function isValidType(t: unknown): t is BeatNote["type"] {
  return t === "correction" || t === "idea" || t === "source" || t === "general";
}

function sanitize(input: any): BeatNote {
  const id = (typeof input?.id === "string" && input.id) || makeId();
  const ts = (typeof input?.timestamp === "string" && input.timestamp) || new Date().toISOString();
  const type = isValidType(input?.type) ? input.type : "general";
  const page = typeof input?.page === "string" ? input.page.slice(0, 80) : "unknown";
  const text = typeof input?.text === "string" ? input.text.slice(0, 4000).trim() : "";
  return {
    id,
    timestamp: ts,
    page,
    type,
    text,
    ...(typeof input?.questionId === "string" ? { questionId: input.questionId.slice(0, 80) } : {}),
    ...(typeof input?.questionText === "string"
      ? { questionText: input.questionText.slice(0, 200) }
      : {}),
  };
}

export default async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: corsHeaders() });

  const store = getStore({ name: STORE_NAME, consistency: "strong" });

  try {
    if (req.method === "GET") {
      const list = await store.list({ prefix: KEY_PREFIX });
      const notes: BeatNote[] = [];
      for (const b of list.blobs) {
        const n = await store.get(b.key, { type: "json" });
        if (n && typeof n === "object") notes.push(n as BeatNote);
      }
      notes.sort((a, b) => a.timestamp.localeCompare(b.timestamp));
      const lastUpdated = notes.length ? notes[notes.length - 1].timestamp : null;
      return json({ ok: true, notes, total: notes.length, lastUpdated });
    }

    if (req.method === "POST") {
      let body: unknown;
      try {
        body = await req.json();
      } catch {
        return errJson("Invalid JSON body", 400);
      }
      const note = sanitize(body);
      if (!note.text) return errJson("note.text required (non-empty)", 422);
      await store.setJSON(`${KEY_PREFIX}${note.id}`, note);
      return json({ ok: true, note });
    }

    if (req.method === "DELETE") {
      const url = new URL(req.url);
      const id = url.searchParams.get("id");
      if (!id) return errJson("id required", 400);
      await store.delete(`${KEY_PREFIX}${id}`);
      return json({ ok: true });
    }

    return errJson(`Method ${req.method} not allowed`, 405);
  } catch (err: any) {
    return errJson(`Server error: ${err?.message || "unknown"}`, 500);
  }
};

export const config = {
  path: "/api/notes",
};
