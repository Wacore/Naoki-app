import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList } from "react-native";

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
import AppTextInput from "../components/AppTextInput";
import { NavigationEvents } from "react-navigation";

export default function NewOrderScreen({ route, navigation }) {
  console.log(route);

  const initialList = orderNum;

  const [IsDineIn, setIsDineIn] = useState(true);
  const [ItemList, setItemList] = useState(initialList);
  const [SelectedItem, setSelectedItem] = useState(0);
  const [TableList, setTableList] = useState(initialList);
  const [SelectedTable, setSelectedTable] = useState(0);
  const [CounterNum, setCounterNum] = useState(0);
  const [orderList, setOrderList] = useState([]);
  const [orderNumber, setOrderNumber] = useState(1);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [pickupTime, setPickupTime] = useState(0);
  const [CurrentOrder, setCurrentOrder] = useState({
    addition: "None",
    amount: "None",
    id: "None",
  });

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
  };

  const handleRemoveOrderList = (res) => {
    setOrderList(orderList.filter((o) => o.id != res.id));
  };

  const handleSubmit = () => {
    if (orderList.length != 0) {
      let order = {
        orderNum: orderNumber,
        orders: orderList,
      };
      if (IsDineIn) {
        order.peopleNum = SelectedItem;
        order.type = IsDineIn;
        order.tableNum = SelectedTable;
      } else {
        order.type = IsDineIn;
        order.name = name;
        order.phoneNumber = phoneNumber;
        order.pickupTime = pickupTime;
      }
      navigation.navigate("Orders", order);
      setOrderList([]);
      setOrderNumber(orderNumber + 1);
      setIsDineIn(true);
      setSelectedItem(0);
      setSelectedTable(0);
    }
  };

  const clearParams = () => {
    navigation.setParams({});
  };

  React.useEffect(() => {
    let param;
    if (route.params && route.params != CurrentOrder) {
      // To-solve find a solution to the passing params twice problem
      param = route.params;
      setCurrentOrder(param);
      // console.log(param);
      handleAddOrderList(route.params);
    }
  }, [route.params]);

  const willFocusAction = (payload) => {
    console.log(payload);
  };

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
          <AppTextInput
            icon="account"
            placeholder="Name"
            onChangeText={(text) => setName(text)}
          />
          <AppTextInput
            placeholder="Phone Number"
            icon="phone"
            keyboardType="phone-pad"
            onChangeText={(text) => setPhoneNumber(text)}
          />
          <AppTextInput
            placeholder="Phone Number"
            icon="timer"
            keyboardType="phone-pad"
            onChangeText={(text) => setPickupTime(text)}
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
