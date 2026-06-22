import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { zustandStorage } from "@/lib/storage";

type ProgressState = {
  xp: number;
  dailyXp: number;
  lastActiveDate: string;
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
      dailyXp: 0,
      lastActiveDate: new Date().toDateString(),
      dailyGoal: 20,
      streak: 12,
      completedLessons: ["es-unit-3-lesson-1", "es-unit-3-lesson-2"],
      completedTodayPlanItems: [],
      addXp: (amount) =>
        set((state) => {
          const today = new Date().toDateString();
          const isNewDay = state.lastActiveDate !== today;
          return {
            xp: state.xp + amount,
            dailyXp: (isNewDay ? 0 : state.dailyXp || 0) + amount,
            lastActiveDate: today,
          };
        }),
      completeLesson: (lessonId) =>
        set((state) => ({
          completedLessons: state.completedLessons.includes(lessonId)
            ? state.completedLessons
            : [...state.completedLessons, lessonId],
        })),
      toggleTodayPlanItem: (itemId) =>
        set((state) => ({
          completedTodayPlanItems: state.completedTodayPlanItems.includes(
            itemId,
          )
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
