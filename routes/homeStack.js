import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import NewOrderScreen from "../screens/NewOrderScreen";
import OrderListingScreen from "../screens/OrderListingScreen";
import OrderDetailsScreen from "../screens/OrderDetailsScreen";

const screens = {
  Orders: {
    screen: OrderListingScreen,
    // navigationOptions: ({ navigation }) => ({
    //   headerTitle: () => <Header title="Orders" navigation={navigation} />,
    // }),
  },
  Order: {
    screen: OrderDetailsScreen,
    navigationOptions: { title: "Order Details" },
  },
  NewOrder: {
    screen: NewOrderScreen,
    navigationOptions: { title: "New Order" },
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
