import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList } from "react-native";

import AppButton from "../components/AppButton";
import AppPicker from "../components/AppPicker";
import AppSwitch from "../components/AppSwitch";
import colors from "../config/colors";
import numbers from "../data/orderNum";
import Screen from "../components/Screen";
import menu from "../data/menu.js";
import OrderItem from "./OrderItem";
import AppTextInput from "../components/AppTextInput";
import { useDispatch, useSelector } from "react-redux";

import {
  setName,
  setType,
  setPhoneNum,
  setPickUpTime,
} from "../src/redux/orderListAction";

export default function NewOrderScreen({ route, navigation }) {
  const {
    type,
    peopleNum,
    tableNum,
    name,
    phoneNumber,
    pickUpTime,
  } = useSelector((state) => state);

  const initialList = numbers;

  const [orderList, setOrderList] = useState([]);
  const [orderNumber, setOrderNumber] = useState(1);
  const [CurrentOrder, setCurrentOrder] = useState({
    addition: "None",
    amount: "None",
    id: "None",
  });
  const dispatch = useDispatch();

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
    // data[0].isSent = false;
    setOrderList([...orderList, data[0]]);
  };

  const handleRemoveOrderList = (res) => {
    console.log(res);
    setOrderList(orderList.filter((o) => o.id != res.id));
  };

  const handleSubmit = () => {
    //   if (orderList.length != 0) {
    //     let order = {
    //       orderNum: orderNumber,
    //       orders: orderList,
    //     };
    //     if (IsDineIn) {
    //       order.peopleNum = SelectedItem;
    //       order.type = IsDineIn;
    //       order.tableNum = SelectedTable;
    //     } else {
    //       order.type = IsDineIn;
    //       order.name = name;
    //       order.phoneNumber = phoneNumber;
    //       order.pickupTime = pickupTime;
    //     }
    //     navigation.navigate("Orders", order);
    //     setOrderList([]);
    //     setOrderNumber(orderNumber + 1);
    //     setIsDineIn(true);
    //     setSelectedItem(0);
    //     setSelectedTable(0);
    //   }
    // };

    // const clearParams = () => {
    //   navigation.setParams({});

    alert(`${name} + ${phoneNumber} + ${pickUpTime}`);
  };

  React.useEffect(() => {
    let param;
    console.log(name);
    if (route.params && route.params != CurrentOrder) {
      // To-solve find a solution to the passing params twice problem
      param = route.params;
      setCurrentOrder(param);
      // console.log(param);
      handleAddOrderList(route.params);
    }
  }, [route.params]);

  return (
    <Screen appStyle={styles.container}>
      <AppSwitch IsDineIn={type} onSwitchValue={() => dispatch(setType())} />
      {type && (
        <>
          <AppPicker
            icon="human-male-male"
            pickerType="people"
            ItemList={initialList}
            selectedNum={peopleNum}
            onPickerSelect={handlePickerSelect}
            title="Number of Customer:"
          />
          <AppPicker
            icon="chair-rolling"
            pickerType="table"
            ItemList={initialList}
            selectedNum={tableNum}
            onPickerSelect={handleTableSelect}
            title="Table Number"
          />
        </>
      )}
      {!type && (
        <>
          <AppTextInput
            icon="account"
            placeholder="Name"
            onChangeText={(text) => dispatch(setName(text))}
          />
          <AppTextInput
            placeholder="Phone Number"
            icon="phone"
            keyboardType="phone-pad"
            onChangeText={(text) => dispatch(setPhoneNum(text))}
          />
          <AppTextInput
            placeholder="Phone Number"
            icon="timer"
            keyboardType="phone-pad"
            onChangeText={(text) => dispatch(setPickUpTime(text))}
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
