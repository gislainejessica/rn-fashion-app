import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

import Button from "../../components/Button";

interface SubSliderProps {
  subtitle: string;
  description: string;
  last?: boolean;
  onPress: () => void;
}
const { height } = Dimensions.get("window");

export const SLIDER_HEIGHT = height * 0.6;

const SubSlider: React.FC<SubSliderProps> = ({
  subtitle,
  description,
  last,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button
        label={last ? "Vamos Começar" : "Próximo"}
        variant={last ? "primary" : "default"}
        {...{ onPress }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 44,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 24,
    fontFamily: "SFProText-Semibold",
    color: "#0c0d34",
    lineHeight: 30,
    marginBottom: 12,
  },
  description: {
    textAlign: "center",
    fontSize: 16,
    lineHeight: 25,
    fontFamily: "SFProText-Regular",
    color: "#0c0d34",
    marginBottom: 40,
  },
});

export default SubSlider;
