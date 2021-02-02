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
  setOrderNum,
  setName,
  setType,
  setPhoneNum,
  setPickUpTime,
  removeOrder,
  addList,
  resetOrder,
} from "../src/redux/orderListAction";

export default function NewOrderScreen({ navigation }) {
  const {
    type,
    peopleNum,
    tableNum,
    orderNum,
    name,
    phoneNumber,
    pickUpTime,
    orderItems,
    orderlist,
  } = useSelector((state) => state);

  const initialList = numbers;

  const dispatch = useDispatch();

  const handleAddOrderList = (res) => {
    let data = menu.filter((a) => a.id == res.id);
    data[0].amount = res.amount;
    data[0].addition = res.addition;
    // data[0].isSent = false;
    setOrderList([...orderList, data[0]]);
  };

  const handleSubmit = () => {
    if (orderItems.length != 0) {
      let order = {
        orderId: Math.floor(100000 + Math.random() * 900000),
        is_done: false,
        order_info: {
          orderNum: orderNum,
          type: type ? "Dine-in" : "To-go",
        },
        orderlist: orderItems,
      };
      if (type) {
        order.order_info.peoNum = peopleNum;
        order.order_info.tableNum = tableNum;
      } else {
        order.order_info.pickupTime = pickUpTime;
        order.customer_info = {
          name: name,
          phoneNum: phoneNumber,
        };
      }

      dispatch(addList(order));
      dispatch(setOrderNum());
      dispatch(resetOrder());
      console.log(order);
      navigation.navigate("Orders", order);
    }
  };

  React.useEffect(() => {
    // console.log(orderlist);
  });

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
            title="Number of Customer:"
          />
          <AppPicker
            icon="chair-rolling"
            pickerType="table"
            ItemList={initialList}
            selectedNum={tableNum}
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
            placeholder="Time"
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
      {orderItems && (
        <FlatList
          data={orderItems}
          keyExtractor={(item) => item.itemId.toString()}
          renderItem={({ item }) => (
            <OrderItem
              name={item.name}
              amount={item.amount}
              addition={item.addition}
              onRemoveOrder={() => dispatch(removeOrder(item.itemId))}
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
