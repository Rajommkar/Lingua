import { Ionicons } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { getLessonImageConfig } from "@/constants/images";
import type { Lesson } from "@/types/learning";

export type LessonCardStatus = "completed" | "in-progress" | "upcoming";

type LessonCardProps = {
  lesson: Lesson;
  lessonNumber: number;
  status: LessonCardStatus;
  onPress: () => void;
};

const statusConfig: Record<
  LessonCardStatus,
  {
    badgeLabel: string;
    badgeClasses: string;
    containerClasses: string;
    iconName: keyof typeof Ionicons.glyphMap;
    iconColor: string;
  }
> = {
  completed: {
    badgeLabel: "Completed",
    badgeClasses: "bg-[#e8f9ef] text-[#1f9d57]",
    containerClasses: "border-[#d8f2e1] bg-[#f7fdf9]",
    iconName: "checkmark-circle",
    iconColor: "#21c16b",
  },
  "in-progress": {
    badgeLabel: "In progress",
    badgeClasses: "bg-[#f0ecff] text-[#5c43ff]",
    containerClasses: "border-[#dcd4ff] bg-white",
    iconName: "play-circle",
    iconColor: "#5c43ff",
  },
  upcoming: {
    badgeLabel: "Start now",
    badgeClasses: "bg-[#fff4e8] text-[#ff8a00]",
    containerClasses: "border-[#eef0f5] bg-white",
    iconName: "ellipse-outline",
    iconColor: "#b4bccf",
  },
};

export function LessonCard({
  lesson,
  lessonNumber,
  status,
  onPress,
}: LessonCardProps) {
  const config = statusConfig[status];
  const imageConfig = getLessonImageConfig(lesson.id);

  return (
    <TouchableOpacity
      activeOpacity={0.92}
      onPress={onPress}
      className={`rounded-[28px] border p-4 shadow-card ${config.containerClasses}`}
    >
      <View className="flex-row items-start justify-between">
        <View className="flex-row items-center gap-3">
          <View className="h-11 w-11 items-center justify-center rounded-full bg-[#0d1642]">
            <Text className="font-['Poppins-Bold'] text-[15px] text-white">
              {lessonNumber}
            </Text>
          </View>

          <View>
            <Text className="font-['Poppins-Medium'] text-[13px] uppercase tracking-[0.8px] text-[#8a92ae]">
              Lesson {lessonNumber}
            </Text>
            <View className={`mt-1 self-start rounded-full px-3 py-1 ${config.badgeClasses}`}>
              <Text className="font-['Poppins-SemiBold'] text-[12px]">
                {config.badgeLabel}
              </Text>
            </View>
          </View>
        </View>

        <Ionicons name={config.iconName} size={28} color={config.iconColor} />
      </View>

      <View
        className={`mt-4 h-[154px] items-center justify-center overflow-hidden rounded-[24px] ${imageConfig.imageContainerClassName}`}
      >
        <Image
          source={imageConfig.source}
          resizeMode={imageConfig.resizeMode}
          style={{ 
            width: (imageConfig.imageWidth || "100%") as any, 
            height: (imageConfig.imageHeight || "100%") as any
          }}
        />
      </View>

      <View className="mt-4">
        <Text className="font-['Poppins-SemiBold'] text-[22px] leading-[28px] text-[#0d1642]">
          {lesson.title}
        </Text>
        <Text className="mt-1 font-['Poppins-Regular'] text-[14px] leading-[22px] text-[#8a92ae]">
          {lesson.description}
        </Text>
      </View>

      <View className="mt-4 flex-row items-center justify-between">
        <View className="flex-row items-center gap-3">
          <View className="rounded-full bg-[#fff4e8] px-3 py-2">
            <Text className="font-['Poppins-SemiBold'] text-[13px] text-[#ff8a00]">
              +{lesson.xpReward} XP
            </Text>
          </View>
          <Text className="font-['Poppins-Medium'] text-[13px] text-[#8a92ae]">
            {lesson.estimatedMinutes} min
          </Text>
        </View>

        <View className="h-11 w-11 items-center justify-center rounded-full bg-[#0d1642]">
          <Ionicons name="arrow-forward" size={18} color="#ffffff" />
        </View>
      </View>
    </TouchableOpacity>
  );
}
