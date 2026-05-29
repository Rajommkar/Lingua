import { AntDesign, Feather } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import { useMemo, useState } from "react";
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
import { getAvailableLanguages } from "@/data/languages";
import { useLanguageStore } from "@/store/language-store";
import type { Language, LanguageCode } from "@/types/learning";

const availableLanguages = getAvailableLanguages();

function matchesSearch(language: Language, query: string) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) {
    return true;
  }

  return (
    language.name.toLowerCase().includes(normalized) ||
    language.nativeName.toLowerCase().includes(normalized) ||
    language.shortLabel.toLowerCase().includes(normalized)
  );
}

type LanguageRowProps = {
  language: Language;
  isSelected: boolean;
  onPress: () => void;
};

function LanguageRow({ language, isSelected, onPress }: LanguageRowProps) {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityState={{ selected: isSelected }}
      activeOpacity={0.85}
      onPress={onPress}
      className={`mb-3 flex-row items-center rounded-[20px] border px-4 py-[18px] ${
        isSelected
          ? "border-[#5c43ff] bg-[#f4f1ff]"
          : "border-transparent bg-white"
      }`}
    >
      <View className="h-12 w-12 items-center justify-center rounded-full bg-[#f6f7fb]">
        <Text className="text-[26px] leading-[30px]">{language.flagEmoji}</Text>
      </View>

      <View className="ml-3.5 flex-1">
        <Text className="font-['Poppins-SemiBold'] text-[17px] tracking-[-0.3px] text-[#0d1642]">
          {language.name}
        </Text>
        <Text className="mt-0.5 font-['Poppins-Regular'] text-[14px] text-[#8a92ae]">
          {language.learnerCountLabel}
        </Text>
      </View>

      {isSelected ? (
        <View className="h-8 w-8 items-center justify-center rounded-full bg-[#5c43ff]">
          <AntDesign name="check" size={18} color="#ffffff" />
        </View>
      ) : (
        <Feather name="chevron-right" size={24} color="#c5cad6" />
      )}
    </TouchableOpacity>
  );
}

export default function ChooseLanguageScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const selectedLanguageCode = useLanguageStore(
    (state) => state.selectedLanguageCode,
  );
  const setSelectedLanguageCode = useLanguageStore(
    (state) => state.setSelectedLanguageCode,
  );
  const [selectedCode, setSelectedCode] = useState<LanguageCode>(
    selectedLanguageCode ?? availableLanguages[0]?.code ?? "es",
  );

  const filteredLanguages = useMemo(
    () => availableLanguages.filter((language) => matchesSearch(language, searchQuery)),
    [searchQuery],
  );

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
      return;
    }

    router.replace("/");
  };

  const handleConfirm = () => {
    setSelectedLanguageCode(selectedCode);
    router.replace("/home");
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            flexGrow: 1,
            paddingHorizontal: 22,
            paddingTop: 8,
            paddingBottom: 24,
          }}
        >
          <View className="flex-row items-center">
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityLabel="Go back"
              activeOpacity={0.8}
              onPress={handleBack}
              className="h-12 w-12 items-start justify-center"
            >
              <Feather name="chevron-left" size={34} color="#0d1642" />
            </TouchableOpacity>

            <Text className="flex-1 text-center font-['Poppins-SemiBold'] text-[18px] tracking-[-0.3px] text-[#0d1642]">
              Choose a language
            </Text>

            <View className="h-12 w-12" />
          </View>

          <View className="mt-5 flex-row items-center rounded-full border border-[#e7ebf3] px-4 py-[14px]">
            <Feather name="search" size={20} color="#8a92ae" />
            <TextInput
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholder="Search languages"
              placeholderTextColor="#8a92ae"
              className="ml-3 flex-1 font-['Poppins-Regular'] text-[16px] text-[#0d1642]"
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="while-editing"
            />
          </View>

          <Text className="mt-7 font-['Poppins-SemiBold'] text-[18px] tracking-[-0.3px] text-[#0d1642]">
            Popular
          </Text>

          <View className="mt-4">
            {filteredLanguages.length > 0 ? (
              filteredLanguages.map((language) => (
                <LanguageRow
                  key={language.code}
                  language={language}
                  isSelected={selectedCode === language.code}
                  onPress={() => setSelectedCode(language.code)}
                />
              ))
            ) : (
              <View className="items-center py-10">
                <Text className="font-['Poppins-Regular'] text-[15px] text-[#8a92ae]">
                  No languages match your search.
                </Text>
              </View>
            )}
          </View>

          <TouchableOpacity
            accessibilityRole="button"
            activeOpacity={0.9}
            onPress={handleConfirm}
            className="mt-2 h-[64px] items-center justify-center rounded-[20px] bg-[#5c43ff] shadow-soft"
          >
            <Text className="font-['Poppins-SemiBold'] text-[17px] text-white">
              Confirm language
            </Text>
          </TouchableOpacity>

          <View className="mt-2 items-center overflow-hidden">
            <Image
              source={images.earth}
              resizeMode="contain"
              style={{ width: "100%", height: 220, marginTop: 8 }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
