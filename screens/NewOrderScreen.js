import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";

import AppButton from "../components/AppButton";
import AppCounter from "../components/AppCounter";
import AppFormField from "../components/AppFormField";
import AppInputFeild from "../components/AppInputFeild";
import AppPicker from "../components/AppPicker";
import AppSwitch from "../components/AppSwitch";
import colors from "../config/colors";
import orderNum from "../data/orderNum";
import Screen from "../components/Screen";

import menu from "../data/menu.js";
import OrderItem from "./OrderItem";

export default function NewOrderScreen({ route, navigation }) {
  // console.log(route);

  const initialList = orderNum;

  const [IsDineIn, setIsDineIn] = useState(true);
  const [ItemList, setItemList] = useState(initialList);
  const [SelectedItem, setSelectedItem] = useState(0);
  const [TableList, setTableList] = useState(initialList);
  const [SelectedTable, setSelectedTable] = useState(0);
  const [CounterNum, setCounterNum] = useState(0);
  const [orderList, setOrderList] = useState([]);
  const [orderNumber, setOrderNumber] = useState(1);

  const handleSwitchValue = () => {
    setIsDineIn((previousState) => !previousState);
  };

  const handlePickerSelect = (index) => {
    setSelectedItem(index);
  };

  const handleTableSelect = (index) => {
    setSelectedTable(index);
  };

  const handleAddOrderList = (res) => {
    let data = menu.filter((a) => a.id == res.id);
    data[0].amount = res.amount;
    data[0].addition = res.addition;
    setOrderList([...orderList, data[0]]);
    // setOrderList(data[0]);
    // console.log(data[0]);

    console.log(orderList);
  };

  const handleRemoveOrderList = (res) => {
    setOrderList(orderList.filter((o) => o.id != res.id));
  };

  const handleSubmit = () => {
    if (orderList.length != 0) {
      navigation.navigate("Orders", {
        orderNum: orderNumber,
        peopleNum: SelectedItem,
        type: IsDineIn,
        tableNum: SelectedTable,
        orders: orderList,
      });
      setOrderList([]);
      setOrderNumber(orderNumber + 1);
      setIsDineIn(true);
      setSelectedItem(0);
      setSelectedTable(0);
    }
  };

  React.useEffect(() => {
    if (route.params) {
      handleAddOrderList(route.params);
      // console.log(route.params);
    }
  }, [route.params]);

  return (
    <Screen appStyle={styles.container}>
      <AppSwitch IsDineIn={IsDineIn} onSwitchValue={handleSwitchValue} />
      {IsDineIn && (
        <>
          <AppPicker
            icon="human-male-male"
            ItemList={ItemList}
            SelectedItem={SelectedItem}
            onPickerSelect={handlePickerSelect}
            title="Number of Customer:"
          />
          <AppPicker
            icon="chair-rolling"
            ItemList={TableList}
            SelectedItem={SelectedTable}
            onPickerSelect={handleTableSelect}
            title="Table Number"
          />
          <AppInputFeild
            icon="apps"
            title="Counter"
            item={
              <AppCounter
                counterNum={CounterNum}
                onPressMin={() => setCounterNum(CounterNum - 1)}
                onPressPlus={() => setCounterNum(CounterNum + 1)}
              />
            }
          />
        </>
      )}
      {!IsDineIn && (
        <>
          <AppFormField name="name" placeholder="Name" icon="account" />
          <AppFormField
            name="phoneNum"
            placeholder="Phone Number"
            icon="phone"
            keyboardType="phone-pad"
          />
        </>
      )}
      <AppButton
        title="Add"
        appStyle={styles.addButton}
        appText={styles.addButtonText}
        onPress={() => navigation.navigate("Menu")}
      />
      <AppButton
        title="DONE"
        appStyle={{ backgroundColor: colors.primary }}
        onPress={handleSubmit}
      />
      {orderList && (
        <FlatList
          data={orderList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <OrderItem
              name={item.name}
              amount={item.amount}
              addition={item.addition}
              onRemoveOrder={() => handleRemoveOrderList(item)}
            />
          )}
        />
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  addButton: {
    fontSize: 16,
    borderColor: colors.sublight,
    borderWidth: 1,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    borderStyle: "dashed",
    backgroundColor: colors.white,
  },
  addButtonText: {
    color: colors.sublight,
  },
  buttonBox: {
    position: "absolute",
    width: "100%",
    bottom: 0,
  },
});
