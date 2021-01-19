import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";

export default function AppText({ children, appStyle }) {
  return (
    <>
      <Text style={[styles.text, appStyle]}>{children}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Arial",
    fontSize: 18,
    fontWeight: "400",
    color: colors.medium,
  },
});
