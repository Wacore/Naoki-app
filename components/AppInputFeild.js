import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function AppInputFeild({ icon, title, item }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={18}
          color={colors.medium}
          style={styles.icon}
        />
      )}
      <Text style={styles.counterText}>{title}</Text>
      <>{item}</>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 16,
    borderColor: colors.gray,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: colors.light,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  counterText: {
    flex: 1,
  },
  icon: {
    marginRight: 10,
    marginLeft: 10,
  },
});
