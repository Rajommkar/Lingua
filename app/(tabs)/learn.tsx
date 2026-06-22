import { Ionicons } from "@expo/vector-icons";
import { Stack, router } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { getLessonImageConfig, images } from "@/constants/images";
import { getLanguageByCode } from "@/data/languages";
import { getLessonsByLanguage, getLessonsByUnit } from "@/data/lessons";
import { getUnitById, getUnitsByLanguage } from "@/data/units";
import { useLanguageStore } from "@/store/language-store";
import { useProgressStore } from "@/store/progress-store";

type DisplayLesson = {
  id: string;
  title: string;
  order: number;
  subtitle: string;
  isPlaceholder?: boolean;
};

type LessonRowStatus = "completed" | "in-progress" | "locked";

function getLessonRowStatus(
  lessonId: string,
  completedLessons: string[],
  activeLessonId: string | undefined,
): LessonRowStatus {
  if (completedLessons.includes(lessonId)) {
    return "completed";
  }

  if (lessonId === activeLessonId) {
    return "in-progress";
  }

  return "locked";
}

export default function LearnScreen() {
  const selectedLanguageCode = useLanguageStore(
    (state) => state.selectedLanguageCode,
  );
  const completedLessons = useProgressStore((state) => state.completedLessons);

  const languageCode = selectedLanguageCode ?? "es";
  const language = getLanguageByCode(languageCode);
  const lessons = getLessonsByLanguage(languageCode);

  const currentLesson = lessons.find(
    (lesson) => !completedLessons.includes(lesson.id),
  );
  const currentUnit = currentLesson
    ? getUnitById(currentLesson.unitId)
    : getUnitsByLanguage(languageCode)[0];
  const unitLessons = currentUnit
    ? getLessonsByUnit(currentUnit.id)
    : lessons.slice(0, 3);

  const placeholderLessons: DisplayLesson[] = [
    {
      id: `${currentUnit?.id}-placeholder-4`,
      title: "Travel & Directions",
      order: 4,
      subtitle: "0 / 6 lessons",
      isPlaceholder: true,
    },
    {
      id: `${currentUnit?.id}-placeholder-5`,
      title: "Shopping",
      order: 5,
      subtitle: "0 / 6 lessons",
      isPlaceholder: true,
    },
    {
      id: `${currentUnit?.id}-placeholder-6`,
      title: "Family & Friends",
      order: 6,
      subtitle: "0 / 6 lessons",
      isPlaceholder: true,
    },
  ];

  const displayedLessons = [
    ...unitLessons,
    ...placeholderLessons.slice(Math.max(0, 6 - unitLessons.length)),
  ].slice(0, 6) as DisplayLesson[];

  const activeLessonId = currentLesson?.id;
  const lessonPosition = currentLesson
    ? unitLessons.findIndex((lesson) => lesson.id === currentLesson.id) + 1
    : 1;

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 28 }}
        >
          <View className="bg-[#ffffff] pt-4">
            <View className="mx-4 flex-row items-center justify-between">
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => router.back()}
                className="h-11 w-11 items-center justify-center rounded-full bg-[#f6f7fb]"
              >
                <Ionicons name="chevron-back" size={20} color="#0d1642" />
              </TouchableOpacity>

              <View className="rounded-full bg-[#f6f7fb] px-4 py-2">
                <Text className="font-['Poppins-SemiBold'] text-[13px] text-[#5c43ff]">
                  {language?.name ?? "Language"}
                </Text>
              </View>
            </View>

            <View className="mx-4 mt-2 rounded-[32px] overflow-hidden bg-[#eef1ff]">
              <Image
                source={images.mascotWelcome}
                resizeMode="cover"
                style={{ width: "100%", height: 300 }}
              />
            </View>

            <View className="mx-4 -mt-16 rounded-[32px] bg-white px-5 py-5 shadow-card">
              <Text className="font-['Poppins-Bold'] text-[22px] leading-[28px] text-[#0d1642]">
                {currentLesson?.title ?? "Lesson"}
              </Text>
              <Text className="mt-2 font-['Poppins-Regular'] text-[13px] leading-[20px] text-[#8a92ae]">
                Unit {currentUnit?.order ?? 1} • {lessonPosition}/6 lessons
              </Text>
              <View className="mt-5 px-2">
                <View className="relative rounded-[22px] bg-transparent p-1">
                  <View className="flex-row items-center bg-[#f3f4fb] rounded-[22px] p-1">
                    <TouchableOpacity
                      activeOpacity={0.85}
                      className="flex-1 items-center justify-center py-3 px-4"
                    >
                      <Text className="font-['Poppins-SemiBold'] text-[14px] text-[#6b46ff]">
                        Lessons
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      activeOpacity={0.85}
                      className="flex-1 items-center justify-center py-3 px-4"
                    >
                      <Text className="font-['Poppins-Medium'] text-[14px] text-[#8a92ae]">
                        Practice
                      </Text>
                    </TouchableOpacity>
                  </View>
                  {/* active underline */}
                  <View className="absolute left-6 bottom-1 w-36 h-1 bg-[#6b46ff] rounded-full shadow-sm" />
                </View>
              </View>
            </View>

            <View className="mt-5 space-y-3 px-4 pb-8">
              {displayedLessons.map((lesson) => {
                const isPlaceholder = lesson.isPlaceholder;
                const status = isPlaceholder
                  ? "locked"
                  : getLessonRowStatus(
                      lesson.id,
                      completedLessons,
                      activeLessonId,
                    );
                const isActive = status === "in-progress";
                const isCompleted = status === "completed";
                const subtitle = isPlaceholder
                  ? lesson.subtitle
                  : isCompleted
                  ? "Completed"
                  : isActive
                  ? "In progress"
                  : "0 / 6 lessons";
                const lessonImage = isPlaceholder
                  ? images.mascotAuth
                  : getLessonImageConfig(lesson.id).source;

                return (
                  <TouchableOpacity
                    key={lesson.id}
                    activeOpacity={isPlaceholder ? 1 : 0.88}
                    onPress={() => {
                      if (!isPlaceholder) {
                        router.push({
                          pathname: "/lesson/[lessonId]",
                          params: { lessonId: lesson.id },
                        });
                      }
                    }}
                    className={`rounded-[20px] px-4 py-4 ${
                      isActive
                        ? "border-2 border-[#6b46ff] bg-white shadow-sm"
                        : "border border-[#eef0f5] bg-white"
                    }`}
                  >
                    <View className="flex-row items-center justify-between">
                      <View className="flex-1 pr-3">
                        <Text className={`text-[11px] tracking-[1px] uppercase ${isActive ? 'text-[#6b46ff]' : 'text-[#8a92ae]'} font-['Poppins-Medium']`}>
                          Lesson {lesson.order}
                        </Text>
                        <Text className="mt-2 font-['Poppins-SemiBold'] text-[16px] leading-[22px] text-[#0d1642]">
                          {lesson.title}
                        </Text>
                        <Text
                          className={`mt-1 text-[13px] leading-[18px] ${
                            isActive
                              ? "text-[#5c43ff] font-['Poppins-SemiBold']"
                              : "text-[#8a92ae] font-['Poppins-Regular']"
                          }`}
                        >
                          {subtitle}
                        </Text>
                      </View>

                      <View className="items-center justify-center">
                        {isCompleted ? (
                          <View className="h-9 w-9 items-center justify-center rounded-full bg-[#e8f9ef]">
                            <Ionicons name="checkmark" size={18} color="#21c16b" />
                          </View>
                        ) : isActive ? (
                          <View className="h-11 w-11 items-center justify-center rounded-full bg-white">
                            <Image
                              source={lessonImage}
                              resizeMode="contain"
                              style={{ width: 40, height: 40 }}
                            />
                          </View>
                        ) : (
                          <View className="h-9 w-9 items-center justify-center rounded-full bg-[#f5f6fb]">
                            <Ionicons name="lock-closed" size={18} color="#b4bccf" />
                          </View>
                        )}
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
