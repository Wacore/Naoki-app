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

export default function OrderDetailsScreen({ route }) {
  const { orderNum } = route.params;

  const [order, setOrder] = useState({});
  const [toBeEdit, setToBeEdit] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  const handleFinishItem = (itemId) => {
    if (isStarted) {
      console.log("finished");
      saveOrder();
      let { orders } = order;
      let index = (index = _.findIndex(orders, function (item) {
        return item.id == itemId;
      }));
      let prevOrder = order;
      prevOrder.orders[index].isSent = true;
      setOrder(prevOrder);
    } else {
      alert("Order has not started");
    }
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

  // let orderList = sortingOrders(orders);

  useEffect(() => {
    console.log("effect");
    console.log(route.params);
    // orderList = sortingOrders(order);
  });

  return (
    <Screen appStyle={{ backgroundColor: colors.light, padding: 0 }}>
      {/* <View style={styles.header}>
        {type ? (
          <AppText>Order Number: #{orderNum}</AppText>
        ) : (
          <AppText>To-go</AppText>
        )}
        <AppText>Table: {tableNum}</AppText>
        <AppText>People: {peopleNum}</AppText>
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
        sections={orderList}
        keyExtractor={(item, index) => item.id + index}
        renderItem={({ item }) => (
          <OrderItem
            name={item.name}
            amount={item.amount}
            addition={item.addition}
            isSent={item.isSent}
            onFinishItem={() => handleFinishItem(item.id)}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.headerTitle}>{title}</Text>
        )}
      />
      <TouchableOpacity
        style={styles.startContainer}
        onPress={() => handleStartOrder()}
      >
        <MaterialCommunityIcons
          name="play-circle"
          size={75}
          color={colors.primary}
        />
      </TouchableOpacity> */}
      <View>
        <Text>{orderNum}</Text>
      </View>
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
