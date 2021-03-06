import * as React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import OrderListingScreen from "../screens/OrderListingScreen";
import OrderDetailsScreen from "../screens/OrderDetailsScreen";
import MenuTab from "./MenuTab";
import MenuDetailScreen from "../screens/MenuDetailScreen";

const Stack = createStackNavigator();

function OrdersStack() {
  return (
    <Stack.Navigator mode="card">
      <Stack.Screen name="Orders" component={OrderListingScreen} />
      <Stack.Screen name="Order" component={OrderDetailsScreen} />
      <Stack.Screen name="Menu" component={MenuTab} />
      <Stack.Screen name="Details" component={MenuDetailScreen} />
    </Stack.Navigator>
  );
}

export default OrdersStack;
