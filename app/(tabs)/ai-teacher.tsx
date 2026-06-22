import { Ionicons } from "@expo/vector-icons";
import { Stack, router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { getLessonImageConfig } from "@/constants/images";
import { getLessonsByLanguage } from "@/data/lessons";
import { useLanguageStore } from "@/store/language-store";
import { useProgressStore } from "@/store/progress-store";

export default function AiTeacherScreen() {
  const selectedLanguageCode = useLanguageStore((state) => state.selectedLanguageCode);
  const completedLessons = useProgressStore((state) => state.completedLessons);

  const languageCode = selectedLanguageCode ?? "es";
  const lessons = getLessonsByLanguage(languageCode);
  const currentLesson = lessons.find((lesson) => !completedLessons.includes(lesson.id)) || lessons[0];

  const imageConfig = getLessonImageConfig(currentLesson.id);

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }} edges={["top"]}>
        {/* Header */}
        <View className="flex-row items-center justify-between px-4 py-3 bg-white">
          <View className="flex-row items-center gap-4">
            <TouchableOpacity onPress={() => router.back()} activeOpacity={0.8}>
              <Ionicons name="chevron-back" size={28} color="#0d1642" />
            </TouchableOpacity>
            
            <View>
              <Text className="font-['Poppins-Bold'] text-[18px] text-[#0d1642] leading-[24px]">
                AI Teacher
              </Text>
              <View className="flex-row items-center gap-1.5 mt-0.5">
                <View className="h-2.5 w-2.5 rounded-full bg-[#21c16b]" />
                <Text className="font-['Poppins-Medium'] text-[13px] text-[#8a92ae]">
                  Online
                </Text>
              </View>
            </View>
          </View>

          <View className="flex-row items-center gap-2">
            <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full border border-[#eef0f5] bg-white">
              <Ionicons name="videocam-outline" size={20} color="#0d1642" />
            </TouchableOpacity>
            <View className="h-10 w-10 items-center justify-center rounded-full border border-[#eef0f5] bg-white">
              <Text className="font-['Poppins-SemiBold'] text-[14px] text-[#0d1642]">12</Text>
            </View>
            <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full border border-[#eef0f5] bg-white">
              <Ionicons name="notifications-outline" size={20} color="#0d1642" />
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex-1" style={{ backgroundColor: "#fafafc" }}>
          {/* Main Visual Area */}
          <View className="flex-1 overflow-hidden rounded-[32px] mx-4 mt-4 mb-4 shadow-sm relative" style={{ backgroundColor: "#e2e0dd" }}>
            {/* Background Room */}
            <Image 
              source={{ uri: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop" }}
              className="absolute inset-0 w-full h-full opacity-60"
              blurRadius={3}
            />

            {/* Mascot */}
            <View className="flex-1 items-center justify-center pt-8">
              <Image 
                source={imageConfig.source}
                style={{ width: "90%", height: "90%" }}
                resizeMode="contain"
              />
            </View>

            {/* User Video Preview */}
            <View className="absolute top-4 right-4 h-[120px] w-[90px] rounded-[16px] border-2 border-white overflow-hidden shadow-sm bg-[#eef0f5]">
              <Image 
                source={{ uri: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=300&auto=format&fit=crop" }}
                className="w-full h-full"
                resizeMode="cover"
              />
            </View>

            {/* Speech Bubble */}
            <View className="absolute bottom-8 left-0 right-0 items-center px-4">
              <View className="bg-white rounded-[24px] p-5 shadow-sm rounded-br-none relative w-[95%]">
                <View className="flex-row items-center justify-between">
                  <View>
                    <Text className="font-['Poppins-SemiBold'] text-[16px] text-[#0d1642]">
                      ¡Muy bien!
                    </Text>
                    <Text className="font-['Poppins-Medium'] text-[15px] text-[#6f7897] mt-1">
                      That was great! 👏
                    </Text>
                  </View>
                  <Ionicons name="volume-high" size={24} color="#5c43ff" />
                </View>
                {/* Speech Bubble Tail */}
                <View className="absolute -bottom-3 right-8 w-0 h-0 border-l-[12px] border-r-[12px] border-t-[14px] border-l-transparent border-r-transparent border-t-white" />
              </View>
            </View>
          </View>

          {/* Controls Row */}
          <View className="flex-row justify-center gap-5 mb-6 px-4">
            <View className="items-center w-[75px]">
              <TouchableOpacity className="h-[60px] w-[60px] items-center justify-center rounded-full bg-white shadow-sm">
                <Ionicons name="videocam" size={24} color="#0d1642" />
              </TouchableOpacity>
              <Text className="mt-2 font-['Poppins-Medium'] text-[12px] text-[#8a92ae]">Camera</Text>
            </View>

            <View className="items-center w-[75px]">
              <TouchableOpacity className="h-[60px] w-[60px] items-center justify-center rounded-full bg-white shadow-sm">
                <Ionicons name="mic" size={24} color="#0d1642" />
              </TouchableOpacity>
              <Text className="mt-2 font-['Poppins-Medium'] text-[12px] text-[#8a92ae]">Mic</Text>
            </View>

            <View className="items-center w-[75px]">
              <TouchableOpacity className="h-[60px] w-[60px] items-center justify-center rounded-full bg-white shadow-sm">
                <Ionicons name="language" size={24} color="#0d1642" />
              </TouchableOpacity>
              <Text className="mt-2 font-['Poppins-Medium'] text-[12px] text-[#8a92ae]">Subtitles</Text>
            </View>

            <View className="items-center w-[75px]">
              <TouchableOpacity onPress={() => router.back()} className="h-[60px] w-[60px] items-center justify-center rounded-full bg-[#ff4b4b] shadow-sm">
                <Ionicons name="call" size={24} color="white" style={{ transform: [{ rotate: '135deg' }] }} />
              </TouchableOpacity>
              <Text className="mt-2 font-['Poppins-Medium'] text-[12px] text-[#8a92ae]">End Call</Text>
            </View>
          </View>

          {/* Stats Card */}
          <View className="mx-4 mb-2 rounded-[24px] bg-white py-4 px-2 shadow-sm flex-row justify-between">
            <View className="flex-1 items-center border-r border-[#eef0f5]">
              <Text className="font-['Poppins-SemiBold'] text-[12px] text-[#0d1642]">Speaking</Text>
              <Text className="mt-1 font-['Poppins-SemiBold'] text-[13px] text-[#21c16b]">Excellent</Text>
            </View>
            <View className="flex-1 items-center border-r border-[#eef0f5]">
              <Text className="font-['Poppins-SemiBold'] text-[12px] text-[#0d1642]">Pronunciation</Text>
              <Text className="mt-1 font-['Poppins-SemiBold'] text-[13px] text-[#3b82f6]">Great</Text>
            </View>
            <View className="flex-1 items-center">
              <Text className="font-['Poppins-SemiBold'] text-[12px] text-[#0d1642]">Grammar</Text>
              <Text className="mt-1 font-['Poppins-SemiBold'] text-[13px] text-[#5c43ff]">Good</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
