import { Ionicons } from "@expo/vector-icons";
import { useUser } from "@clerk/expo";
import { Href, router } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Haptics from "expo-haptics";

import { images } from "@/constants/images";
import { getLessonsByLanguage } from "@/data/lessons";
import { getUnitsByLanguage } from "@/data/units";
import { useLanguageStore } from "@/store/language-store";
import { useProgressStore } from "@/store/progress-store";

function getLanguageConfig(code: string) {
  switch (code) {
    case "es":
      return { greeting: "Hola", flag: "🇪🇸", label: "Spanish" };
    case "fr":
      return { greeting: "Bonjour", flag: "🇫🇷", label: "French" };
    case "de":
      return { greeting: "Hallo", flag: "🇩🇪", label: "German" };
    case "ja":
      return { greeting: "こんにちは", flag: "🇯🇵", label: "Japanese" };
    default:
      return { greeting: "Hello", flag: "👋", label: "English" };
  }
}

export default function HomeScreen() {
  const { user } = useUser();
  const selectedLanguageCode = useLanguageStore(
    (state) => state.selectedLanguageCode,
  );
  const { dailyGoal, streak, completedLessons, completedTodayPlanItems, toggleTodayPlanItem } =
    useProgressStore();
  const dailyXp = useProgressStore((state) => state.dailyXp);

  const langCode = selectedLanguageCode ?? "es";
  const langConfig = getLanguageConfig(langCode);
  const languageLessons = getLessonsByLanguage(langCode);
  const currentLesson =
    languageLessons.find((lesson) => !completedLessons.includes(lesson.id)) ??
    languageLessons[0] ??
    {
      id: "default-lesson",
      title: "Starter lesson",
      description: "Practice your first phrases",
      xpReward: 10,
    };
  const currentUnit = getUnitsByLanguage(langCode)[0] ?? { order: 1, title: "Greetings" };
  const displayXp = dailyXp;
  const firstName = user?.firstName ?? "Learner";

  const handleTogglePlan = (itemId: string) => {
    void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    toggleTodayPlanItem(itemId);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }} edges={["top", "left", "right"]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 24 }}
      >
        <View className="flex-row items-center justify-between px-6 pt-4">
          <View className="flex-row items-center gap-3">
            <View className="h-[48px] w-[48px] items-center justify-center rounded-full bg-[#f0f3f6]">
              <Text className="text-[26px] leading-[32px]">{langConfig.flag}</Text>
            </View>
            <Text className="font-['Poppins-SemiBold'] text-[20px] tracking-[-0.4px] text-[#0d1642]">
              {langConfig.greeting}, {firstName}! 👋
            </Text>
          </View>

          <View className="flex-row items-center gap-4">
            <View className="flex-row items-center gap-1.5">
              <Image
                source={images.streakFire}
                style={{ width: 24, height: 26 }}
                resizeMode="contain"
              />
              <Text className="mt-0.5 font-['Poppins-Bold'] text-[17px] text-[#0d1642]">
                {streak}
              </Text>
            </View>

            <TouchableOpacity activeOpacity={0.6} className="h-10 w-10 items-center justify-center">
              <Ionicons name="notifications-outline" size={24} color="#0d1642" />
            </TouchableOpacity>
          </View>
        </View>

        <View
          className="mx-6 mt-6 flex-row items-center justify-between rounded-[24px] border border-[#ffe9d2] bg-[#fff9f6] p-5"
          style={{
            shadowColor: "#ff8a00",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.02,
            shadowRadius: 12,
            elevation: 1,
          }}
        >
          <View className="flex-1 pr-4">
            <Text className="font-['Poppins-Medium'] text-[14px] text-[#68708c]">
              Daily goal
            </Text>
            <View className="mt-1 flex-row items-baseline">
              <Text className="font-['Poppins-Bold'] text-[28px] leading-[34px] text-[#0d1642]">
                {displayXp}
              </Text>
              <Text className="ml-1 font-['Poppins-Medium'] text-[15px] text-[#8a92ae]">
                / {dailyGoal} XP
              </Text>
            </View>

            <View className="mt-3.5 h-[9px] w-full overflow-hidden rounded-full bg-[#fcead8]">
              <View
                className="h-full rounded-full bg-[#ff8a00]"
                style={{ width: `${Math.min((displayXp / dailyGoal) * 100, 100)}%` }}
              />
            </View>
          </View>

          <Image source={images.treasure} style={{ width: 84, height: 80 }} resizeMode="contain" />
        </View>

        <View className="relative mx-6 mt-6 min-h-[170px] overflow-hidden rounded-[24px] bg-[#5c43ff]">
          <Image
            source={images.palace}
            style={{ position: "absolute", bottom: 0, right: 0, width: 140, height: 130 }}
            resizeMode="contain"
          />

          <View className="flex-1 justify-between p-6 pr-[140px]">
            <View>
              <Text className="font-['Poppins-Medium'] text-[13px] text-white/75">
                Continue learning
              </Text>
              <Text className="mt-0.5 font-['Poppins-Bold'] text-[28px] leading-[34px] text-white">
                {langConfig.label}
              </Text>
              <Text className="mt-1 font-['Poppins-Medium'] text-[14px] text-white/75">
                A1 • Unit {currentUnit.order}
              </Text>
            </View>

            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() =>
                router.push({ pathname: "/lesson/[lessonId]", params: { lessonId: currentLesson.id } })
              }
              className="mt-5 self-start rounded-full bg-white px-7 py-[10px] shadow-sm"
            >
              <Text className="text-center font-['Poppins-SemiBold'] text-[15px] text-[#5c43ff]">
                Continue
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="mt-8 flex-row items-center justify-between px-6">
          <Text className="font-['Poppins-SemiBold'] text-[20px] tracking-[-0.4px] text-[#0d1642]">
            Today&apos;s plan
          </Text>
          <TouchableOpacity activeOpacity={0.7}>
            <Text className="font-['Poppins-SemiBold'] text-[15px] text-[#5c43ff]">
              View all
            </Text>
          </TouchableOpacity>
        </View>

        <View className="mt-4 gap-3.5 px-6">
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() =>
              router.push({ pathname: "/lesson/[lessonId]", params: { lessonId: currentLesson.id } })
            }
            className="flex-row items-center justify-between rounded-[20px] bg-[#f6f7fb] p-[16px]"
          >
            <View className="flex-1 flex-row items-center pr-4">
              <View className="h-[48px] w-[48px] items-center justify-center rounded-[14px] bg-[#5c43ff]">
                <Ionicons name="book" size={22} color="#ffffff" />
              </View>
              <View className="ml-3.5 flex-1">
                <Text className="font-['Poppins-SemiBold'] text-[16px] leading-[22px] text-[#0d1642]">
                  Lesson
                </Text>
                <Text className="mt-0.5 font-['Poppins-Regular'] text-[14px] leading-[18px] text-[#8a92ae]">
                  {currentLesson.title}
                </Text>
              </View>
            </View>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => handleTogglePlan("lesson")}
              className="h-8 w-8 items-center justify-center"
            >
              {completedTodayPlanItems.includes("lesson") ? (
                <Ionicons name="checkmark-circle" size={28} color="#5c43ff" />
              ) : (
                <Ionicons name="ellipse-outline" size={28} color="#c5cad6" />
              )}
            </TouchableOpacity>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.85}
            onPress={handleVideoCallPress}
            className="flex-row items-center justify-between rounded-[20px] bg-[#f6f7fb] p-[16px]"
          >
            <View className="flex-1 flex-row items-center pr-4">
              <View className="h-[48px] w-[48px] items-center justify-center rounded-[14px] bg-[#5c43ff]">
                <Ionicons name="headset" size={22} color="#ffffff" />
              </View>
              <View className="ml-3.5 flex-1">
                <Text className="font-['Poppins-SemiBold'] text-[16px] leading-[22px] text-[#0d1642]">
                  AI Conversation
                </Text>
                <Text className="mt-0.5 font-['Poppins-Regular'] text-[14px] leading-[18px] text-[#8a92ae]">
                  Talk about your day
                </Text>
              </View>
            </View>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => handleTogglePlan("ai-conversation")}
              className="h-8 w-8 items-center justify-center"
            >
              {completedTodayPlanItems.includes("ai-conversation") ? (
                <Ionicons name="checkmark-circle" size={28} color="#5c43ff" />
              ) : (
                <Ionicons name="ellipse-outline" size={28} color="#c5cad6" />
              )}
            </TouchableOpacity>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => router.push("/(tabs)/chat" as Href)}
            className="flex-row items-center justify-between rounded-[20px] bg-[#f6f7fb] p-[16px]"
          >
            <View className="flex-1 flex-row items-center pr-4">
              <View className="h-[48px] w-[48px] items-center justify-center rounded-[14px] bg-[#ff6f47]">
                <Ionicons name="chatbubble-ellipses" size={22} color="#ffffff" />
              </View>
              <View className="ml-3.5 flex-1">
                <Text className="font-['Poppins-SemiBold'] text-[16px] leading-[22px] text-[#0d1642]">
                  New words
                </Text>
                <Text className="mt-0.5 font-['Poppins-Regular'] text-[14px] leading-[18px] text-[#8a92ae]">
                  10 words
                </Text>
              </View>
            </View>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => handleTogglePlan("new-words")}
              className="h-8 w-8 items-center justify-center"
            >
              {completedTodayPlanItems.includes("new-words") ? (
                <Ionicons name="checkmark-circle" size={28} color="#5c43ff" />
              ) : (
                <Ionicons name="ellipse-outline" size={28} color="#c5cad6" />
              )}
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function handleVideoCallPress() {
  void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  router.push("/(tabs)/ai-teacher" as Href);
}
