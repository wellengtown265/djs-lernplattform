import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';

const NOTES_FILE = path.resolve(__dirname, '../BEAT_THE_AI_NOTES.json');
const MD_FILE    = path.resolve(__dirname, '../BEAT_THE_AI_NOTES.md');

const TYPE_EMOJI: Record<string, string> = { correction:'✗', idea:'💡', source:'🔗', general:'📝' };
const TYPE_LABEL: Record<string, string> = {
  correction:'✗ Korrekturen', idea:'💡 Ideen', source:'🔗 Quellen', general:'📝 Allgemeines',
};

function ensureFile() {
  if (!fs.existsSync(NOTES_FILE))
    fs.writeFileSync(NOTES_FILE, JSON.stringify({ notes:[], lastUpdated:null }, null, 2), 'utf-8');
}

function writeMarkdown(notes: any[]) {
  const lines = [
    '# 🥊 Beat the AI — Notizen',
    '', `*Stand: ${new Date().toLocaleString('de-DE')} · ${notes.length} Notizen*`, '', '---', '',
  ];
  const byType: Record<string, any[]> = {};
  for (const n of notes) { const t = n.type||'general'; (byType[t]??=[]).push(n); }
  for (const type of ['correction','source','idea','general']) {
    const g = byType[type]; if (!g?.length) continue;
    lines.push(`## ${TYPE_LABEL[type]} (${g.length})\n`);
    for (const n of [...g].reverse()) {
      lines.push(`### ${TYPE_EMOJI[type]} ${new Date(n.timestamp).toLocaleString('de-DE')}`);
      if (n.page)         lines.push(`**Seite:** \`${n.page}\``);
      if (n.questionId)   lines.push(`**Frage-ID:** \`${n.questionId}\``);
      if (n.questionText) lines.push(`**Frage:** ${n.questionText}`);
      lines.push('', n.text, '', '---', '');
    }
  }
  fs.writeFileSync(MD_FILE, lines.join('\n'), 'utf-8');
}

function beatPlugin() {
  return {
    name: 'beat-the-ai',
    configureServer(server: any) {
      ensureFile();
      server.middlewares.use((req: any, res: any, next: any) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        if (req.method === 'OPTIONS') { res.writeHead(204); res.end(); return; }

        if (req.method === 'GET' && req.url === '/api/notes') {
          res.setHeader('Content-Type','application/json');
          res.writeHead(200);
          res.end(fs.readFileSync(NOTES_FILE,'utf-8'));
          return;
        }
        if (req.method === 'POST' && req.url === '/api/notes') {
          let body = '';
          req.on('data', (c: Buffer) => { body += c.toString(); });
          req.on('end', () => {
            try {
              const note = JSON.parse(body);
              ensureFile();
              const data = JSON.parse(fs.readFileSync(NOTES_FILE,'utf-8'));
              data.notes.push(note);
              data.lastUpdated = new Date().toISOString();
              fs.writeFileSync(NOTES_FILE, JSON.stringify(data, null, 2), 'utf-8');
              writeMarkdown(data.notes);
              res.setHeader('Content-Type','application/json');
              res.writeHead(200);
              res.end(JSON.stringify({ ok:true, total:data.notes.length }));
            } catch { res.writeHead(400); res.end('{}'); }
          });
          return;
        }
        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), beatPlugin()],
});
