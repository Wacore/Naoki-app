import React, { useState } from "react";
import { StyleSheet, Text, View, SectionList } from "react-native";

import AppText from "../components/AppText";
import colors from "../config/colors";
import Screen from "../components/Screen";
import _ from "lodash";

import OrderItem from "./OrderItem";
import sortingOrders from "../data/orderSorting";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function OrderDetailsScreen({ route }) {
  const { orderNum, orders, peopleNum, tableNum, type } = route.params;

  const [order, setOrder] = useState({});
  const [toBeEdit, setToBeEdit] = useState(false);

  const handleFinishItem = (orders) => {
    console.log(orders);
  };

  const handleEditOrder = (key) => {
    console.log("eidt");
    saveOrder();
    setToBeEdit(true);
  };

  const handleCompleteEditOrder = (key) => {
    console.log("Done");
    saveOrder();
    setToBeEdit(false);
  };

  const saveOrder = () => {
    let prevOrder = {
      orderNum: orderNum,
      orders: orderList,
      peopleNum: peopleNum,
      tableNum: tableNum,
      type: type,
    };
    setOrder(prevOrder);
  };

  let orderList = sortingOrders(orders);

  return (
    <Screen appStyle={{ backgroundColor: colors.light, padding: 0 }}>
      <View style={styles.header}>
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
            onRemoveOrder={() => handleFinishItem(item)}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.headerTitle}>{title}</Text>
        )}
      />
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
});
