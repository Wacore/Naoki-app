import React from "react";
import { StyleSheet, View, Text } from "react-native";

import TabNavigator from "./routes/TabNavigator";
import LoginScreen from "./screens/LoginScreen";
import HomeStack from "./routes/OrderStack";
import Screen from "./components/Screen";
import AppInputFeild from "./components/AppInputFeild";
import AppCounter from "./components/AppCounter";
import OrderItem from "./screens/OrderItem";
import OrderDetailsScreen from "./screens/OrderDetailsScreen";
import { createStore } from "redux";
import { Provider } from "react-redux";
import orderListReducer from "./src/redux/orderListReducer";

const store = createStore(orderListReducer);

export default function App() {
  return (
    <Provider store={store}>
      <TabNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
