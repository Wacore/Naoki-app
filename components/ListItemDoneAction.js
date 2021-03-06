import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

export default function ListItemDoneAction({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="check-circle"
          size={60}
          color={colors.white}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 130,
    height: 130,
    backgroundColor: "tomato",
    justifyContent: "center",
    alignItems: "center",
  },
});
