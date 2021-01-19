import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppText from "./AppText";

export default function ErrorMessage({ error, visible }) {
  if (!error || !visible) return null;
  return <AppText appStyle={styles.message}>{error}</AppText>;
}

const styles = StyleSheet.create({
  message: { color: "red", fontSize: 16, paddingLeft: 15 },
});
