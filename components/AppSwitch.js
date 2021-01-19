import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

export default function AppSwitch({ IsDineIn, onSwitchValue }) {
  return (
    <TouchableWithoutFeedback onPress={() => onSwitchValue()}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="food"
          size={18}
          color={colors.medium}
          style={styles.icon}
        />
        <Text style={styles.pickerText}>Dine-In/To-Go</Text>
        <View style={styles.togBox}>
          <View style={styles.togBoxItem}>
            <Text>Dine-in</Text>
          </View>
          <View style={styles.togBoxItem}>
            <Text>To-go</Text>
          </View>
          <View
            style={IsDineIn ? styles.toggleboxAct : styles.toggleboxInact}
          ></View>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
  icon: {
    marginRight: 10,
    marginLeft: 10,
  },
  pickerText: {
    flex: 1,
  },
  togBox: {
    backgroundColor: colors.white,
    width: 150,
    height: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  togBoxItem: {
    padding: 3,
  },
  toggleBox: {
    position: "absolute",
    height: "100%",
    left: 0,
    width: "50%",
    backgroundColor: "rgba(255, 99, 71, 0.4)",
  },
  toggleboxAct: {
    position: "absolute",
    height: "100%",
    left: 0,
    width: "50%",
    backgroundColor: "rgba(255, 99, 71, 0.4)",
  },
  toggleboxInact: {
    position: "absolute",
    height: "100%",
    right: 0,
    width: "50%",
    backgroundColor: "rgba(255, 99, 71, 0.4)",
  },
});
