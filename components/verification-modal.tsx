import { useEffect, useRef, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type VerificationModalProps = {
  description: string;
  visible: boolean;
  onClose: () => void;
  onComplete: () => void;
};

export function VerificationModal({
  description,
  visible,
  onClose,
  onComplete,
}: VerificationModalProps) {
  const [code, setCode] = useState("");
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (!visible) {
      setCode("");
      return;
    }

    const timeout = setTimeout(() => {
      inputRef.current?.focus();
    }, 120);

    return () => clearTimeout(timeout);
  }, [visible]);

  useEffect(() => {
    if (code.length === 6) {
      Keyboard.dismiss();
      onComplete();
    }
  }, [code, onComplete]);

  function handleChange(nextValue: string) {
    const digitsOnly = nextValue.replace(/\D/g, "").slice(0, 6);
    setCode(digitsOnly);
  }

  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView
        behavior={process.env.EXPO_OS === "ios" ? "padding" : undefined}
        style={{ flex: 1, justifyContent: "flex-end" }}
      >
        <Pressable
          onPress={onClose}
          style={{
            flex: 1,
            justifyContent: "flex-end",
            backgroundColor: "rgba(13, 22, 66, 0.28)",
            paddingHorizontal: 20,
            paddingBottom: 28,
          }}
        >
          <Pressable
            onPress={() => inputRef.current?.focus()}
            style={{
              borderRadius: 32,
              backgroundColor: "#ffffff",
              paddingHorizontal: 22,
              paddingTop: 24,
              paddingBottom: 28,
            }}
          >
            <Text
              selectable
              className="font-['Poppins-Bold'] text-[26px] text-[#0d1642]"
            >
              Verify your email
            </Text>
            <Text
              selectable
              className="mt-3 font-['Poppins-Regular'] text-[15px] leading-7 text-[#69708b]"
            >
              {description}
            </Text>

            <View className="mt-7 flex-row justify-between">
              {Array.from({ length: 6 }, (_, index) => {
                const digit = code[index];
                const isActive = index === code.length;

                return (
                  <View
                    key={index}
                    className={`h-[58px] w-[46px] items-center justify-center rounded-[18px] border ${
                      isActive ? "border-[#5c43ff] bg-[#f5f2ff]" : "border-[#e8ebf4] bg-white"
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
              onChangeText={handleChange}
              keyboardType="number-pad"
              maxLength={6}
              textContentType="oneTimeCode"
              autoComplete="one-time-code"
              caretHidden
              style={{
                position: "absolute",
                opacity: 0.01,
                height: 1,
                width: 1,
              }}
            />

            <TouchableOpacity
              activeOpacity={0.9}
              onPress={onClose}
              className="mt-7 h-[56px] items-center justify-center rounded-[20px] bg-[#eef1fb]"
            >
              <Text className="font-['Poppins-SemiBold'] text-[16px] text-[#0d1642]">
                Close
              </Text>
            </TouchableOpacity>
          </Pressable>
        </Pressable>
      </KeyboardAvoidingView>
    </Modal>
  );
}
