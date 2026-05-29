import type { Language, LanguageCode } from "@/types/learning";

export const languages: Language[] = [
  {
    code: "es",
    name: "Spanish",
    nativeName: "Español",
    shortLabel: "ES",
    flagEmoji: "🇪🇸",
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
