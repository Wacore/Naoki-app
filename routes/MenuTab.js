import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MenuListScreen from "../screens/MenuListScreen";

import appetizersMenu from "../data/appetizersMenu.js";
import dessertMenu from "../data/dessertMenu.js";
import entreeMenu from "../data/entreeMenu.js";
import ramenDinnerMenu from "../data/ramenDinnerMenu.js";
import ramenMenu from "../data/ramenMenu.js";
import sushiEntreeMenu from "../data/sushiEntreeMenu.js";
import sushiRollMenu from "../data/sushiRollMenu.js";

import MenuDetailScreen from "../screens/MenuDetailScreen";

// const appetizersMenu = appetizersMenu;
// const dessertMenu = dessertMenu;
// const entreeMenu = entreeMenu;
// const ramenDinnerMenu = ramenDinnerMenu;
// const ramenMenu = ramenMenu;
// const sushiEntreeMenu = sushiEntreeMenu;
// const sushiRollMenu = sushiRollMenu;

function AppetizersScreen({ navigation }) {
  return (
    <MenuListScreen
      title="Appetizers"
      menuData={appetizersMenu}
      navigation={navigation}
    />
  );
}

function DessertScreen({ navigation }) {
  return (
    <MenuListScreen
      title="Dessert"
      menuData={dessertMenu}
      navigation={navigation}
    />
  );
}

function EntreeScreen({ navigation }) {
  return (
    <MenuListScreen
      title="Entree"
      menuData={entreeMenu}
      navigation={navigation}
    />
  );
}

function RamenScreen({ navigation }) {
  return (
    <MenuListScreen
      title="Ramen"
      menuData={ramenMenu}
      navigation={navigation}
    />
  );
}

function RamenDinnerScreen({ navigation }) {
  return (
    <MenuListScreen
      title="Ramen Dinner"
      menuData={ramenDinnerMenu}
      navigation={navigation}
    />
  );
}

function SushiEntreeScreen({ navigation }) {
  return (
    <MenuListScreen
      title="Sushi Entree"
      menuData={sushiEntreeMenu}
      navigation={navigation}
    />
  );
}

function SushiRollScreen({ navigation }) {
  return (
    <MenuListScreen
      title="Sushi Roll"
      menuData={sushiRollMenu}
      navigation={navigation}
    />
  );
}

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Appetizers" component={AppetizersScreen} />
      <Tab.Screen name="Sushi Roll" component={SushiRollScreen} />
      <Tab.Screen name="Sushi Entree" component={SushiEntreeScreen} />
      <Tab.Screen name="Entree" component={EntreeScreen} />
      <Tab.Screen name="Ramen" component={RamenScreen} />
      <Tab.Screen name="Ramen Dinner" component={RamenDinnerScreen} />
      <Tab.Screen name="Dessert" component={DessertScreen} />
    </Tab.Navigator>
  );
}
