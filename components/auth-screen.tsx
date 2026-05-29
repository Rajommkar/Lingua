import { AntDesign, Feather, FontAwesome } from "@expo/vector-icons";
import {
  isClerkAPIResponseError,
  useAuth,
  useClerk,
  useSSO,
  useSignIn,
  useSignUp,
} from "@clerk/expo";
import { type Href, Link, router } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  Image,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "@/constants/images";

import { VerificationModal } from "./verification-modal";

type AuthMode = "sign-up" | "sign-in";
type SocialStrategy = "oauth_google" | "oauth_facebook" | "oauth_apple";

type AuthScreenProps = {
  mode: AuthMode;
};

const contentByMode = {
  "sign-up": {
    title: "Create your account",
    subtitle: "Start your language journey today ✨",
    buttonLabel: "Sign Up",
    footerLabel: "Already have an account?",
    footerLinkLabel: "Log in",
    footerHref: "/sign-in" as Href,
    email: "alex@gmail.com",
    password: "•••••••••",
  },
  "sign-in": {
    title: "Welcome back!",
    subtitle: "Continue your language journey ✨",
    buttonLabel: "Sign In",
    footerLabel: "Need an account?",
    footerLinkLabel: "Sign up",
    footerHref: "/sign-up" as Href,
    email: "alex@gmail.com",
  },
};

const socialOptions: {
  label: string;
  strategy: SocialStrategy;
  icon: React.ReactNode;
}[] = [
  {
    label: "Continue with Google",
    strategy: "oauth_google",
    icon: <AntDesign name="google" size={24} color="#EA4335" />,
  },
  {
    label: "Continue with Facebook",
    strategy: "oauth_facebook",
    icon: <FontAwesome name="facebook-official" size={24} color="#1877F2" />,
  },
  {
    label: "Continue with Apple",
    strategy: "oauth_apple",
    icon: <AntDesign name="apple" size={26} color="#0D1642" />,
  },
];

function normalizeEmailInput(value: string) {
  return value.trim().replace(/^[^a-zA-Z0-9]+/, "");
}

type FinalizableAuth = {
  finalize: (options: {
    navigate: (params: {
      session?: { currentTask?: unknown } | null;
      decorateUrl: (path: string) => string;
    }) => void;
  }) => Promise<{ error: unknown | null }>;
};

function isAlreadySignedInMessage(message: string | null | undefined) {
  return (message ?? "").toLowerCase().includes("already signed in");
}

function getErrorMessage(error: unknown, fallback: string) {
  if (isClerkAPIResponseError(error) && error.errors[0]?.longMessage) {
    return error.errors[0].longMessage;
  }

  if (isClerkAPIResponseError(error) && error.errors[0]?.message) {
    return error.errors[0].message;
  }

  if (error instanceof Error && error.message) {
    return error.message;
  }

  return fallback;
}

