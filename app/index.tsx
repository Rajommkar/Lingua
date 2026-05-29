import { useAuth } from "@clerk/expo";
import { Redirect } from "expo-router";

import { useLanguageStore } from "@/store/language-store";

export default function Index() {
  const { isLoaded, isSignedIn } = useAuth();
  const selectedLanguageCode = useLanguageStore(
    (state) => state.selectedLanguageCode,
  );
  const hasHydrated = useLanguageStore((state) => state.hasHydrated);

  if (!isLoaded) {
    return null;
  }

  if (!isSignedIn) {
    return <Redirect href="/onboarding" />;
  }

  if (!hasHydrated) {
    return null;
  }

  if (!selectedLanguageCode) {
    return <Redirect href="/choose-language" />;
  }

  return <Redirect href="/home" />;
}
