import { Ionicons } from "@expo/vector-icons";
import { Stack, router, useLocalSearchParams } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { getLessonImageConfig } from "@/constants/images";
import { getLanguageByCode } from "@/data/languages";
import { getLessonById } from "@/data/lessons";
import { getUnitById } from "@/data/units";
import { useProgressStore } from "@/store/progress-store";

export default function LessonDetailScreen() {
  const { lessonId } = useLocalSearchParams<{ lessonId: string }>();
  const completeLesson = useProgressStore((state) => state.completeLesson);
  const completedLessons = useProgressStore((state) => state.completedLessons);
  const addXp = useProgressStore((state) => state.addXp);

  const lesson = lessonId ? getLessonById(lessonId) : undefined;

  if (!lesson) {
    return null;
  }

  const language = getLanguageByCode(lesson.languageCode);
  const imageConfig = getLessonImageConfig(lesson.id);
  const unit = getUnitById(lesson.unitId);
  const isCompleted = completedLessons.includes(lesson.id);

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 28 }}
        >
          <View className="px-5 pt-3">
            <View className="flex-row items-center justify-between">
              <TouchableOpacity
                activeOpacity={0.85}
                onPress={() => router.back()}
                className="h-12 w-12 items-center justify-center rounded-full bg-[#f6f7fb]"
              >
                <Ionicons name="chevron-back" size={24} color="#0d1642" />
              </TouchableOpacity>

              <View className="rounded-full bg-[#f6f7fb] px-4 py-2">
                <Text className="font-['Poppins-SemiBold'] text-[13px] text-[#5c43ff]">
                  {language?.name ?? "Lesson"}
                </Text>
              </View>
            </View>

            <View className="mt-5 overflow-hidden rounded-[32px] bg-[#f6f7fb]">
              <Image
                source={imageConfig.source}
                resizeMode="cover"
                style={{ width: "100%", height: 240 }}
              />
            </View>

            <Text className="mt-5 font-['Poppins-Medium'] text-[13px] uppercase tracking-[0.8px] text-[#8a92ae]">
              Unit {unit?.order ?? 1} â€¢ Lesson {lesson.order}
            </Text>
            <Text className="mt-2 font-['Poppins-Bold'] text-[30px] leading-[36px] text-[#0d1642]">
              {lesson.title}
            </Text>
            <Text className="mt-2 font-['Poppins-Regular'] text-[15px] leading-[24px] text-[#6f7897]">
              {lesson.description}
            </Text>

            <View className="mt-5 flex-row gap-3">
              <View className="flex-1 rounded-[24px] bg-[#fff4e8] px-4 py-4">
                <Text className="font-['Poppins-Medium'] text-[13px] text-[#ff8a00]">
                  Reward
                </Text>
                <Text className="mt-1 font-['Poppins-Bold'] text-[22px] text-[#0d1642]">
                  +{lesson.xpReward} XP
                </Text>
              </View>
              <View className="flex-1 rounded-[24px] bg-[#f0ecff] px-4 py-4">
                <Text className="font-['Poppins-Medium'] text-[13px] text-[#5c43ff]">
                  Time
                </Text>
                <Text className="mt-1 font-['Poppins-Bold'] text-[22px] text-[#0d1642]">
                  {lesson.estimatedMinutes} min
                </Text>
              </View>
            </View>

            <View className="mt-6 rounded-[28px] bg-[#f8f9fe] p-5">
              <Text className="font-['Poppins-Bold'] text-[20px] text-[#0d1642]">
                What you will practice
              </Text>
              <View className="mt-4 gap-3">
                {lesson.goals.map((goal) => (
                  <View key={goal.id} className="flex-row items-start gap-3">
                    <View className="mt-0.5 h-6 w-6 items-center justify-center rounded-full bg-[#dff5e7]">
                      <Ionicons name="checkmark" size={14} color="#21c16b" />
                    </View>
                    <Text className="flex-1 font-['Poppins-Regular'] text-[14px] leading-[22px] text-[#6f7897]">
                      {goal.description}
                    </Text>
                  </View>
                ))}
              </View>
            </View>

            <View className="mt-6 rounded-[28px] border border-[#eef0f5] p-5">
              <Text className="font-['Poppins-Bold'] text-[20px] text-[#0d1642]">
                Lesson snapshot
              </Text>
              <View className="mt-4 flex-row justify-between gap-3">
                <View className="flex-1 rounded-[20px] bg-[#f6f7fb] px-4 py-4">
                  <Text className="font-['Poppins-Medium'] text-[13px] text-[#8a92ae]">
                    Vocabulary
                  </Text>
                  <Text className="mt-1 font-['Poppins-Bold'] text-[22px] text-[#0d1642]">
                    {lesson.vocabulary.length}
                  </Text>
                </View>
                <View className="flex-1 rounded-[20px] bg-[#f6f7fb] px-4 py-4">
                  <Text className="font-['Poppins-Medium'] text-[13px] text-[#8a92ae]">
                    Activities
                  </Text>
                  <Text className="mt-1 font-['Poppins-Bold'] text-[22px] text-[#0d1642]">
                    {lesson.activities.length}
                  </Text>
                </View>
              </View>
            </View>

            <TouchableOpacity
              onPress={() => {
                if (!isCompleted) {
                  addXp(lesson.xpReward);
                }
                completeLesson(lesson.id);
              }}
              className={`mt-6 rounded-[24px] px-5 py-4 ${
                isCompleted ? "bg-[#21c16b]" : "bg-[#5c43ff]"
              }`}
            >
              <Text className="text-center font-['Poppins-SemiBold'] text-[16px] text-white">
                {isCompleted ? "Lesson completed" : "Mark lesson complete"}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

