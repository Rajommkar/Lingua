import type { ImageResizeMode, ImageSourcePropType } from "react-native";

type LessonImageConfig = {
  source: ImageSourcePropType;
  resizeMode: ImageResizeMode;
  imageContainerClassName: string;
  imageWidth?: string;
  imageHeight?: string;
};

export const images = {
  mascotLogo: require("../assets/images/moscot-logo.png"),
  mascotWelcome: require("../assets/images/mascot-welcome.png"),
  mascotAuth: require("../assets/images/mascot-auth.png"),
  earth: require("../assets/images/earth.png"),
  palace: require("../assets/images/palace.png"),
  treasure: require("../assets/images/treasure.png"),
  streakFire: require("../assets/images/streak-fire.png"),
};

const defaultLessonImage: LessonImageConfig = {
  source: {
    uri: "https://picsum.photos/seed/lingua-lessons/800/600",
  },
  resizeMode: "cover",
  imageContainerClassName: "bg-[#eef1ff]",
  imageWidth: "100%",
  imageHeight: "100%",
};

export const lessonImages: Record<string, LessonImageConfig> = {
  "es-unit-1-lesson-1": {
    source: images.mascotWelcome,
    resizeMode: "contain",
    imageContainerClassName: "bg-[#eef1ff]",
    imageWidth: "76%",
    imageHeight: "76%",
  },
  "es-unit-1-lesson-2": {
    source: images.mascotAuth,
    resizeMode: "contain",
    imageContainerClassName: "bg-[#fff5ef]",
    imageWidth: "76%",
    imageHeight: "76%",
  },
  "es-unit-2-lesson-1": {
    source: images.palace,
    resizeMode: "contain",
    imageContainerClassName: "bg-[#f1eeff]",
    imageWidth: "78%",
    imageHeight: "72%",
  },
  "fr-unit-1-lesson-1": {
    source: images.earth,
    resizeMode: "contain",
    imageContainerClassName: "bg-[#eef8ff]",
    imageWidth: "74%",
    imageHeight: "74%",
  },
  "fr-unit-1-lesson-2": {
    source: images.mascotAuth,
    resizeMode: "contain",
    imageContainerClassName: "bg-[#fff5ef]",
    imageWidth: "76%",
    imageHeight: "76%",
  },
  "fr-unit-1-lesson-3": {
    source: images.mascotWelcome,
    resizeMode: "contain",
    imageContainerClassName: "bg-[#f9f2ff]",
    imageWidth: "76%",
    imageHeight: "76%",
  },
  "fr-unit-2-lesson-1": {
    source: images.treasure,
    resizeMode: "contain",
    imageContainerClassName: "bg-[#fff6eb]",
    imageWidth: "64%",
    imageHeight: "72%",
  },
  "fr-unit-2-lesson-2": {
    source: images.earth,
    resizeMode: "contain",
    imageContainerClassName: "bg-[#eef8ff]",
    imageWidth: "74%",
    imageHeight: "74%",
  },
  "fr-unit-3-lesson-1": {
    source: images.mascotWelcome,
    resizeMode: "contain",
    imageContainerClassName: "bg-[#eef1ff]",
    imageWidth: "76%",
    imageHeight: "76%",
  },
  "ja-unit-1-lesson-1": {
    source: images.earth,
    resizeMode: "contain",
    imageContainerClassName: "bg-[#eef8ff]",
    imageWidth: "74%",
    imageHeight: "74%",
  },
  "ja-unit-1-lesson-2": {
    source: images.mascotAuth,
    resizeMode: "contain",
    imageContainerClassName: "bg-[#fff5ef]",
    imageWidth: "76%",
    imageHeight: "76%",
  },
  "ja-unit-1-lesson-3": {
    source: images.treasure,
    resizeMode: "contain",
    imageContainerClassName: "bg-[#fff6eb]",
    imageWidth: "64%",
    imageHeight: "72%",
  },
  "ja-unit-2-lesson-1": {
    source: images.mascotWelcome,
    resizeMode: "contain",
    imageContainerClassName: "bg-[#eef1ff]",
    imageWidth: "76%",
    imageHeight: "76%",
  },
  "ja-unit-2-lesson-2": {
    source: images.palace,
    resizeMode: "contain",
    imageContainerClassName: "bg-[#f1eeff]",
    imageWidth: "78%",
    imageHeight: "72%",
  },
  "ja-unit-3-lesson-1": {
    source: images.earth,
    resizeMode: "contain",
    imageContainerClassName: "bg-[#eef8ff]",
    imageWidth: "74%",
    imageHeight: "74%",
  },
  "de-unit-1-lesson-1": {
    source: images.mascotWelcome,
    resizeMode: "contain",
    imageContainerClassName: "bg-[#eef1ff]",
    imageWidth: "76%",
    imageHeight: "76%",
  },
  "de-unit-1-lesson-2": {
    source: images.mascotAuth,
    resizeMode: "contain",
    imageContainerClassName: "bg-[#fff5ef]",
    imageWidth: "76%",
    imageHeight: "76%",
  },
  "de-unit-1-lesson-3": {
    source: images.treasure,
    resizeMode: "contain",
    imageContainerClassName: "bg-[#fff6eb]",
    imageWidth: "64%",
    imageHeight: "72%",
  },
  "de-unit-2-lesson-1": {
    source: images.palace,
    resizeMode: "contain",
    imageContainerClassName: "bg-[#f1eeff]",
    imageWidth: "78%",
    imageHeight: "72%",
  },
  "de-unit-2-lesson-2": {
    source: images.earth,
    resizeMode: "contain",
    imageContainerClassName: "bg-[#eef8ff]",
    imageWidth: "74%",
    imageHeight: "74%",
  },
  "de-unit-2-lesson-3": {
    source: images.treasure,
    resizeMode: "contain",
    imageContainerClassName: "bg-[#fff6eb]",
    imageWidth: "64%",
    imageHeight: "72%",
  },
};

export function getLessonImageConfig(lessonId: string): LessonImageConfig {
  return lessonImages[lessonId] ?? defaultLessonImage;
}
