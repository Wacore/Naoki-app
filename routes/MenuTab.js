import * as React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MenuListScreen from "../screens/MenuListScreen";
import { useDispatch, useSelector } from "react-redux";
const _ = require("lodash");

import appetizersMenu from "../data/appetizersMenu.js";
import dessertMenu from "../data/dessertMenu.js";
import entreeMenu from "../data/entreeMenu.js";
import ramenDinnerMenu from "../data/ramenDinnerMenu.js";
import ramenMenu from "../data/ramenMenu.js";
import sushiEntreeMenu from "../data/sushiEntreeMenu.js";
import sushiRollMenu from "../data/sushiRollMenu.js";
import menuApi from "../API/menu";
import { getMenuItems, setMenuItemError } from "../src/redux/orderListAction";

// let appetizersMenu;
// let dessertMenu;
// let entreeMenu;
// let curryMenu;
// let ramenDinnerMenu;
// let ramenMenu;
// let specialRamenMenu;
// let coldlRamenMenu;
// let sushiEntreeMenu;
// let sushiRollMenu;
// let specialSushiRollMenu;

const dispatch = useDispatch();

const loadMenu = async () => {
  const response = await menuApi.getMenu();
  if (!response.ok) return dispatch(setMenuItemError(true));

  // dispatch(setMenuItemError(true));
  // dispatch(getMenuItems(response.data));

  const menuItems = useSelector((state) => state.menuItems);

  // todo: using lodash to create different kinds of menu
};

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
