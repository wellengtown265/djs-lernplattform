/**
 * DJS-Quiz Types — separat vom Haupt-Quiz, weil Schema anders ist:
 * - Inline-Kontext statt Tabs
 * - Drei Fragetypen: multiplechoice, textinput, keywords (Mehrfach-Stichwörter)
 * - Eigene XP-Logik (+75 / -15, ×1.5 ab Streak 5)
 */

export type DJSQuestionType = 'multiplechoice' | 'textinput' | 'keywords';

export interface DJSQuestion {
  /** Stable id, z. B. "djs-special-001" */
  id: string;
  type: DJSQuestionType;
  /** Stamm der Frage (h2) */
  question: string;
  /** Nur bei multiplechoice gefüllt */
  options?: string[];
  /** Korrekte Antwort(en).
   *  - multiplechoice: genau ein String aus `options`
   *  - textinput:      ein oder mehrere akzeptierte Texte (case-insensitive, trim, fuzzy)
   *  - keywords:       Liste von Stichwörtern; richtig, wenn min. `requiredKeywords` Keywords matchen
   */
  correctAnswers: string[];
  /** Nur bei keywords — wie viele Stichwörter müssen mind. genannt werden? */
  requiredKeywords?: number;
  /** Inline-Kontext, der nach Antwort angezeigt wird (Markdown-light, \n erlaubt) */
  context: string;
  /** Quelle, z. B. "Deutscher Journalisten-Verband" */
  source?: string;
  /** Optional: Tags zum späteren Filtern */
  tags?: string[];
}

export interface DJSAnswerRecord {
  questionId: string;
  correct: boolean;
  xpEarned: number;
  givenAnswer: string;
  timestamp: string;
}

export interface DJSProgress {
  /** Wie viele Fragen heute beantwortet (egal ob richtig/falsch) */
  answered: number;
  /** Davon richtig */
  correct: number;
  /** Total XP über alle DJS-Quiz-Sessions */
  totalXp: number;
  /** Aktuelle Streak (Tage in Folge mit min. 1 DJS-Frage richtig) */
  streak: number;
  /** ISO-Datum der letzten Session */
  lastSessionDate: string;
}
