# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All commands must be run from the `app/` directory (where `package.json` lives).

```bash
npm run dev              # Start Vite dev server (hot reload, no restart needed after file changes)
npm run build            # TypeScript check + Vite production build
npm run preview          # Preview the production build locally
npm run lint:questions   # Quality lint of src/data/questions.json (siehe scripts/lint-questions.mjs)
```

No test suite exists. Validate changes by running `npm run build` (catches TypeScript errors) and checking the browser.

**Question-Quality Workflow:** Before adding/changing questions, always run `npm run lint:questions`. Errors block (E1–E5: duplicate IDs, missing answers, options/answer mismatch, missing question text, invalid reviewStatus). Warnings inform (W1: no source URL, W2: relative time phrase without asOfDate, W3: empty explanation/context). Reference doc: `KRITISCHE_FRAGEN.md` (in project root) lists all currently flagged questions.

**PATH note:** `node`/`npx` may not be in the shell PATH by default. Use the full path or `npm run` scripts.

## Architecture

Single-page React 18 + TypeScript + Vite app. No router — page state is managed manually via a `page` string in `App.tsx`.

### Data flow

- `src/data/questions.json` and `src/data/categories.json` are the single source of truth, imported statically at build time.
- `useGameState` (in `src/hooks/`) manages all user progress via `localStorage` key `djs_gamestate_v1`. It exposes `answerQuestion`, `getDueQuestions` (spaced repetition), `getCompletionByCategory`, and `resetProgress`.
- `App.tsx` passes `questions`, `categories`, and `gameState` down to every page as props. No context or global store.

### Pages (`src/pages/`)

| Page | Route string | Purpose |
|------|-------------|---------|
| `Dashboard` | `'dashboard'` | Overview, progress, recommended questions |
| `QuizMode` | `'quiz'` | Timed quiz filtered by optional category |
| `LearningMode` | `'learn'` | Flashcard-style learning with explanation |
| `Statistics` | `'stats'` | Charts via Recharts, badge display |

### Question schema (`src/types.ts → Question`)

Required fields: `id`, `year`, `type`, `category`, `subcategory`, `difficulty`, `question`, `options`, `correctAnswers`, `explanation`, `context`, `sources`, `relatedQuestions`, `tags`, `verificationStatus`.

- Valid `type`: `"singlechoice"` | `"multiplechoice"` | `"cloze"` | `"matching"`
- Valid `difficulty`: `"leicht"` | `"mittel"` | `"schwer"`
- Valid `category` values (must match `categories.json` names exactly):
  - `"Deutsche Politik"`, `"Internationale Politik"`, `"Wirtschaft & Finanzen"`, `"Gesellschaft & Recht"`, `"Wissenschaft & Technik"`, `"Sport"`, `"Kultur & Medien"`, `"Geografie & Karten"`

ID convention: `djs{year}{categoryCode}{3-digit-number}` e.g. `djs2025dp001` (dp = Deutsche Politik, ip = Internationale Politik, wf = Wirtschaft & Finanzen, gr = Gesellschaft & Recht, wt = Wissenschaft & Technik, sp = Sport, mc = Medien/Kultur, geo = Geografie).

### Spaced repetition

`useGameState.getDueQuestions()` filters questions by `nextReview` date. Confidence levels: `new → wrong → unsure → correct → verySure → mastered`. Intervals: wrong=10min, unsure=1d, correct=3d, verySure=7d, mastered=14d.

### Gamification

XP: +50 quiz, +60 learning, -10 wrong. Bonuses: +100 after 5 correct today, +500 after 50 this week. Badges are awarded at 25/50/75/100% question coverage and 7/30-day streaks. **Note:** The badge threshold in `useGameState.ts:119` still uses the hardcoded `totalQ = 64` — update this when the question count changes significantly.

### Styling

Tailwind CSS with custom config in `tailwind.config.js`:
- `djs-red` = `#C8191A`
- Font: Playfair Display (serif) for headlines and the intro countdown
- Dark-only design (`bg-gray-950` base, `text-gray-100`)

### IntroScreen

`src/components/IntroScreen.tsx` renders as a `fixed inset-0 z-50` overlay on every app load (`showIntro` state in `App.tsx`). Dismissable via click, Enter, or Space. The exam date is hardcoded as `2026-06-27`. DJS logo served from `public/djs-logo.jpg`.

## Adding new questions

Add entries directly to `src/data/questions.json`. The app picks them up on next dev server reload (no restart needed). When merging large batches from external JSON files, use Python:

```python
import json
with open('src/data/questions.json') as f:
    existing = json.load(f)
with open('/tmp/new_questions.json') as f:
    new_qs = json.load(f)
existing_ids = {q['id'] for q in existing}
added = [q for q in new_qs if q['id'] not in existing_ids]
existing.extend(added)
with open('src/data/questions.json', 'w') as f:
    json.dump(existing, f, ensure_ascii=False, indent=2)
```

**Important:** Write JSON files with German characters using the `Write` tool, not Python heredocs — Python string literals break on typographic quotes (`„"`).
