import type { Language, LanguageCode } from "@/types/learning";

export const languages: Language[] = [
  {
    code: "de",
    name: "German",
    nativeName: "Deutsch",
    shortLabel: "DE",
    flagEmoji: "🇩🇪",
    learnerCountLabel: "15.2M learners",
    description: "Learn practical German for everyday conversations.",
    difficultyLevels: ["beginner", "intermediate"],
    isAvailable: true,
  },
  {
    code: "es",
    name: "Spanish",
    nativeName: "Español",
    shortLabel: "ES",
    flagEmoji: "🇪🇸",
    learnerCountLabel: "28.4M learners",
    description: "Learn everyday Spanish for travel and conversation.",
    difficultyLevels: ["beginner", "intermediate"],
    isAvailable: true,
  },
  {
    code: "fr",
    name: "French",
    nativeName: "Français",
    shortLabel: "FR",
    flagEmoji: "🇫🇷",
    learnerCountLabel: "12.1M learners",
    description: "Build confidence with friendly French greetings and phrases.",
    difficultyLevels: ["beginner"],
    isAvailable: true,
  },
  {
    code: "ja",
    name: "Japanese",
    nativeName: "日本語",
    shortLabel: "JA",
    flagEmoji: "🇯🇵",
    learnerCountLabel: "9.8M learners",
    description: "Start with polite Japanese you can use right away.",
    difficultyLevels: ["beginner"],
    isAvailable: true,
  },
];

export function getLanguageByCode(code: LanguageCode): Language | undefined {
  return languages.find((language) => language.code === code);
}

export function getAvailableLanguages(): Language[] {
  return languages.filter((language) => language.isAvailable);
}
