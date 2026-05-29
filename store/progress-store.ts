import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { zustandStorage } from "@/lib/storage";

type ProgressState = {
  xp: number;
  dailyGoal: number;
  streak: number;
  completedLessons: string[];
  completedTodayPlanItems: string[];
  addXp: (amount: number) => void;
  completeLesson: (lessonId: string) => void;
  toggleTodayPlanItem: (itemId: string) => void;
  incrementStreak: () => void;
  hasHydrated: boolean;
};

export const useProgressStore = create<ProgressState>()(
  persist(
    (set) => ({
      xp: 15,
      dailyGoal: 20,
      streak: 12,
      completedLessons: [],
      completedTodayPlanItems: ["lesson"], // "lesson" checked by default as in screenshot
      addXp: (amount) => set((state) => ({ xp: state.xp + amount })),
      completeLesson: (lessonId) =>
        set((state) => ({
          completedLessons: state.completedLessons.includes(lessonId)
            ? state.completedLessons
            : [...state.completedLessons, lessonId],
        })),
      toggleTodayPlanItem: (itemId) =>
        set((state) => ({
          completedTodayPlanItems: state.completedTodayPlanItems.includes(itemId)
            ? state.completedTodayPlanItems.filter((id) => id !== itemId)
            : [...state.completedTodayPlanItems, itemId],
        })),
      incrementStreak: () => set((state) => ({ streak: state.streak + 1 })),
      hasHydrated: false,
    }),
    {
      name: "progress-store",
      storage: createJSONStorage(() => zustandStorage),
      onRehydrateStorage: () => () => {
        useProgressStore.setState({ hasHydrated: true });
      },
    },
  ),
);
