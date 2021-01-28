import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import colors from "../config/colors";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function OrderListingScreen({ navigation, route }) {
  const [orders, setOrders] = useState([]);
  const [refreshing, setreFreshing] = useState(false);
  const [currentOrder, setCurrentOrder] = useState({});

  // console.log(route.params);

  const handleDelete = (item) => {
    const newOrders = orders.filter((o) => o.orderNum != item.orderNum);
    setOrders(newOrders);
  };

  const handleAddOrder = (item) => {
    // item.orderNum = orderNum;
    // setOrderNum(orderNum + 1);

    setOrders([...orders, item]);
  };

  React.useEffect(() => {
    let param;
    if (route.params && route.params != currentOrder) {
      param = route.params;
      setCurrentOrder(param);
      handleAddOrder(route.params);
    }
  }, [route.params]);

  console.log(orders);
  return (
    <View style={styles.container}>
      {orders && (
        <FlatList
          data={orders}
          keyExtractor={(orders) => orders.orderNum.toString()}
          renderItem={({ item }) => (
            <ListItem
              orderNum={item.orderNum}
              peopleNum={item.peopleNum}
              type={item.type}
              tableNum={item.tableNum}
              name={item.name}
              onPress={() => navigation.navigate("Order", item)}
              renderRightAction={() => (
                <ListItemDeleteAction onPress={() => handleDelete(item)} />
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
