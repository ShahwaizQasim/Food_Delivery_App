import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

type ButtonProps = {
  children: string;
  onPress?: () => void;
  btnStyle?: any,
  textStyle?: any;
};

const ThemeButton = ({ children, onPress, btnStyle, textStyle }: ButtonProps) => {
  return (
    <Pressable
      style={[styles.button, btnStyle  ]}
      onPress={onPress}
      // onPress={onPress}
    >
      <Text style={[styles.buttonText, textStyle]}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default ThemeButton;
