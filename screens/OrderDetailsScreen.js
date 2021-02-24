import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  TouchableOpacity,
} from "react-native";

import AppText from "../components/AppText";
import colors from "../config/colors";
import Screen from "../components/Screen";
import _ from "lodash";

import OrderItem from "./OrderItem";
import sortingOrders from "../data/orderSorting";
import { useDispatch, useSelector } from "react-redux";
import {
  setEdit,
  updateItemSent,
  setCurrentOrder,
  finishOrder,
} from "../src/redux/orderListAction";

export default function OrderDetailsScreen({ route, navigation }) {
  const { orderNum } = route.params;
  const dispatch = useDispatch();

  const orderItems = useSelector((state) => state.orderlist);
  const isEdit = useSelector((state) => state.isEdit);
  const { orderId, order_info, orderlist, customer_info } = orderItems.filter(
    (o) => o.order_info.orderNum == orderNum
  )[0];

  const handleEditOrder = () => {
    dispatch(setEdit(true));
    dispatch(setCurrentOrder(orderNum));
  };

  const handleCompleteEditOrder = (key) => {};

  let orderListSorted = sortingOrders(orderlist);

  useEffect(() => {
    // console.log(orderlist);
    // console.log(orderNum);
    // console.log(order.order_info);
    // orderList = sortingOrders(order);
  });

  return (
    <Screen appStyle={{ backgroundColor: colors.light, padding: 0 }}>
      <View style={styles.header}>
        <AppText>Order Number: #{orderNum}</AppText>
        {order_info.type == "Dine-in" ? (
          <>
            <AppText>Table: {order_info.tableNum}</AppText>
            <AppText>People: {order_info.peoNum}</AppText>
          </>
        ) : (
          <>
            <AppText>Name: {customer_info.name}</AppText>
            <AppText>Contact: {customer_info.phoneNum}</AppText>
            <AppText>Time: {order_info.pickupTime}</AppText>
          </>
        )}

        {isEdit ? (
          <>
            <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
              <AppText appStyle={{ color: colors.primary }}>Add</AppText>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => dispatch(setEdit(false))}>
              <AppText appStyle={{ color: colors.primary }}>Done</AppText>
            </TouchableOpacity>
          </>
        ) : (
          <TouchableOpacity onPress={() => handleEditOrder()}>
            <AppText appStyle={{ color: colors.primary }}>Edit</AppText>
          </TouchableOpacity>
        )}
      </View>
      <SectionList
        sections={orderListSorted}
        keyExtractor={(item) => item.itemId.toString()}
        renderItem={({ item }) => (
          <OrderItem
            itemId={item.itemId}
            name={item.name}
            amount={item.amount}
            addition={item.addition}
            isSent={item.isSent}
            orderNum={orderNum}
            onFinishItem={() =>
              dispatch(
                updateItemSent({ itemId: item.itemId, orderNum: orderNum })
              )
            }
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.headerTitle}>{title}</Text>
        )}
      />
      <TouchableOpacity
        style={styles.startContainer}
        onPress={() => dispatch(finishOrder(orderId))}
      >
        <Text style={{ color: "white", fontSize: 20, fontWeight: "500" }}>
          Done
        </Text>
      </TouchableOpacity>
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    width: "100%",
    backgroundColor: colors.white,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  detailBox: {
    flexDirection: "row",
  },

  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
  },
  headerTitle: {
    fontSize: 26,
    backgroundColor: "#fff",
    textAlign: "center",
  },
  title: {
    fontSize: 24,
  },
  startContainer: {
    position: "absolute",
    right: 20,
    bottom: 20,
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
    backgroundColor: colors.primary,
  },
  startIcon: {},
});
