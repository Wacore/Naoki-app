import React, { useState } from "react";
import { StyleSheet, Text, View, Modal, Button } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native";

import AppWheelPicker from "./AppWheelPicker";
import colors from "../config/colors";
import Screen from "./Screen";

export default function AppPicker({
  icon,
  ItemList,
  SelectedItem,
  onPickerSelect,
  title,
}) {
  const [ModalVisible, setmodalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setmodalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={18}
              color={colors.medium}
              style={styles.icon}
            />
          )}
          <Text style={styles.pickerText}>{title}</Text>
          <View style={styles.numBox}>
            <Text>{ItemList[SelectedItem]}</Text>
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            size={18}
            color={colors.medium}
            style={styles.icon}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={ModalVisible} style={styles.modalBox}>
        <Screen appStyle={styles.modalBox}>
          <View style={styles.wheelPickerContainer}>
            <AppWheelPicker
              ItemList={ItemList}
              SelectedItem={SelectedItem}
              onPickerSelect={onPickerSelect}
            />
            <View style={styles.buttonBox}>
              <Button title="Done" onPress={() => setmodalVisible(false)} />
            </View>
          </View>
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  buttonBox: {
    marginTop: 30,
  },
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
  modalBox: {
    padding: 0,
  },
  numBox: {
    backgroundColor: "#fff",
    paddingVertical: 6,
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  pickerText: {
    flex: 1,
  },

  wheelPickerContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 300,
    backgroundColor: "rgba(240, 240, 240, 0.8)",
  },
});
