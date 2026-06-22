import { Ionicons } from "@expo/vector-icons";
import type { BottomTabBarProps } from "expo-router/js-tabs";
import { useCallback, useEffect, useRef } from "react";
import { Pressable, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { colors } from "@/theme/colors";

const ACTIVE_COLOR = colors.brand.purple;
const INACTIVE_COLOR = "#8a92ae";
const CIRCLE_SIZE = 52;
const ICON_SIZE = 22;
const LABEL_SIZE = 11;

type TabConfig = {
  routeName: string;
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  activeIcon: keyof typeof Ionicons.glyphMap;
};

const TAB_CONFIG: TabConfig[] = [
  {
    routeName: "home",
    label: "Home",
    icon: "home-outline",
    activeIcon: "home",
  },
  {
    routeName: "learn",
    label: "Learn",
    icon: "book-outline",
    activeIcon: "book",
  },
  {
    routeName: "ai-teacher",
    label: "AI Teacher",
    icon: "headset-outline",
    activeIcon: "headset",
  },
  {
    routeName: "chat",
    label: "Chat",
    icon: "chatbubble-outline",
    activeIcon: "chatbubble",
  },
  {
    routeName: "profile",
    label: "Profile",
    icon: "person-outline",
    activeIcon: "person",
  },
];

const SPRING_CONFIG = {
  damping: 20,
  stiffness: 220,
  mass: 0.8,
};

function getTabConfig(routeName: string) {
  return TAB_CONFIG.find((tab) => tab.routeName === routeName);
}

export function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();
  const tabLayouts = useRef<Record<number, { x: number; width: number }>>({});
  const indicatorX = useSharedValue(0);
  const isInitialized = useRef(false);

  const updateIndicator = useCallback(
    (index: number, animated: boolean) => {
      const layout = tabLayouts.current[index];
      if (!layout) {
        return;
      }

      const targetX = layout.x + layout.width / 2 - CIRCLE_SIZE / 2;

      if (animated && isInitialized.current) {
        // eslint-disable-next-line react-hooks/immutability
        indicatorX.value = withSpring(targetX, SPRING_CONFIG);
      } else {
        indicatorX.value = targetX;
        isInitialized.current = true;
      }
    },
    [indicatorX],
  );

  useEffect(() => {
    updateIndicator(state.index, true);
  }, [state.index, updateIndicator]);

  const indicatorStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: indicatorX.value }],
  }));

  const activeRoute = state.routes[state.index];
  const activeConfig = activeRoute ? getTabConfig(activeRoute.name) : undefined;

  return (
    <View
      className="border-t border-[#eef0f5] bg-white"
      style={{
        paddingBottom: Math.max(insets.bottom - 10, 6),
        paddingTop: 8,
      }}
    >
      <View className="relative px-1">
        <Animated.View
          pointerEvents="none"
          style={[
            {
              position: "absolute",
              top: 0,
              left: 0,
              width: CIRCLE_SIZE,
              height: CIRCLE_SIZE,
              borderRadius: CIRCLE_SIZE / 2,
              backgroundColor: ACTIVE_COLOR,
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1,
            },
            indicatorStyle,
          ]}
        >
          {activeConfig ? (
            <Ionicons
              name={activeConfig.activeIcon}
              size={ICON_SIZE}
              color="#ffffff"
            />
          ) : null}
        </Animated.View>

        <View className="flex-row">
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const tabConfig = getTabConfig(route.name);
            const isFocused = state.index === index;

            if (!tabConfig) {
              return null;
            }

            const onPress = () => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name, route.params);
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: "tabLongPress",
                target: route.key,
              });
            };

            return (
              <Pressable
                key={route.key}
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel ?? tabConfig.label}
                onPress={onPress}
                onLongPress={onLongPress}
                onLayout={(event) => {
                  const { x, width } = event.nativeEvent.layout;
                  tabLayouts.current[index] = { x, width };
                  updateIndicator(state.index, false);
                }}
                className="flex-1 items-center justify-start"
                style={{ minHeight: CIRCLE_SIZE + 10 }}
              >
                {isFocused ? (
                  <View style={{ width: CIRCLE_SIZE, height: CIRCLE_SIZE }} />
                ) : (
                  <View className="items-center justify-center">
                    <Ionicons
                      name={tabConfig.icon}
                      size={ICON_SIZE}
                      color={INACTIVE_COLOR}
                    />
                    <Text
                      className="mt-1 font-['Poppins-Medium']"
                      style={{
                        fontSize: LABEL_SIZE,
                        color: INACTIVE_COLOR,
                      }}
                    >
                      {tabConfig.label}
                    </Text>
                  </View>
                )}
              </Pressable>
            );
          })}
        </View>
      </View>
    </View>
  );
}
