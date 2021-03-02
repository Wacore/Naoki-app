import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";

import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import { useSelector, useDispatch } from "react-redux";
import { removeOrderFromList } from "../src/redux/orderListAction";
import useApi from "../hooks/useApi";
import orderApi from "../API/order";

export default function OrderListingScreen({ navigation, route }) {
  const [refreshing, setreFreshing] = useState(false);

  const orderlist = useSelector((state) => state.orderlist);
  const dispatch = useDispatch();

  const getOrderAPI = useApi(orderApi.getOrder);

  useEffect(() => {
    getOrderAPI.request();
  }, []);

  console.log("orderlist from API");
  console.log(getOrderAPI.data);

  return (
    <View style={styles.container}>
      {orderlist && (
        <FlatList
          data={orderlist}
          keyExtractor={(orderlist) => orderlist.order_info.orderNum.toString()}
          renderItem={({ item }) => (
            <ListItem
              orderNum={item.order_info.orderNum}
              peopleNum={item.order_info.peoNum}
              type={item.order_info.type}
              tableNum={item.order_info.tableNum}
              name={
                item.order_info.type == "To-go" ? item.customer_info.name : null
              }
              pickupTime={
                item.order_info.type == "To-go"
                  ? item.order_info.pickupTime
                  : null
              }
              onPress={() =>
                navigation.navigate("Order", {
                  orderNum: item.order_info.orderNum,
                })
              }
              renderRightAction={() => (
                <ListItemDeleteAction
                  onPress={() => dispatch(removeOrderFromList(item.orderId))}
                />
              )}
            />
          )}
          ItemSeparatorComponent={() => <ListItemSeparator />}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1 } });
