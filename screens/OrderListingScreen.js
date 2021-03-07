import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";

import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import { useSelector, useDispatch } from "react-redux";
import {
  addList,
  removeOrderFromList,
  setEdit,
} from "../src/redux/orderListAction";
import orderApi from "../API/order";
import { useFocusEffect } from "@react-navigation/native";
import ListItemDoneAction from "../components/ListItemDoneAction";
import { factoringOrder } from "../APIFuncs/orderApiFuncs";
import _ from "lodash";

export default function OrderListingScreen({ navigation, route }) {
  const [refreshing, setreFreshing] = useState(false);

  const orderlist = useSelector((state) => state.orderlist);
  const dispatch = useDispatch();

  useEffect(() => {
    handleGetOrderApi();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      handleGetOrderApi();
      dispatch(setEdit(false));
    }, [])
  );

  const handleGetOrderApi = async () => {
    const result = await orderApi.getOrder();
    if (!result.ok) return alert("Cannot fetch orders");
    dispatch(addList(result.data));
  };

  const handleDeleteOrder = async (id) => {
    dispatch(removeOrderFromList(id));
    const result = await orderApi.removeOrder(id);
    if (!result.ok) return console.log(result);
  };

  const handleFinishOrder = async (id, orderlist) => {
    dispatch(removeOrderFromList(id));
    const newOrderlist = _.cloneDeep(orderlist);
    const factoredList = factoringOrder(newOrderlist);
    const result = await orderApi.updateOrder(id, {
      orderlist: factoredList,
      is_done: true,
    });
    if (!result.ok) return console.log(result);
  };

  return (
    <View style={styles.container}>
      {orderlist && (
        <FlatList
          data={orderlist}
          keyExtractor={(orderlist) => orderlist._id.toString()}
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
                  order_id: item._id,
                })
              }
              renderLeftAction={() => (
                <ListItemDeleteAction
                  onPress={() => handleDeleteOrder(item._id)}
                />
              )}
              renderRightAction={() => (
                <ListItemDoneAction
                  onPress={() => handleFinishOrder(item._id, item.orderlist)}
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
