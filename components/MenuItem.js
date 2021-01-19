import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function MenuItem({ title, subTitle, desc, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.conBox}>
          <View style={styles.infoBox}>
            <Text style={{ paddingBottom: 5 }}>{title}</Text>
            <Text>{subTitle}</Text>
          </View>
          <View style={styles.descBox}>
            <Text>${desc}</Text>
          </View>
          <MaterialCommunityIcons name="chevron-right" size={18} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 70,
    backgroundColor: colors.white,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  descBox: { justifyContent: "center", alignItems: "center", width: "7%" },
  infoBox: {
    width: "93%",
  },
  conBox: {
    flexDirection: "row",
    alignItems: "center",
    width: "98%",
    height: 50,
    paddingHorizontal: 10,
  },
});
