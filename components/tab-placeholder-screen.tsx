import { Stack } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type TabPlaceholderScreenProps = {
  title: string;
};

export function TabPlaceholderScreen({ title }: TabPlaceholderScreenProps) {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <SafeAreaView style={{ flex: 1, backgroundColor: "#f6f7fb" }}>
        <View className="flex-1 items-center justify-center px-8">
          <Text className="font-['Poppins-SemiBold'] text-[24px] tracking-[-0.3px] text-[#0d1642]">
            {title}
          </Text>
          <Text className="mt-2 text-center font-['Poppins-Regular'] text-[15px] text-[#8a92ae]">
            Coming soon
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
}
