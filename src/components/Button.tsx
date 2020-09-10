import React from "react";
import { Text, StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";

interface ButtonProps {
  variant: "default" | "primary";
  label: string;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({
  variant = "default",
  label,
  onPress,
}) => {
  const backgroundColor = variant === "primary" ? "#2cb9b0" : "#e4e4e4";
  const color = variant === "primary" ? "#ffff" : "#0c0d44";
  return (
    <RectButton
      style={[styles.container, { backgroundColor }]}
      {...{ onPress }}
    >
      <Text style={[styles.label, { color }]}>{label}</Text>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 15,
    fontFamily: "SFProText-Regular",
    textAlign: "center",
  },
});

export default Button;
