import React, { useEffect } from "react";
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
} from "../src/redux/orderListAction";
import orderApi from "../API/order";

export default function OrderDetailsScreen({ route, navigation }) {
  const { orderNum, order_id } = route.params;
  const dispatch = useDispatch();

  const orderItems = useSelector((state) => state.orderlist);
  const isEdit = useSelector((state) => state.isEdit);

  const { order_info, orderlist, customer_info } = orderItems.filter(
    (o) => o._id == order_id
  )[0];

  const handleEditOrder = () => {
    dispatch(setEdit(true));
    dispatch(setCurrentOrder(order_id));
  };

  const handleUpdateOrder = async (reduxFunc) => {
    dispatch(reduxFunc());

    const newOrderlist = _.cloneDeep(orderlist);
    const factoredList = factoringOrder(newOrderlist);

    const result = await orderApi.updateOrder(order_id, {
      orderlist: factoredList,
    });
    if (!result.ok) return console.log(result);
    alert("updated");
  };

  useEffect(() => {
    console.log(orderlist);
  }, []);

  const factoringOrder = (newOrderlist) => {
    const list = newOrderlist;
    list.map((l) => {
      l.menu = l.menu._id;
      delete l._id;
    });
    return list;
  };

  let orderListSorted = sortingOrders(orderlist);

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
            <TouchableOpacity
              onPress={() => handleUpdateOrder(() => setEdit(false))}
            >
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
        keyExtractor={(item) => item._id.toString()}
        renderItem={({ item }) => (
          <OrderItem
            itemId={item._id}
            name={item.menu.name}
            amount={item.amount}
            addition={item.desc}
            isSent={item.isSent}
            orderNum={order_id}
            onHandleUpdateOrder={handleUpdateOrder}
            onFinishItem={() =>
              handleUpdateOrder(
                () => updateItemSent({ itemId: item._id, orderNum: order_id }),
                item
              )
            }
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
