import type { LanguageCode, Unit } from "@/types/learning";
import { additionalUnits } from "@/data/additional-units";

const baseUnits: Unit[] = [
  // Spanish â€” beginner
  {
    id: "es-unit-1",
    languageCode: "es",
    order: 1,
    title: "Hello & Goodbye",
    description: "Greet people and say goodbye in Spanish.",
    difficulty: "beginner",
    xpReward: 50,
  },
  {
    id: "es-unit-2",
    languageCode: "es",
    order: 2,
    title: "Nice to Meet You",
    description: "Introduce yourself and ask simple questions.",
    difficulty: "beginner",
    xpReward: 50,
  },
  // French â€” beginner
  {
    id: "fr-unit-1",
    languageCode: "fr",
    order: 1,
    title: "Bonjour!",
    description: "Learn essential French greetings.",
    difficulty: "beginner",
    xpReward: 50,
  },
  // Japanese â€” beginner
  {
    id: "ja-unit-1",
    languageCode: "ja",
    order: 1,
    title: "First Words",
    description: "Polite greetings and thanks in Japanese.",
    difficulty: "beginner",
    xpReward: 50,
  },
];

export const units: Unit[] = [...baseUnits, ...additionalUnits];

export function getUnitsByLanguage(code: LanguageCode): Unit[] {
  return units
    .filter((unit) => unit.languageCode === code)
    .sort((a, b) => a.order - b.order);
}

export function getUnitById(id: string): Unit | undefined {
  return units.find((unit) => unit.id === id);
}


