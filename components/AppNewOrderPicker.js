import React, { useState } from "react";
import { StyleSheet, Text, View, Modal, Button } from "react-native";
import colors from "../config/colors";
import { TouchableWithoutFeedback } from "react-native";
import Screen from "./Screen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MenuStack from "../routes/MenuTab";

export default function AppNewOrderPicker() {
  const Tab = createMaterialTopTabNavigator();

  const [ModalVisible, setmodalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => console.log("New Order")}>
        <View style={styles.container}>
          <Text style={styles.newOrderText}>Add Order</Text>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 16,
    borderColor: colors.sublight,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: colors.white,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    borderStyle: "dashed",
  },
  newOrderText: {
    color: colors.primary,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
