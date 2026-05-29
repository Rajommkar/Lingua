import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { zustandStorage } from "@/lib/storage";
import type { LanguageCode } from "@/types/learning";

type LanguageState = {
  selectedLanguageCode: LanguageCode | null;
  hasHydrated: boolean;
  setSelectedLanguageCode: (languageCode: LanguageCode) => void;
  clearSelectedLanguageCode: () => void;
  setHasHydrated: (hasHydrated: boolean) => void;
};

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      selectedLanguageCode: null,
      hasHydrated: false,
      setSelectedLanguageCode: (languageCode) =>
        set({ selectedLanguageCode: languageCode }),
      clearSelectedLanguageCode: () => set({ selectedLanguageCode: null }),
      setHasHydrated: (hasHydrated) => set({ hasHydrated }),
    }),
    {
      name: "language-store",
      storage: createJSONStorage(() => zustandStorage),
      onRehydrateStorage: () => () => {
        useLanguageStore.setState({ hasHydrated: true });
      },
      partialize: (state) => ({
        selectedLanguageCode: state.selectedLanguageCode,
      }),
    },
  ),
);
