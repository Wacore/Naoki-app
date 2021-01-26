import React from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

export default function PrepItem({
  item,
  handleCompleteItem,
  handleDeleteItem,
  isCompleted,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.text}</Text>
      {!isCompleted && (
        <>
          <TouchableWithoutFeedback onPress={() => handleDeleteItem(item.key)}>
            <MaterialCommunityIcons
              name="trash-can-outline"
              size={18}
              color={colors.black}
              style={styles.icon}
            />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => handleCompleteItem(item.key)}
          >
            <MaterialCommunityIcons
              name="checkbox-blank-circle-outline"
              size={18}
              color={colors.black}
              style={styles.icon}
            />
          </TouchableWithoutFeedback>
        </>
      )}
      {isCompleted && (
        <>
          <MaterialCommunityIcons
            name="checkbox-marked-circle-outline"
            size={18}
            color="lightgreen"
            style={styles.icon}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 10,
    // paddingVertical: 25,
    backgroundColor: "#fff",
    width: "100%",
    marginVertical: 8,
    flexDirection: "row",
    height: 60,
    alignItems: "center",
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    flex: 0.95,
    paddingLeft: 10,
  },
  icon: {
    flex: 0.05,
  },
});
