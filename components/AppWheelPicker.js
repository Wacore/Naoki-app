import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Picker from "react-native-wheel-picker";

export default function AppWheelPicker({
  ItemList,
  onPickerSelect,
  SelectedItem,
}) {
  let PickerItem = Picker.Item;

  return (
    <Picker
      style={{ width: "100%", height: 180 }}
      selectedValue={SelectedItem}
      itemStyle={{ color: "#ccc", fontSize: 26 }}
      onValueChange={(index) => onPickerSelect(index)}
    >
      {ItemList.map((value, i) => (
        <PickerItem label={value} value={i} key={value} />
      ))}
    </Picker>
  );
}

const styles = StyleSheet.create({});
