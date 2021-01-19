import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import colors from "../config/colors";

export default function AppButton({ appStyle, appText, onPress, title }) {
  return (
    <TouchableOpacity style={[styles.button, appStyle]} onPress={onPress}>
      <Text style={[styles.text, appText]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "black",
    borderRadius: 20,
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    color: colors.white,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
