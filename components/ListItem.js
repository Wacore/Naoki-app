import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import TableInfo from "./TableInfo";
import Swipeable from "react-native-gesture-handler/Swipeable";

export default function ListItem({
  orderNum,
  peopleNum,
  type,
  tableNum,
  renderRightAction,
  renderLeftAction,
  onPress,
  name,
  pickupTime,
}) {
  return (
    <Swipeable
      renderRightActions={renderRightAction}
      renderLeftActions={renderLeftAction}
    >
      <TouchableOpacity underlayColor={colors.white} onPress={onPress}>
        <View style={styles.container}>
          <View style={styles.numBox}>
            <Text style={styles.number}>#{orderNum}</Text>
          </View>
          <TableInfo
            peopleNum={peopleNum}
            type={type}
            tableNum={tableNum}
            name={name}
            pickupTime={pickupTime}
          />
          <MaterialCommunityIcons
            name="chevron-right"
            color={colors.medium}
            size={30}
          />
        </View>
      </TouchableOpacity>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 130,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "tomato",
    padding: 15,
    backgroundColor: colors.white,
  },

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
    marginRight: 45,
  },
  number: {
    fontSize: 40,
  },
});
