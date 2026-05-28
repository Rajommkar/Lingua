import { AntDesign, Feather, FontAwesome } from "@expo/vector-icons";
import { type Href, Link, router } from "expo-router";
import { useState } from "react";
import {
  Image,
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
    verificationDescription:
      "We emailed your 6-digit verification code. Enter it below to finish creating your account.",
  },
  "sign-in": {
    title: "Sign in to continue",
    subtitle: "Pick up your next lesson in seconds ✨",
    buttonLabel: "Sign In",
    footerLabel: "Need an account?",
    footerLinkLabel: "Sign up",
    footerHref: "/sign-up" as Href,
    email: "alex@gmail.com",
    verificationDescription:
      "We emailed your 6-digit verification code. Enter it below to sign in and continue learning.",
  },
};

const socialOptions = [
  {
    label: "Continue with Google",
    icon: <AntDesign name="google" size={24} color="#EA4335" />,
  },
  {
    label: "Continue with Facebook",
    icon: <FontAwesome name="facebook-official" size={24} color="#1877F2" />,
  },
  {
    label: "Continue with Apple",
    icon: <AntDesign name="apple" size={26} color="#0D1642" />,
  },
];

export function AuthScreen({ mode }: AuthScreenProps) {
  const [isVerificationVisible, setIsVerificationVisible] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const content = contentByMode[mode];
  const showPasswordField = mode === "sign-up";

  function openVerification() {
    setIsVerificationVisible(true);
  }

  function closeVerification() {
    setIsVerificationVisible(false);
  }

  function completeVerification() {
    setIsVerificationVisible(false);
    router.replace("/");
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
                  defaultValue={content.email}
                  keyboardType="email-address"
                  autoCapitalize="none"
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
                      defaultValue={contentByMode["sign-up"].password}
                      secureTextEntry={!isPasswordVisible}
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

              <TouchableOpacity
                activeOpacity={0.9}
                onPress={openVerification}
                className="mt-2 h-[76px] items-center justify-center rounded-[20px] bg-[#5c43ff]"
              >
                <Text className="font-['Poppins-SemiBold'] text-[18px] text-white">
                  {content.buttonLabel}
                </Text>
              </TouchableOpacity>
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
                  className="h-[74px] flex-row items-center rounded-[22px] border border-[#eceef5] bg-white px-6"
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
          </View>
        </ScrollView>
      </SafeAreaView>

      <VerificationModal
        visible={isVerificationVisible}
        description={content.verificationDescription}
        onClose={closeVerification}
        onComplete={completeVerification}
      />
    </>
  );
}
