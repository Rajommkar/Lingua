/** Stable language codes used across the app and content files. */
export type LanguageCode = "es" | "fr" | "ja";

export type DifficultyLevel = "beginner" | "intermediate" | "advanced";

export type ActivityType =
  | "vocabulary"
  | "phrases"
  | "listening"
  | "speaking"
  | "vision-teacher"
  | "chat-tutor"
  | "review";

/** A language the user can learn in Lingua. */
export type Language = {
  code: LanguageCode;
  name: string;
  nativeName: string;
  /** Short label for UI chips, e.g. "ES" */
  shortLabel: string;
  flagEmoji: string;
  description: string;
  difficultyLevels: DifficultyLevel[];
  isAvailable: boolean;
};

/** A themed group of lessons (e.g. "Greetings"). */
export type Unit = {
  id: string;
  languageCode: LanguageCode;
  order: number;
  title: string;
  description: string;
  difficulty: DifficultyLevel;
  /** Total XP awarded when all lessons in the unit are completed. */
  xpReward: number;
};

export type VocabularyItem = {
  id: string;
  term: string;
  translation: string;
  /** Optional phonetic hint for learners, e.g. "OH-lah" */
  pronunciationHint?: string;
  partOfSpeech?: "noun" | "verb" | "adjective" | "phrase" | "other";
  exampleSentence?: string;
  exampleTranslation?: string;
};

export type PhraseItem = {
  id: string;
  phrase: string;
  translation: string;
  context?: string;
  pronunciationHint?: string;
};

export type LessonGoal = {
  id: string;
  description: string;
};

/**
 * Prompt bundle for a future Stream Vision Agent audio/video teacher lesson.
 * The backend will use these strings when starting an agent session.
 */
export type AITeacherPrompt = {
  /** High-level role and tone for the AI teacher. */
  systemContext: string;
  /** What the teacher says when the lesson starts. */
  openingScript: string;
  /** Skills or topics the teacher should cover in this session. */
  teachingFocus: string[];
  /** Short role-play or drill scenarios for the learner. */
  practiceScenarios: string[];
  /** How the teacher should close the lesson. */
  wrapUpScript: string;
};

type ActivityBase = {
  id: string;
  title: string;
  order: number;
  estimatedMinutes?: number;
};

export type VocabularyActivity = ActivityBase & {
  type: "vocabulary";
  items: VocabularyItem[];
};

export type PhrasesActivity = ActivityBase & {
  type: "phrases";
  items: PhraseItem[];
};

export type ListeningActivity = ActivityBase & {
  type: "listening";
  /** IDs of vocabulary items to practice in this listening block. */
  vocabularyIds: string[];
  instructions: string;
};

export type SpeakingActivity = ActivityBase & {
  type: "speaking";
  /** IDs of phrases the learner should try to say aloud. */
  phraseIds: string[];
  instructions: string;
};

export type VisionTeacherActivity = ActivityBase & {
  type: "vision-teacher";
  prompt: AITeacherPrompt;
};

export type ChatTutorActivity = ActivityBase & {
  type: "chat-tutor";
  starterMessage: string;
  suggestedTopics: string[];
};

export type ReviewActivity = ActivityBase & {
  type: "review";
  vocabularyIds: string[];
  phraseIds: string[];
};

export type Activity =
  | VocabularyActivity
  | PhrasesActivity
  | ListeningActivity
  | SpeakingActivity
  | VisionTeacherActivity
  | ChatTutorActivity
  | ReviewActivity;

/** A single teachable lesson inside a unit. */
export type Lesson = {
  id: string;
  unitId: string;
  languageCode: LanguageCode;
  order: number;
  title: string;
  description: string;
  difficulty: DifficultyLevel;
  /** XP granted when the lesson is marked complete. */
  xpReward: number;
  estimatedMinutes: number;
  goals: LessonGoal[];
  vocabulary: VocabularyItem[];
  phrases: PhraseItem[];
  activities: Activity[];
};
