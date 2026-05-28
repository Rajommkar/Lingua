import { Link, Stack } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <View className="flex-1 items-center justify-center bg-white px-6">
        <Text className="text-center font-['Poppins-Bold'] text-4xl lowercase text-[#0d1642]">
          lingua
        </Text>
        <Text className="mt-3 text-center font-['Poppins-Regular'] text-base leading-7 text-[#68708c]">
          Open the onboarding flow preview from here.
        </Text>

        <Link href="/onboarding" asChild>
          <TouchableOpacity
            activeOpacity={0.9}
            className="mt-8 rounded-[20px] bg-[#5c43ff] px-8 py-5 shadow-soft"
          >
            <Text className="font-['Poppins-SemiBold'] text-base text-white">
              View onboarding screen
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </>
  );
}
