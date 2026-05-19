import fs from 'node:fs';
import path from 'node:path';

const LIVE_URL = process.env.BEAT_NOTES_URL || 'https://learn-hard-wibe-code.netlify.app/api/notes';
const root = path.resolve(process.cwd(), '..');
const jsonPath = path.join(root, 'BEAT_THE_AI_NOTES.json');
const mdPath = path.join(root, 'BEAT_THE_AI_NOTES.md');

const TYPE_LABEL = {
  correction: 'Korrekturen',
  source: 'Quellen',
  idea: 'Ideen',
  general: 'Allgemeines',
};

const TYPE_ICON = {
  correction: 'X',
  source: 'LINK',
  idea: 'IDEA',
  general: 'NOTE',
};

function fmtDate(iso) {
  try {
    return new Date(iso).toLocaleString('de-DE');
  } catch {
    return iso;
  }
}

function writeMarkdown(notes) {
  const lines = [
    '# Beat the AI - Notizen',
    '',
    `Stand: ${new Date().toLocaleString('de-DE')} - ${notes.length} Notizen`,
    '',
    '---',
    '',
  ];

  for (const type of ['correction', 'source', 'idea', 'general']) {
    const group = notes.filter(n => (n.type || 'general') === type);
    if (!group.length) continue;

    lines.push(`## ${TYPE_LABEL[type]} (${group.length})`, '');
    for (const note of group.slice().reverse()) {
      lines.push(`### ${TYPE_ICON[type]} ${fmtDate(note.timestamp)}`);
      lines.push(`- Seite: \`${note.page || 'unknown'}\``);
      if (note.questionId) lines.push(`- Frage-ID: \`${note.questionId}\``);
      if (note.questionText) lines.push(`- Frage: ${note.questionText}`);
      lines.push('', note.text || '', '', '---', '');
    }
  }

  fs.writeFileSync(mdPath, lines.join('\n'), 'utf-8');
}

const res = await fetch(LIVE_URL);
if (!res.ok) {
  throw new Error(`GET ${LIVE_URL} failed with ${res.status}`);
}

const data = await res.json();
const notes = Array.isArray(data.notes) ? data.notes : [];
notes.sort((a, b) => String(a.timestamp).localeCompare(String(b.timestamp)));

fs.writeFileSync(
  jsonPath,
  JSON.stringify({ notes, lastUpdated: notes.at(-1)?.timestamp || null }, null, 2),
  'utf-8'
);
writeMarkdown(notes);

console.log(`Synced ${notes.length} Beat-the-AI notes`);
console.log(jsonPath);
console.log(mdPath);
