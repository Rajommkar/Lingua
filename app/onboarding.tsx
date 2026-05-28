import { AntDesign } from "@expo/vector-icons";
import { type Href, router, Stack } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "@/constants/images";

const bubbles = [
  {
    text: "Hello!",
    className:
      "absolute left-7 top-0 -rotate-6 rounded-[24px] bg-[#edf5ff] px-7 py-5",
    textClassName: "font-['Poppins-SemiBold'] text-[17px] text-[#111111]",
  },
  {
    text: "\u00a1Hola!",
    className:
      "absolute right-3 top-[-12px] rotate-12 rounded-[24px] bg-[#f4f1ff] px-7 py-5",
    textClassName: "font-['Poppins-SemiBold'] text-[17px] text-[#5c43ff]",
  },
  {
    text: "\u4f60\u597d!",
    className:
      "absolute right-0 top-[94px] rotate-6 rounded-[24px] bg-[#fff5f0] px-7 py-5",
    textClassName: "font-['Poppins-SemiBold'] text-[17px] text-[#ff6f47]",
  },
];

export default function OnboardingScreen() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 40, paddingTop: 12, paddingBottom: 36 }}
        >
          <View className="flex-1 bg-white">
            <View className="items-center pt-3">
              <View className="flex-row items-center gap-3">
                <Image
                  source={images.mascotLogo}
                  resizeMode="contain"
                  style={{ width: 52, height: 50 }}
                />
                <Text className="font-['Poppins-Bold'] text-[34px] lowercase tracking-[-1px] text-[#0d1642]">
                  lingua
                </Text>
              </View>
            </View>

            <View className="pt-[48px]">
              <Text className="font-['Poppins-SemiBold'] text-[34px] leading-[45px] tracking-[-1.2px] text-[#0d1642]">
                Your AI language
              </Text>
              <Text className="font-['Poppins-SemiBold'] text-[34px] leading-[45px] tracking-[-1.2px] text-[#5c43ff]">
                teacher.
              </Text>
              <Text className="pt-5 font-['Poppins-Regular'] text-[15px] leading-[31px] tracking-[-0.2px] text-[#68708c]">
                Real conversations, personalized{"\n"}lessons, anytime, anywhere.
              </Text>
            </View>

            <View className="relative mt-10 min-h-[390px] items-center">
              {bubbles.map((bubble) => (
                <View key={bubble.text} className={bubble.className}>
                  <Text className={bubble.textClassName}>{bubble.text}</Text>
                </View>
              ))}

              <Image
                source={images.mascotWelcome}
                resizeMode="contain"
                style={{ marginTop: 118, width: 280, height: 280 }}
              />
            </View>

            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => router.push("/sign-up" as Href)}
              className="mt-8 h-[74px] flex-row items-center justify-center rounded-[24px] bg-[#5c43ff] px-8 shadow-soft"
            >
              <Text className="font-['Poppins-SemiBold'] text-[18px] text-white">
                Get Started
              </Text>
              <View className="absolute right-7">
                <AntDesign name="arrow-right" size={25} color="#ffffff" />
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
