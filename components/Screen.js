import React from "react";
import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";

export default function Screen({ appStyle, children }) {
  return <View style={[styles.container, appStyle]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop: Constants.statusBarHeight,
    padding: 7,
  },
});
