import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

interface SliderProps {
  title: string;
  right?: boolean;
}
const { width, height } = Dimensions.get("window");

export const SLIDER_HEIGHT = height * 0.6;

const Slider: React.FC<SliderProps> = ({ title, right }) => {
  const transform = [
    {
      translateY: (SLIDER_HEIGHT - 100) / 2,
    },
    {
      translateX: right ? width / 2 - 50 : -width / 2 + 50,
    },
    {
      rotate: right ? "-90deg" : "90deg",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={[styles.viewTitle, { transform }]}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
  },
  viewTitle: {
    height: 100,
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 60,
    lineHeight: 80,
    fontFamily: "SFProText-Bold",
    color: "white",
  },
});

export default Slider;
