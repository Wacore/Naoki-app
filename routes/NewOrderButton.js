import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";
import { color } from "react-native-reanimated";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native-gesture-handler";

export default function NewOrderButton({ onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.touch}>
        <MaterialCommunityIcons
          name="plus-circle-outline"
          size={40}
          color={colors.white}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.primary,
    bottom: 35,
    borderWidth: 8,
    borderColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  touch: {
    zIndex: 100,
  },
});
