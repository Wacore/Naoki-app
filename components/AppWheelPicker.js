import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Picker from "@gregfrench/react-native-wheel-picker";
import { useDispatch } from "react-redux";
import { setPeopleNum, setTableNum } from "../src/redux/orderListAction";

export default function AppWheelPicker({ ItemList, selectedNum, pickerType }) {
  let PickerItem = Picker.Item;

  const dispatch = useDispatch();

  return (
    <Picker
      style={{ width: "100%", height: 180 }}
      selectedValue={selectedNum}
      itemStyle={{ color: "#ccc", fontSize: 26 }}
      onValueChange={(index) =>
        pickerType == "table"
          ? dispatch(setTableNum(index))
          : dispatch(setPeopleNum(index))
      }
    >
      {ItemList.map((value, i) => (
        <PickerItem label={value} value={i} key={value} />
      ))}
    </Picker>
  );
}

const styles = StyleSheet.create({});
