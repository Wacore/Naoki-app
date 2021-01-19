import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function TableInfo({ peopleNum, type, tableNum }) {
  return (
    <View style={styles.infoBox}>
      <View style={styles.infoDetails}>
        <MaterialCommunityIcons
          name="human-male-male"
          size={25}
          color={colors.medium}
        />
        <Text style={styles.title}> : {peopleNum} </Text>
      </View>
      <View style={styles.infoDetails}>
        <MaterialCommunityIcons name="food" size={25} color={colors.medium} />
        <Text style={styles.title}>
          {" "}
          : {type == true ? "Dine-in" : "To-go"}
        </Text>
      </View>
      <View style={styles.infoDetails}>
        <MaterialCommunityIcons
          name="chair-rolling"
          size={25}
          color={colors.medium}
        />
        <Text style={styles.title}> : {tableNum}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  infoBox: {
    flex: 1,
  },
  infoDetails: {
    flexDirection: "row",
    marginBottom: 5,
    alignItems: "center",
  },
  numBox: {
    width: 100,
    height: 100,
    backgroundColor: colors.light,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#e1e1e1",
    marginRight: 20,
  },
  number: {
    fontSize: 40,
  },
});
