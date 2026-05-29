import { useAuth } from "@clerk/expo";
import { Redirect, Stack } from "expo-router";

import { AuthScreen } from "@/components/auth-screen";

export default function SignUpScreen() {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) {
    return null;
  }

  if (isSignedIn) {
    return <Redirect href="/" />;
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <AuthScreen mode="sign-up" />
    </>
  );
}
