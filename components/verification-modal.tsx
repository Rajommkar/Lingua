import { useEffect, useRef } from "react";
import {
  AppState,
  type AppStateStatus,
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";

type VerificationModalProps = {
  code: string;
  errorMessage?: string | null;
  isLoading?: boolean;
  recipientLabel: string;
  resendDisabled?: boolean;
  visible: boolean;
  onCodeChange: (value: string) => void;
  onClose: () => void;
  onComplete: () => void | Promise<void>;
  onResend: () => void | Promise<void>;
};

export function VerificationModal({
  code,
  errorMessage,
  isLoading = false,
  recipientLabel,
  resendDisabled = false,
  visible,
  onCodeChange,
  onClose,
  onComplete,
  onResend,
}: VerificationModalProps) {
  const inputRef = useRef<TextInput>(null);
  const appStateRef = useRef<AppStateStatus>(AppState.currentState);

  function focusInput() {
    inputRef.current?.blur();
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 300);
  }

  useEffect(() => {
    if (!visible) {
      return;
    }

    focusInput();

    const subscription = AppState.addEventListener("change", (nextAppState) => {
      appStateRef.current = nextAppState;

      if (visible && nextAppState === "active") {
        inputRef.current?.blur();
        setTimeout(() => {
          inputRef.current?.focus();
        }, 150);
        setTimeout(() => {
          inputRef.current?.focus();
        }, 350);
        setTimeout(() => {
          inputRef.current?.focus();
        }, 600);
      }
    });

    return () => subscription.remove();
  }, [visible]);

  useEffect(() => {
    if (visible && code.length === 6 && !isLoading) {
      Keyboard.dismiss();
      void onComplete();
    }
  }, [code, isLoading, onComplete, visible]);

  if (!visible) {
    return null;
  }

  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 999,
        elevation: 999,
      }}
    >
      <KeyboardAvoidingView
        behavior={process.env.EXPO_OS === "ios" ? "padding" : undefined}
        style={{ flex: 1, justifyContent: "flex-end" }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            backgroundColor: "rgba(17, 19, 34, 0.34)",
          }}
        >
          <Pressable
            onPress={focusInput}
            style={{
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              backgroundColor: "#ffffff",
              paddingHorizontal: 28,
              paddingTop: 22,
              paddingBottom: 34,
            }}
          >
            <View className="flex-row items-start justify-between">
              <View className="flex-1 items-center px-8">
                <Text className="font-['Poppins-Bold'] text-[18px] text-[#11162f]">
                  Check your email
                </Text>
                <Text className="mt-3 text-center font-['Poppins-Regular'] text-[14px] leading-6 text-[#6f7387]">
                  We sent a 6-digit code to
                </Text>
                <Text className="text-center font-['Poppins-SemiBold'] text-[14px] leading-6 text-[#11162f]">
                  {recipientLabel}
                </Text>
              </View>

              <TouchableOpacity
                activeOpacity={0.8}
                onPress={onClose}
                disabled={isLoading}
                className="ml-2 h-8 w-8 items-center justify-center"
              >
                <Feather name="x" size={22} color="#6f7387" />
              </TouchableOpacity>
            </View>

            <View className="relative mt-8">
              <View className="flex-row justify-between">
                {Array.from({ length: 6 }, (_, index) => {
                  const digit = code[index];
                  const isActive = index === code.length;

                  return (
                    <View
                      key={index}
                      className={`h-[62px] w-[46px] items-center justify-center rounded-[16px] border ${
                        isActive
                          ? "border-[#7d5fff] bg-white"
                          : "border-[#e8ebf4] bg-white"
                      }`}
                    >
                      <Text className="font-['Poppins-SemiBold'] text-[22px] text-[#0d1642]">
                        {digit ?? ""}
                      </Text>
                    </View>
                  );
                })}
              </View>

              <TextInput
                ref={inputRef}
                value={code}
                onChangeText={onCodeChange}
                keyboardType="number-pad"
                maxLength={6}
                textContentType="oneTimeCode"
                autoComplete="one-time-code"
                caretHidden
                showSoftInputOnFocus
                selectionColor="transparent"
                underlineColorAndroid="transparent"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  width: "100%",
                  height: "100%",
                  color: "transparent",
                  backgroundColor: "transparent",
                }}
              />
            </View>

            {errorMessage ? (
              <Text className="mt-4 text-center font-['Poppins-Medium'] text-[13px] text-[#e04f5f]">
                {errorMessage}
              </Text>
            ) : null}

            <View className="mt-8 flex-row items-center justify-center">
              <Text className="font-['Poppins-Regular'] text-[14px] text-[#8a8fa5]">
                Didn&apos;t receive it?{" "}
              </Text>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => void onResend()}
                disabled={isLoading || resendDisabled}
              >
                <Text
                  className="font-['Poppins-SemiBold'] text-[14px] text-[#7d5fff]"
                  style={isLoading || resendDisabled ? { opacity: 0.5 } : undefined}
                >
                  Resend
                </Text>
              </TouchableOpacity>
            </View>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