export function AuthScreen({ mode }: AuthScreenProps) {
  const { isLoaded: isAuthLoaded, isSignedIn } = useAuth();
  const clerk = useClerk();
  const { signIn, errors: signInErrors, fetchStatus: signInFetchStatus } =
    useSignIn();
  const { signUp, errors: signUpErrors, fetchStatus: signUpFetchStatus } =
    useSignUp();
  const { startSSOFlow } = useSSO();
  const sessionRecoveryAttempted = useRef(false);
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [verificationError, setVerificationError] = useState<string | null>(
    null
  );
  const [socialError, setSocialError] = useState<string | null>(null);
  const [socialStrategy, setSocialStrategy] = useState<SocialStrategy | null>(
    null
  );
  const [isVerificationVisible, setIsVerificationVisible] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const content = contentByMode[mode];
  const showPasswordField = mode === "sign-up";
  const isSubmitting =
    signInFetchStatus === "fetching" ||
    signUpFetchStatus === "fetching" ||
    socialStrategy !== null;
  const currentErrors = mode === "sign-up" ? signUpErrors : signInErrors;
  const currentFieldError =
    mode === "sign-up"
      ? signUpErrors.fields.emailAddress?.message ??
        signUpErrors.fields.password?.message
      : signInErrors.fields.identifier?.message;
  const globalErrorMessage =
    verificationError ??
    socialError ??
    currentFieldError ??
    currentErrors.global?.[0]?.message;
  const hasPendingSignIn =
    mode === "sign-in" && signIn?.status === "complete";
  const showContinueToApp =
    hasPendingSignIn || isAlreadySignedInMessage(globalErrorMessage);

  useEffect(() => {
    if (isAuthLoaded && isSignedIn) {
      router.replace("/");
    }
  }, [isAuthLoaded, isSignedIn]);

  async function activateExistingSession(): Promise<boolean> {
    const sessionId =
      clerk.session?.id ??
      clerk.client?.lastActiveSessionId ??
      clerk.client?.sessions?.[0]?.id;

    if (!sessionId) {
      return false;
    }

    await clerk.setActive({ session: sessionId });
    router.replace("/");
    return true;
  }

  async function continueToApp() {
    setSocialError(null);
    setVerificationError(null);

    if (redirectIfSignedIn()) {
      return;
    }

    if (mode === "sign-in" && signIn?.status === "complete") {
      try {
        await finalizeSession(signIn);
        return;
      } catch {
        // Fall through to activate any stored session.
      }
    }

    const activated = await activateExistingSession();

    if (!activated) {
      setSocialError(
        "We couldn't open your account. Sign out below and try again."
      );
    }
  }

  useEffect(() => {
    if (
      sessionRecoveryAttempted.current ||
      !isAuthLoaded ||
      isSignedIn ||
      !showContinueToApp
    ) {
      return;
    }

    sessionRecoveryAttempted.current = true;
    void continueToApp();
  }, [isAuthLoaded, isSignedIn, showContinueToApp]);

  function openVerification() {
    setVerificationCode("");
    setVerificationError(null);
    setIsVerificationVisible(true);
  }

  function closeVerification() {
    setVerificationCode("");
    setVerificationError(null);
    setIsVerificationVisible(false);
  }

  function handleCodeChange(nextValue: string) {
    const digitsOnly = nextValue.replace(/\D/g, "").slice(0, 6);
    setVerificationCode(digitsOnly);

    if (verificationError) {
      setVerificationError(null);
    }
  }

  async function handleResendCode() {
    setVerificationError(null);

    if (mode === "sign-up") {
      if (!signUp) {
        return;
      }

      const resendResult = await signUp.verifications.sendEmailCode();

      if (resendResult.error) {
        setVerificationError("We couldn't resend the code right now.");
      }

      return;
    }

    if (!signIn || !normalizeEmailInput(emailAddress)) {
      return;
    }

    const resendResult = await signIn.emailCode.sendCode({
      emailAddress: normalizeEmailInput(emailAddress),
    });

    if (resendResult.error) {
      setVerificationError("We couldn't resend the code right now.");
    }
  }

  async function finalizeSession(resource: FinalizableAuth) {
    const result = await resource.finalize({
      navigate: ({ session, decorateUrl }) => {
        if (session?.currentTask) {
          return;
        }

        const nextUrl = decorateUrl("/");

        if (nextUrl.startsWith("http")) {
          if (typeof window !== "undefined") {
            window.location.href = nextUrl;
          }
          return;
        }

        router.replace(nextUrl as Href);
      },
    });

    if (result.error) {
      throw result.error;
    }
  }

  function redirectIfSignedIn() {
    if (isAuthLoaded && isSignedIn) {
      router.replace("/");
      return true;
    }

    return false;
  }

  async function handleAlreadySignedInError(error: unknown) {
    if (!isAlreadySignedInMessage(getErrorMessage(error, ""))) {
      return false;
    }

    if (mode === "sign-in" && signIn?.status === "complete") {
      try {
        await finalizeSession(signIn);
        return true;
      } catch {
        // Fall through to activate stored session.
      }
    }

    return activateExistingSession();
  }

  async function handlePrimaryAction() {
    setSocialError(null);
    setVerificationError(null);

    if (redirectIfSignedIn()) {
      return;
    }

    if (showContinueToApp) {
      await continueToApp();
      return;
    }

    const normalizedEmail = normalizeEmailInput(emailAddress);

    if (!normalizedEmail) {
      return;
    }

    if (mode === "sign-up") {
      if (!password || !signUp) {
        return;
      }

      const signUpResult = await signUp.password({
        emailAddress: normalizedEmail,
        password,
      });

      if (signUpResult.error) {
        return;
      }

      const verificationResult = await signUp.verifications.sendEmailCode();

      if (verificationResult.error) {
        return;
      }

      openVerification();
      return;
    }

    if (!signIn) {
      return;
    }

    const signInResult = await signIn.emailCode.sendCode({
      emailAddress: normalizedEmail,
    });

    if (signInResult.error) {
      if (await handleAlreadySignedInError(signInResult.error)) {
        return;
      }

      return;
    }

    openVerification();
  }

  async function handleVerificationComplete() {
    if (verificationCode.length !== 6) {
      return;
    }

    try {
      if (mode === "sign-up") {
        if (!signUp) {
          return;
        }

        const verificationResult = await signUp.verifications.verifyEmailCode({
          code: verificationCode,
        });

        if (verificationResult.error) {
          return;
        }

        if (signUp.status === "complete") {
          closeVerification();
          await finalizeSession(signUp);
          return;
        }
      } else {
        if (!signIn) {
          return;
        }

        const verificationResult = await signIn.emailCode.verifyCode({
          code: verificationCode,
        });

        if (verificationResult.error) {
          return;
        }

        if (signIn.status === "complete") {
          closeVerification();
          await finalizeSession(signIn);
          return;
        }
      }

      setVerificationError("That code didn't work. Please try again.");
      setVerificationCode("");
    } catch (error) {
      if (redirectIfSignedIn() || (await handleAlreadySignedInError(error))) {
        return;
      }

      setVerificationError(
        getErrorMessage(error, "We couldn't verify that code yet.")
      );
      setVerificationCode("");
    }
  }

  async function handleSocialAuth(strategy: SocialStrategy) {
    if (strategy === "oauth_apple" && Platform.OS !== "ios") {
      setSocialError("Apple sign in is only available on iOS devices.");
      return;
    }

    setSocialError(null);
    setVerificationError(null);
    setSocialStrategy(strategy);

    try {
      const { createdSessionId, setActive } = await startSSOFlow({
        strategy,
        redirectUrl: "lingua://oauth-callback",
      });

      if (createdSessionId && setActive) {
        await setActive({ session: createdSessionId });
        router.replace("/");
        return;
      }

      setSocialError("We couldn't finish that sign in. Please try again.");
    } catch (error) {
      setSocialError(
        getErrorMessage(error, "We couldn't start that social sign in.")
      );
    } finally {
      setSocialStrategy(null);
    }
  }

  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            paddingHorizontal: 22,
            paddingTop: 8,
            paddingBottom: 36,
          }}
        >
          <View className="flex-1 bg-white">
            <TouchableOpacity
              accessibilityRole="button"
              activeOpacity={0.8}
              onPress={() => router.back()}
              className="h-12 w-12 items-start justify-center"
            >
              <Feather name="chevron-left" size={34} color="#0d1642" />
            </TouchableOpacity>

            <View className="pt-[34px]">
              <Text className="font-['Poppins-Bold'] text-[28px] tracking-[-0.8px] text-[#0d1642]">
                {content.title}
              </Text>
              <Text className="pt-3 font-['Poppins-Regular'] text-[14px] text-[#66708f]">
                {content.subtitle}
              </Text>
            </View>

            <View className="items-center pt-7">
              <View className="relative">
                <View className="absolute left-2 top-10 h-3 w-3 rounded-full bg-[#ffab24]" />
                <View className="absolute left-[34px] top-[124px] h-2 w-2 rounded-full bg-[#ffab24]" />
                <View className="absolute right-4 top-16 h-3 w-3 rounded-full bg-[#7eb1ff]" />
                <View className="absolute right-[26px] top-[118px] h-3 w-3 rounded-full bg-[#ffd84e]" />

                <Image
                  source={images.mascotAuth}
                  resizeMode="contain"
                  style={{ width: 228, height: 164 }}
                />
              </View>
            </View>

            <View className="gap-4 pt-2">
              <View className="rounded-[24px] border border-[#e7ebf3] px-5 py-4">
                <Text className="font-['Poppins-Medium'] text-[13px] text-[#8a92ae]">
                  Email
                </Text>
                <TextInput
                  value={emailAddress}
                  onChangeText={(value) => setEmailAddress(normalizeEmailInput(value))}
                  placeholder={content.email}
                  placeholderTextColor="#0d164266"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  textContentType="emailAddress"
                  autoComplete="email"
                  className="pt-2 font-['Poppins-Regular'] text-[18px] text-[#0d1642]"
                  style={{ padding: 0 }}
                />
              </View>

              {showPasswordField ? (
                <View className="rounded-[24px] border border-[#e7ebf3] px-5 py-4">
                  <Text className="font-['Poppins-Medium'] text-[13px] text-[#8a92ae]">
                    Password
                  </Text>
                  <View className="flex-row items-center justify-between pt-2">
                    <TextInput
                      value={password}
                      onChangeText={setPassword}
                      placeholder={contentByMode["sign-up"].password}
                      placeholderTextColor="#0d164266"
                      secureTextEntry={!isPasswordVisible}
                      autoCapitalize="none"
                      autoCorrect={false}
                      textContentType="newPassword"
                      autoComplete="password-new"
                      className="flex-1 font-['Poppins-Regular'] text-[18px] text-[#0d1642]"
                      style={{ padding: 0 }}
                    />
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => setIsPasswordVisible((value) => !value)}
                      className="pl-4"
                    >
                      <Feather
                        name={isPasswordVisible ? "eye-off" : "eye"}
                        size={24}
                        color="#8891ae"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              ) : null}

              {globalErrorMessage && !showContinueToApp ? (
                <Text className="px-1 font-['Poppins-Medium'] text-[13px] text-[#e04f5f]">
                  {globalErrorMessage}
                </Text>
              ) : null}

              {showContinueToApp ? (
                <Text className="px-1 font-['Poppins-Regular'] text-[14px] leading-6 text-[#66708f]">
                  Your account is ready. Tap below to continue into Lingua.
                </Text>
              ) : null}

              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => void handlePrimaryAction()}
                disabled={
                  isSubmitting ||
                  (!showContinueToApp &&
                    (!normalizeEmailInput(emailAddress) ||
                      (showPasswordField && !password.trim())))
                }
                className="mt-2 h-[76px] items-center justify-center rounded-[20px] bg-[#5c43ff]"
                style={
                  isSubmitting ||
                  (!showContinueToApp &&
                    (!normalizeEmailInput(emailAddress) ||
                      (showPasswordField && !password.trim())))
                    ? { opacity: 0.7 }
                    : undefined
                }
              >
                <Text className="font-['Poppins-SemiBold'] text-[18px] text-white">
                  {showContinueToApp ? "Continue to Lingua" : content.buttonLabel}
                </Text>
              </TouchableOpacity>

              {showContinueToApp ? (
                <TouchableOpacity
                  accessibilityRole="button"
                  activeOpacity={0.8}
                  onPress={() => void clerk.signOut()}
                  className="mt-3 items-center py-2"
                >
                  <Text className="font-['Poppins-Medium'] text-[15px] text-[#8a92ae]">
                    Sign out and try again
                  </Text>
                </TouchableOpacity>
              ) : null}
            </View>

            <View className="flex-row items-center gap-4 py-8">
              <View className="h-px flex-1 bg-[#eceef5]" />
              <Text className="font-['Poppins-Regular'] text-[14px] text-[#6f7692]">
                or continue with
              </Text>
              <View className="h-px flex-1 bg-[#eceef5]" />
            </View>

            <View className="gap-4">
              {socialOptions.map((option) => (
                <TouchableOpacity
                  key={option.label}
                  activeOpacity={0.9}
                  onPress={() => void handleSocialAuth(option.strategy)}
                  disabled={isSubmitting}
                  className="h-[74px] flex-row items-center rounded-[22px] border border-[#eceef5] bg-white px-6"
                  style={
                    isSubmitting && socialStrategy !== option.strategy
                      ? { opacity: 0.7 }
                      : undefined
                  }
                >
                  <View className="w-10 items-center">{option.icon}</View>
                  <Text className="pl-5 font-['Poppins-Regular'] text-[17px] text-[#0d1642]">
                    {option.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <View className="flex-1 justify-end pb-4 pt-10">
              <View className="flex-row items-center justify-center">
                <Text className="font-['Poppins-Regular'] text-[14px] text-[#6f7692]">
                  {content.footerLabel}{" "}
                </Text>
                <Link href={content.footerHref} asChild>
                  <TouchableOpacity activeOpacity={0.8}>
                    <Text className="font-['Poppins-SemiBold'] text-[14px] text-[#5c43ff]">
                      {content.footerLinkLabel}
                    </Text>
                  </TouchableOpacity>
                </Link>
              </View>
            </View>

            {mode === "sign-up" ? <View nativeID="clerk-captcha" /> : null}
          </View>
        </ScrollView>
      </SafeAreaView>

      <VerificationModal
        code={verificationCode}
        visible={isVerificationVisible}
        errorMessage={verificationError ?? currentErrors.fields.code?.message}
        isLoading={isSubmitting}
        recipientLabel={normalizeEmailInput(emailAddress) || content.email}
        resendDisabled={!normalizeEmailInput(emailAddress)}
        onCodeChange={handleCodeChange}
        onClose={closeVerification}
        onComplete={handleVerificationComplete}
        onResend={handleResendCode}
      />
    </>
  );
}
