import { Ionicons } from "@expo/vector-icons";
import { useUser } from "@clerk/expo";
import { Href, router } from "expo-router";
import { useState } from "react";
import {
  Image,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Haptics from "expo-haptics";

import { images } from "@/constants/images";
import { getLessonsByLanguage } from "@/data/lessons";
import { getUnitsByLanguage } from "@/data/units";
import { useLanguageStore } from "@/store/language-store";
import { useProgressStore } from "@/store/progress-store";

// Helper for dynamic language configurations
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
  
  // Zustand progress store values
  const {
    xp,
    dailyGoal,
    streak,
    completedLessons,
    completedTodayPlanItems,
    addXp,
    completeLesson,
    toggleTodayPlanItem,
  } = useProgressStore();

  const [showXPModal, setShowXPModal] = useState(false);
  const [earnedXP, setEarnedXP] = useState(0);
  const [modalTitle, setModalTitle] = useState("");

  const langCode = selectedLanguageCode ?? "es";
  const langConfig = getLanguageConfig(langCode);

  // Dynamic lesson fetching
  const languageLessons = getLessonsByLanguage(langCode);
  const currentLesson =
    languageLessons.find((l) => !completedLessons.includes(l.id)) ??
    languageLessons[0] ??
    { id: "default-lesson", title: "At the café", description: "Practice café vocabulary", xpReward: 10 };

  const units = getUnitsByLanguage(langCode);
  const currentUnit = units[0] ?? { order: 1, title: "Greetings" };

  const handleTogglePlan = (itemId: string) => {
    void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    toggleTodayPlanItem(itemId);
  };

  const handleCompleteLessonSimulation = () => {
    const isCompleted = completedTodayPlanItems.includes("lesson");
    void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    
    const reward = currentLesson.xpReward ?? 10;
    addXp(reward);
    completeLesson(currentLesson.id);

    if (!isCompleted) {
      toggleTodayPlanItem("lesson");
    }

    setEarnedXP(reward);
    setModalTitle(currentLesson.title);
    setShowXPModal(true);
  };

  const handleAIChatSimulation = () => {
    const isCompleted = completedTodayPlanItems.includes("ai-conversation");
    void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    
    addXp(15);
    if (!isCompleted) {
      toggleTodayPlanItem("ai-conversation");
    }

    setEarnedXP(15);
    setModalTitle("AI Conversation");
    setShowXPModal(true);
  };

  const handleNewWordsSimulation = () => {
    const isCompleted = completedTodayPlanItems.includes("new-words");
    void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    
    addXp(10);
    if (!isCompleted) {
      toggleTodayPlanItem("new-words");
    }

    setEarnedXP(10);
    setModalTitle("Vocabulary Review");
    setShowXPModal(true);
  };

  const handleVideoCallPress = () => {
    void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    router.push("/(tabs)/ai-teacher" as Href);
  };

  const firstName = user?.firstName ?? "Learner";

  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }} edges={["top", "left", "right"]}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 24 }}
        >
          {/* Header Row */}
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
              {/* Streak */}
              <View className="flex-row items-center gap-1.5">
                <Image
                  source={images.streakFire}
                  style={{ width: 24, height: 26 }}
                  resizeMode="contain"
                />
                <Text className="font-['Poppins-Bold'] text-[17px] text-[#0d1642] mt-0.5">
                  {streak}
                </Text>
              </View>

              {/* Notification Bell (Outline & Borderless) */}
              <TouchableOpacity
                activeOpacity={0.6}
                className="h-10 w-10 items-center justify-center"
              >
                <Ionicons name="notifications-outline" size={24} color="#0d1642" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Daily Goal Card */}
          <View
            className="mx-6 mt-6 flex-row items-center justify-between rounded-[24px] bg-[#fff9f6] p-5 border border-[#ffe9d2]"
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
              <View className="flex-row items-baseline mt-1">
                <Text className="font-['Poppins-Bold'] text-[28px] text-[#0d1642] leading-[34px]">
                  {xp}
                </Text>
                <Text className="font-['Poppins-Medium'] text-[15px] text-[#8a92ae] ml-1">
                  / {dailyGoal} XP
                </Text>
              </View>

              {/* Progress Bar */}
              <View className="h-[9px] w-full rounded-full bg-[#fcead8] mt-3.5 overflow-hidden">
                <View
                  className="h-full rounded-full bg-[#ff8a00]"
                  style={{ width: `${Math.min((xp / dailyGoal) * 100, 100)}%` }}
                />
              </View>
            </View>

            <Image
              source={images.treasure}
              style={{ width: 84, height: 80 }}
              resizeMode="contain"
            />
          </View>

          {/* Continue Learning Card */}
          <View className="mx-6 mt-6 overflow-hidden rounded-[24px] bg-[#5c43ff] min-h-[170px] relative">
            <Image
              source={images.palace}
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: 140,
                height: 130,
              }}
              resizeMode="contain"
            />

            <View className="p-6 justify-between flex-1 pr-[140px]">
              <View>
                <Text className="font-['Poppins-Medium'] text-[13px] text-white/75">
                  Continue learning
                </Text>
                <Text className="font-['Poppins-Bold'] text-[28px] text-white mt-0.5 leading-[34px]">
                  {langConfig.label}
                </Text>
                <Text className="font-['Poppins-Medium'] text-[14px] text-white/75 mt-1">
                  A1 • Unit {currentUnit.order ?? 1}
                </Text>
              </View>

              <TouchableOpacity
                activeOpacity={0.9}
                onPress={handleCompleteLessonSimulation}
                className="mt-5 self-start rounded-full bg-white px-7 py-[10px] shadow-sm"
              >
                <Text className="font-['Poppins-SemiBold'] text-[15px] text-[#5c43ff] text-center">
                  Continue
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Today's Plan Header */}
          <View className="flex-row items-center justify-between px-6 mt-8">
            <Text className="font-['Poppins-SemiBold'] text-[20px] tracking-[-0.4px] text-[#0d1642]">
              Today&apos;s plan
            </Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text className="font-['Poppins-SemiBold'] text-[15px] text-[#5c43ff]">
                View all
              </Text>
            </TouchableOpacity>
          </View>

          {/* Plan Checklist Items (Clean, Borderless, Exactly Like Mockup) */}
          <View className="px-6 mt-4 gap-3.5">
            {/* Checklist Item 1: Lesson */}
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={handleCompleteLessonSimulation}
              className="flex-row items-center justify-between rounded-[20px] bg-[#f6f7fb] p-[16px]"
            >
              <View className="flex-row items-center flex-1 pr-4">
                <View className="h-[48px] w-[48px] items-center justify-center rounded-[14px] bg-[#5c43ff]">
                  <Ionicons name="book" size={22} color="#ffffff" />
                </View>
                <View className="ml-3.5 flex-1">
                  <Text className="font-['Poppins-SemiBold'] text-[16px] text-[#0d1642] leading-[22px]">
                    Lesson
                  </Text>
                  <Text className="font-['Poppins-Regular'] text-[14px] text-[#8a92ae] mt-0.5 leading-[18px]">
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

            {/* Checklist Item 2: AI Conversation */}
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={handleAIChatSimulation}
              className="flex-row items-center justify-between rounded-[20px] bg-[#f6f7fb] p-[16px]"
            >
              <View className="flex-row items-center flex-1 pr-4">
                <View className="h-[48px] w-[48px] items-center justify-center rounded-[14px] bg-[#5c43ff]">
                  <Ionicons name="headset" size={22} color="#ffffff" />
                </View>
                <View className="ml-3.5 flex-1">
                  <Text className="font-['Poppins-SemiBold'] text-[16px] text-[#0d1642] leading-[22px]">
                    AI Conversation
                  </Text>
                  <Text className="font-['Poppins-Regular'] text-[14px] text-[#8a92ae] mt-0.5 leading-[18px]">
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

            {/* Checklist Item 3: New Words */}
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={handleNewWordsSimulation}
              className="flex-row items-center justify-between rounded-[20px] bg-[#f6f7fb] p-[16px]"
            >
              <View className="flex-row items-center flex-1 pr-4">
                <View className="h-[48px] w-[48px] items-center justify-center rounded-[14px] bg-[#ff6f47]">
                  <Ionicons name="chatbubble-ellipses" size={22} color="#ffffff" />
                </View>
                <View className="ml-3.5 flex-1">
                  <Text className="font-['Poppins-SemiBold'] text-[16px] text-[#0d1642] leading-[22px]">
                    New words
                  </Text>
                  <Text className="font-['Poppins-Regular'] text-[14px] text-[#8a92ae] mt-0.5 leading-[18px]">
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

          {/* AI Video Call (Next Up) Card */}
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={handleVideoCallPress}
            className="mx-6 mt-6 flex-row items-center justify-between rounded-[24px] bg-[#f2faf2] p-[18px] border border-[#d2ecd2]"
            style={{
              shadowColor: "#4cb050",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.01,
              shadowRadius: 12,
            }}
          >
            <View className="flex-1 pr-3">
              <Text className="font-['Poppins-Bold'] text-[12px] text-[#4cb050] tracking-[0.5px] uppercase">
                Next up
              </Text>
              <Text className="font-['Poppins-SemiBold'] text-[19px] text-[#0d1642] mt-0.5 leading-[24px]">
                AI Video Call
              </Text>
              <Text className="font-['Poppins-Regular'] text-[14px] text-[#8a92ae] mt-0.5 leading-[18px]">
                Practice speaking
              </Text>
            </View>

            {/* Portrait with floating button */}
            <View className="relative">
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
                }}
                style={{ width: 74, height: 74 }}
                className="rounded-full border-[3px] border-white bg-[#eceef3]"
              />
              <View className="absolute bottom-[-2px] right-[-2px] h-[28px] w-[28px] items-center justify-center rounded-full bg-[#4cb050] border-2 border-white">
                <Ionicons name="videocam" size={13} color="#ffffff" />
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>

      {/* Premium XP Reward Celebration Modal */}
      <Modal
        visible={showXPModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowXPModal(false)}
      >
        <View className="flex-1 items-center justify-center bg-black/60 px-6">
          <View className="w-full max-w-[340px] items-center rounded-[32px] bg-white p-7 shadow-2xl">
            {/* Mascot / Icon celebration */}
            <View className="h-28 w-28 items-center justify-center rounded-full bg-[#fff9f3] border-4 border-[#ffe9d2] mb-4">
              <Image
                source={images.mascotWelcome}
                className="h-20 w-20"
                resizeMode="contain"
              />
            </View>

            <Text className="font-['Poppins-Bold'] text-[22px] text-[#0d1642] text-center tracking-[-0.5px]">
              Awesome Job! 🎉
            </Text>
            
            <Text className="font-['Poppins-Medium'] text-[15px] text-[#8a92ae] text-center mt-1 px-4 leading-[22px]">
              You completed your &quot;{modalTitle}&quot; activity!
            </Text>

            {/* XP Award display */}
            <View className="mt-5 flex-row items-center gap-2 rounded-2xl bg-[#fff5f0] px-5 py-3 border border-[#ffdec9]">
              <Image
                source={images.streakFire}
                className="h-7 w-7"
                resizeMode="contain"
              />
              <Text className="font-['Poppins-Bold'] text-[20px] text-[#ff8a00] mt-0.5">
                +{earnedXP} XP
              </Text>
            </View>

            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => setShowXPModal(false)}
              className="mt-7 w-full rounded-[20px] bg-[#5c43ff] py-4 shadow-soft"
            >
              <Text className="font-['Poppins-SemiBold'] text-[16px] text-white text-center">
                Got it!
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}
