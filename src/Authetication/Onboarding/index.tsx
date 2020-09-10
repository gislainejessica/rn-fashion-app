import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import {
  useValue,
  onScrollEvent,
  interpolateColor,
} from "react-native-redash/src/v1";
import Animated from "react-native-reanimated";

import Slider, { SLIDER_HEIGHT } from "./Slider";
import SubSlider from "./SubSlider";

const { width } = Dimensions.get("window");
const BORDER_RADIUS = 75;

const Onboarding = () => {
  const x = useValue(0);
  const onScroll = onScrollEvent({ x });
  const slides = [
    {
      title: "Relaxada",
      subtitle: "Relaxa aqui tem o que precisa",
      description: "Se você está aí, de boa no sofá, chega mais",
      color: "#BFEAF5",
    },
    {
      title: "Brincalhona",
      subtitle: "Tô de brinks",
      description: "Eu não sei você, mas a graça dá vida está em se divertir.",
      color: "#BEECC4",
    },
    {
      title: "Ecêntrica",
      subtitle: "Não é normal",
      description: "Mas afinal quem é normal, não é mesmo?!",
      color: "#FFE4D9",
    },
    {
      title: "Timida",
      subtitle: "Não se esconda",
      description: "Todos estão no mesmo barco, não tenham medo de se mostrar",
      color: "#FFDDDD",
    },
  ];
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map((slide) => slide.color),
  });

  return (
    <View style={[styles.container]}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        <Animated.ScrollView
          horizontal
          snapToInterval={width}
          decelerationRate={"fast"}
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={1}
          {...{ onScroll }}
        >
          {slides.map(({ title }, index) => (
            <Slider key={index} right={!!(index % 2)} {...{ title }} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={[styles.footer]}>
        {/* Pegar as cores na parte de baixo dinamicamente (Animated) */}
        <Animated.View style={[styles.insideFooter, { backgroundColor }]}>
          <View style={styles.outsideFooter}>
            {slides.map(({ subtitle, description }, index) => (
              <SubSlider
                key={index}
                last={index === slides.length - 1}
                {...{ subtitle, description }}
              />
            ))}
          </View>
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slider: {
    height: SLIDER_HEIGHT,
    borderBottomRightRadius: BORDER_RADIUS,
  },
  footer: {
    flex: 1,
  },
  insideFooter: {
    ...StyleSheet.absoluteFillObject,
  },
  outsideFooter: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    borderTopLeftRadius: BORDER_RADIUS,
  },
});

export default Onboarding;
