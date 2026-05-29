import { useAuth, useClerk } from "@clerk/expo";
import { Redirect, Stack } from "expo-router";
import { useEffect, useState } from "react";

import { AuthScreen } from "@/components/auth-screen";

export default function SignInScreen() {
  const { isLoaded, isSignedIn } = useAuth();
  const clerk = useClerk();
  const [isRecoveringSession, setIsRecoveringSession] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function recoverExistingSession() {
      if (!isLoaded) {
        return;
      }

      if (isSignedIn) {
        if (isMounted) {
          setIsRecoveringSession(false);
        }
        return;
      }

      const sessionId =
        clerk.session?.id ??
        clerk.client?.lastActiveSessionId ??
        clerk.client?.sessions?.[0]?.id;

      if (sessionId) {
        try {
          await clerk.setActive({ session: sessionId });
        } catch {
          // AuthScreen handles manual recovery if activation fails.
        }
      }

      if (isMounted) {
        setIsRecoveringSession(false);
      }
    }

    void recoverExistingSession();

    return () => {
      isMounted = false;
    };
  }, [clerk, isLoaded, isSignedIn]);

  if (!isLoaded || isRecoveringSession) {
    return null;
  }

  if (isSignedIn) {
    return <Redirect href="/" />;
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <AuthScreen mode="sign-in" />
    </>
  );
}
