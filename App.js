import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet } from "react-native";

import TabNavigator from "./routes/TabNavigator";
import LoginScreen from "./screens/LoginScreen";
import HomeStack from "./routes/OrderStack";
import Screen from "./components/Screen";
import AppInputFeild from "./components/AppInputFeild";
import AppCounter from "./components/AppCounter";
import OrderItem from "./screens/OrderItem";
import OrderDetailsScreen from "./screens/OrderDetailsScreen";

const item = {
  orderNum: 1,
  orders: [
    {
      Price: 4,
      addition: "None",
      amount: 1,
      desc: null,
      id: "a1",
      name: "Edamame",
      type: "appetizers",
    },
    {
      Price: 6,
      addition: "None",
      amount: 1,
      desc: "Panfried pork dumpling. Served with sesame soy vinegar sauce",
      id: "a4",
      name: "Gyoza",
      type: "appetizers",
    },
    {
      id: "e7",
      name: "Sesame Chicken",
      desc: "Tempura fried breast meat with sweet sesame teriyaki sauce",
      Price: 17,
      type: "Entree",
      amount: 1,
      addition: "None",
    },
    {
      id: "rd3",
      name: "Ramen Dinner C",
      desc: "1/2 size ramen, spicy tuna bowl, maui shrimp, & salad",
      Price: 17,
      type: "Ramen Dinner",
      amount: 2,
      addition: "None",
    },
    {
      id: "se8",
      name: "Veggie Dinner",
      desc: "Veggie roll, Inari, & assorted vegetable tempura",
      Price: 16,
      type: "Sushi Entree",
      amount: 1,
      addition: "None",
    },
  ],
  peopleNum: 2,
  tableNum: 2,
  type: true,
};

export default function App() {
  return <TabNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
