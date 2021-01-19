import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function AppHeader({ title, navigation }) {
  console.log(navigation);
  return (
    <View style={styles.headerContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons
          name="note-plus-outline"
          size={20}
          style={styles.icon}
          onPress={() => navigation.navigate("NewOrder")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: "100%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  titleContainer: {
    width: "95%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "tomato",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  iconContainer: {
    width: "5%",
    justifyContent: "center",
    alignItems: "center",
  },
});
