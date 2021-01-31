import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import { useSelector } from "react-redux";

export default function OrderListingScreen({ navigation, route }) {
  const [orders, setOrders] = useState([]);
  const [refreshing, setreFreshing] = useState(false);
  const [currentOrder, setCurrentOrder] = useState({});

  const orderlist = useSelector((state) => state.orderlist);
  const type = useSelector((state) => state.type);

  console.log(orderlist);
  console.log(type);

  const handleDelete = (item) => {
    const newOrders = orders.filter((o) => o.orderNum != item.orderNum);
    setOrders(newOrders);
  };

  const handleAddOrder = (item) => {
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
          data={orderlist}
          keyExtractor={(orderlist) => orderlist.orderNum.toString()}
          renderItem={({ item }) => (
            <ListItem
              orderNum={item.orderNum}
              peopleNum={item.peopleNum}
              type={item.type}
              tableNum={item.tableNum}
              name={item.name}
              pickupTime={item.pickupTime}
              onPress={() =>
                navigation.navigate("Order", {
                  orderNum: item.orderNum,
                })
              }
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
