// src/types-bildertest.ts
export type BildertestItemType = 'person' | 'event' | 'object' | 'place' | 'symbol';
export type BildertestDifficulty = 'leicht' | 'mittel' | 'schwer';
export type BildertestProbability = 'niedrig' | 'mittel' | 'hoch' | 'sehr hoch';
export type BildertestImageStatus = 'NEEDS_IMAGE_REVIEW' | 'READY' | 'MISSING' | 'REPLACE';

export interface BildertestSource {
  title?: string;
  url: string;
}

export interface BildertestImageMeta {
  status: BildertestImageStatus;
  localPathSuggestion: string;
  searchQueries: string[];
  preferredSources: string[];
  licenseChecklist: string[];
  localPath?: string;
  credit?: string;
  licenseName?: string;
  licenseUrl?: string;
  photographer?: string;
  sourceUrl?: string;
}

export interface BildertestItem {
  id: string;
  roundId: string;
  itemType: BildertestItemType;
  difficulty: BildertestDifficulty;
  djsProbability: BildertestProbability;
  questionMode: 'image_to_name_role_context';
  prompt: string;
  correctAnswer: string;
  acceptableAnswers: string[];
  roleOrShortLabel: string;
  newsContext: string;
  eventDateOrWindow: string;
  countryOrRegion: string;
  category: string;
  distractors: string[];
  alternativePrompts: string[];
  tags: string[];
  image: BildertestImageMeta;
  sources: string[];
  sourceStatus: string;
  asOfDate: string;
  editorialNotes: string;
}

export interface BildertestRound {
  id: string;
  title: string;
  focus: string;
  targetMix: string;
  items: BildertestItem[];
}
