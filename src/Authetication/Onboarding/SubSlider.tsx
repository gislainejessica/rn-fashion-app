import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Animated from "react-native-reanimated";

interface SubSliderProps {
  subtitle: string;
  description: string;
  last?: boolean;
}
const { height } = Dimensions.get("window");

export const SLIDER_HEIGHT = height * 0.6;

const SubSlider: React.FC<SubSliderProps> = ({
  subtitle,
  description,
  last,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  subtitle: {
    fontSize: 24,
    fontFamily: "SFProText-Semibold",
    color: "#0c0d34",
  },
  description: {
    textAlign: "center",
    fontSize: 16,
    lineHeight: 25,
    fontFamily: "SFProText-Regular",
    color: "#0c0d34",
  },
});

export default SubSlider;
