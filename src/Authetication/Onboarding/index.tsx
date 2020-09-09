import React from "react";
import { View, StyleSheet } from "react-native";

interface ComponentNameProps { }

const Onboarding = () => {
  return <View style={[styles.container]} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "cyan",
  },
});
export default Onboarding;
