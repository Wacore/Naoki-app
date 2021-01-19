import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function AppTextInput({ appStyle, icon, ...otherProps }) {
  return (
    <View style={[styles.textInput, appStyle]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={18}
          color={colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
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
  icon: {
    marginHorizontal: 10,
  },
});
