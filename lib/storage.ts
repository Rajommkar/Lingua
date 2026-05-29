import AsyncStorage from "@react-native-async-storage/async-storage";
import type { StateStorage } from "zustand/middleware";

/**
 * Zustand-compatible storage that never throws uncaught promise rejections.
 * Falls back gracefully if the native AsyncStorage module is unavailable.
 */
export const zustandStorage: StateStorage = {
  getItem: async (name) => {
    try {
      return (await AsyncStorage.getItem(name)) ?? null;
    } catch {
      return null;
    }
  },
  setItem: async (name, value) => {
    try {
      await AsyncStorage.setItem(name, value);
    } catch {
      // Keep in-memory state; persistence is best-effort.
    }
  },
  removeItem: async (name) => {
    try {
      await AsyncStorage.removeItem(name);
    } catch {
      // Ignore removal failures.
    }
  },
};
