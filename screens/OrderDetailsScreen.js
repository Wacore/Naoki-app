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
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { updateItemSent } from "../src/redux/orderListAction";

export default function OrderDetailsScreen({ route }) {
  const { orderNum } = route.params;
  const dispatch = useDispatch();
  const stateOrderlist = useSelector((state) => state.orderlist);

  const orderItems = useSelector((state) => state.orderlist);
  const { order_info, orderlist, customer_info } = orderItems.filter(
    (o) => o.order_info.orderNum == orderNum
  )[0];

  // const [order, setOrder] = useState({});
  const [toBeEdit, setToBeEdit] = useState(false);
  // const [isStarted, setIsStarted] = useState(false);

  const handleFinishItem = (itemId) => {
    // if (isStarted) {
    //   console.log("finished");
    //   saveOrder();
    //   let { orders } = order;
    //   let index = (index = _.findIndex(orders, function (item) {
    //     return item.id == itemId;
    //   }));
    //   let prevOrder = order;
    //   prevOrder.orders[index].isSent = true;
    //   setOrder(prevOrder);
    // } else {
    //   alert("Order has not started");
    // }
    console.log(itemId);
  };

  const handleStartOrder = () => {
    saveOrder();
    setIsStarted(true);
  };

  const handleEditOrder = (key) => {
    saveOrder();
    setToBeEdit(true);
  };

  const handleCompleteEditOrder = (key) => {
    saveOrder();
    setToBeEdit(false);
  };

  const saveOrder = () => {
    let prevOrder = {
      orderNum: orderNum,
      orders: orders,
      peopleNum: peopleNum,
      tableNum: tableNum,
      type: type,
    };
    setOrder(prevOrder);
  };

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

        {toBeEdit ? (
          <TouchableOpacity onPress={() => handleCompleteEditOrder(orderNum)}>
            <AppText appStyle={{ color: colors.primary }}>Done</AppText>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => handleEditOrder(orderNum)}>
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
      {/* <TouchableOpacity
        style={styles.startContainer}
        onPress={() => handleStartOrder()}
      >
        <MaterialCommunityIcons
          name="play-circle"
          size={75}
          color={colors.primary}
        />
      </TouchableOpacity> */}
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
    right: 0,
    bottom: 0,
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  startIcon: {},
});
