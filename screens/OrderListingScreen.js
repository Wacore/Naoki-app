import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import colors from "../config/colors";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// const initialOrders = [
//   { orderNum: 1, peopleNum: 4, type: "Dine-in", tableNum: 1 },
//   { orderNum: 2, peopleNum: "none", type: "To-go", tableNum: "none" },
//   { orderNum: 3, peopleNum: 5, type: "Dine-in", tableNum: 8 },
// ];

export default function OrderListingScreen({ navigation, route }) {
  const [orders, setOrders] = useState([]);
  const [refreshing, setreFreshing] = useState(false);
  const [orderNum, setOrderNum] = useState(1);

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
    if (route.params) {
      console.log(route.params);
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
              pickupTime={item.pickupTime}
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
