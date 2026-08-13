import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

type ButtonProps = {
  label: string;
  onPress: () => void;
  color: string,
  textStyle?: StyleProp<TextStyle>;
};

const Button = ({ label, onPress, color, textStyle }: ButtonProps) => {
  const abc = "Syed Shahwaiz";
  return (
    <Pressable
      style={[styles.button, {backgroundColor:color}]}
      onPress={onPress}
      // onPress={onPress}
    >
      <Text style={[styles.buttonText, textStyle]}>{label}</Text>
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

export default Button;
