import React from "react";
import { StyleSheet, FlatList } from "react-native";

import AppButton from "../components/AppButton";
import AppPicker from "../components/AppPicker";
import AppSwitch from "../components/AppSwitch";
import colors from "../config/colors";
import numbers from "../data/orderNum";
import Screen from "../components/Screen";
import OrderItem from "./OrderItem";
import AppTextInput from "../components/AppTextInput";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";

import {
  setOrderNum,
  setName,
  setType,
  setPhoneNum,
  setPickUpTime,
  removeOrder,
  resetOrder,
} from "../src/redux/orderListAction";

import useAuth from "../auth/useAuth";
import orderApi from "../API/order";

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
  } = useSelector((state) => state);

  const { user, logOut } = useAuth();

  const initialList = numbers;

  const dispatch = useDispatch();

  const handleSubmit = async () => {
    if (orderItems.length != 0) {
      let orderArr = [...orderItems];
      for (let index = 0; index < orderArr.length; index++) {
        orderArr[index] = _.omit(orderArr[index], ["itemId", "name", "type"]);
        orderArr[index].menu = orderArr[index].menuItemId;
        orderArr[index].desc = orderArr[index].addition;

        delete orderArr[index].menuItemId;
        delete orderArr[index].addition;
      }

      let order = {
        is_done: false,
        serverId: user._id,
        order_info: {
          orderNum: orderNum,
          type: type ? "Dine-in" : "To-go",
        },
        orderlist: orderArr,
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

      const result = await orderApi.addOrder(order);

      if (!result.ok) return console.log(result);
      dispatch(setOrderNum());
      dispatch(resetOrder());

      navigation.navigate("Orders", order);
    }
  };

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
        title="Log out"
        appStyle={styles.addButton}
        appText={styles.addButtonText}
        onPress={logOut}
      />
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
