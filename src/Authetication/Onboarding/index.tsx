import React, { useRef } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Animated, { multiply, divide } from "react-native-reanimated";
import {
  // useValue,
  // onScrollEvent,
  interpolateColor,
  useScrollHandler,
} from "react-native-redash/src/v1";

import Slider, { SLIDER_HEIGHT } from "./Slider";
import SubSlider from "./SubSlider";
import Dot from "./Dot";

const { width } = Dimensions.get("window");
const BORDER_RADIUS = 75;

// COMPONENT
const Onboarding = () => {
  // const x = useValue(0);
  // const onScroll = onScrollEvent({ x });
  // const slides = [
  //   {
  //     title: "Relaxada",
  //     subtitle: "Relaxa aqui tem o que precisa",
  //     description: "Se você está aí, de boa no sofá, chega mais",
  //     color: "#BFEAF5",
  //   },
  //   {
  //     title: "Brincalhona",
  //     subtitle: "Tô de brinks",
  //     description: "Eu não sei você, mas a graça dá vida está em se divertir.",
  //     color: "#BEECC4",
  //   },
  //   {
  //     title: "Ecêntrica",
  //     subtitle: "Não é normal",
  //     description: "Mas afinal quem é normal, não é mesmo?!",
  //     color: "#FFE4D9",
  //   },
  //   {
  //     title: "Timida",
  //     subtitle: "Não se esconda",
  //     description: "Todos estão no mesmo barco, não tenham medo de se mostrar",
  //     color: "#FFDDDD",
  //   },
  // ];
  const slides = [
    {
      title: "Relaxada",
      subtitle: "Relaxa aqui tem o que precisa",
      description: "Se você está aí, de boa no sofá, chega mais",
      color: "#1fc5ef",
    },
    {
      title: "Brincalhona",
      subtitle: "Tô de brinks",
      description: "Eu não sei você, mas a graça dá vida está em se divertir.",
      color: "#63e270",
    },
    {
      title: "Ecêntrica",
      subtitle: "Não é normal",
      description: "Mas afinal quem é normal, não é mesmo?!",
      color: "#ff7d49",
    },
    {
      title: "Timida",
      subtitle: "Não se esconda",
      description: "Todos estão no mesmo barco, não tenham medo de se mostrar",
      color: "#fc3232",
    },
  ];
  const { scrollHandler, x } = useScrollHandler();

  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map((slide) => slide.color),
  });
  const scroll = useRef<Animated.ScrollView>(null);

  return (
    <View style={[styles.container]}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        <Animated.ScrollView
          horizontal
          ref={scroll}
          snapToInterval={width}
          decelerationRate={"fast"}
          showsHorizontalScrollIndicator={false}
          bounces={false}
          // scrollEventThrottle={1}
          {...scrollHandler}
        >
          {slides.map(({ title }, index) => (
            <Slider key={index} right={!!(index % 2)} {...{ title }} />
          ))}
        </Animated.ScrollView>
      </Animated.View>

      <View style={[styles.footer]}>
        {/* Pegar as cores na parte de baixo dinamicamente (Animated) */}

        <Animated.View style={[styles.insideFooter, { backgroundColor }]} />
        <Animated.View style={[styles.outsideFooter]}>
          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <Dot key={index} currentIndex={divide(x, width)} {...{ index }} />
            ))}
          </View>

          <Animated.View
            style={{
              flex: 1,
              flexDirection: "row",
              width: width * slides.length,
              transform: [{ translateX: multiply(x, -1) }],
            }}
          >
            {slides.map(({ subtitle, description }, index) => (
              <SubSlider
                key={index}
                last={index === slides.length - 1}
                onPress={() => {
                  if (scroll.current) {
                    scroll.current
                      .getNode()
                      .scrollTo({ x: width * (index + 1), animated: true });
                  }
                }}
                {...{ subtitle, description }}
              />
            ))}
          </Animated.View>
        </Animated.View>
      </View>
    </View>
  );
};

// STYLES
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
    backgroundColor: "white",
    borderTopLeftRadius: BORDER_RADIUS,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: BORDER_RADIUS,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Onboarding;
