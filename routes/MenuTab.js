import React, { useState, useEffect } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MenuListScreen from "../screens/MenuListScreen";

import appetizersMenu from "../data/appetizersMenu.js";
import dessertMenu from "../data/dessertMenu.js";
import entreeMenu from "../data/entreeMenu.js";
import ramenDinnerMenu from "../data/ramenDinnerMenu.js";
import ramenMenu from "../data/ramenMenu.js";
import sushiEntreeMenu from "../data/sushiEntreeMenu.js";
import sushiRollMenu from "../data/sushiRollMenu.js";
import menuApi from "../API/menu";
import useApi from "../hooks/useApi";
import MenuContext from "../menu/context";

function AppetizersScreen({ navigation }) {
  return (
    <MenuListScreen
      title="appetizer"
      menuData={appetizersMenu}
      navigation={navigation}
    />
  );
}

function DessertScreen({ navigation }) {
  return (
    <MenuListScreen
      title="dessert"
      menuData={dessertMenu}
      navigation={navigation}
    />
  );
}

function EntreeScreen({ navigation }) {
  return (
    <MenuListScreen
      title="entree"
      menuData={entreeMenu}
      navigation={navigation}
    />
  );
}

function RamenScreen({ navigation }) {
  return (
    <MenuListScreen
      title="ramen"
      menuData={ramenMenu}
      navigation={navigation}
    />
  );
}

function RamenDinnerScreen({ navigation }) {
  return (
    <MenuListScreen
      title="ramen dinner"
      menuData={ramenDinnerMenu}
      navigation={navigation}
    />
  );
}

function SushiEntreeScreen({ navigation }) {
  return (
    <MenuListScreen
      title="sushi entree"
      menuData={sushiEntreeMenu}
      navigation={navigation}
    />
  );
}

function SushiRollScreen({ navigation }) {
  return (
    <MenuListScreen
      title="classic sushi roll"
      menuData={sushiRollMenu}
      navigation={navigation}
    />
  );
}

const Tab = createMaterialTopTabNavigator();

export default function App() {
  const { request, data, error } = useApi(menuApi.getMenu);
  useEffect(() => {
    request();
  }, []);

  return (
    <MenuContext.Provider value={{ data, error, request }}>
      <Tab.Navigator>
        <Tab.Screen name="Appetizers" component={AppetizersScreen} />
        <Tab.Screen name="Sushi Roll" component={SushiRollScreen} />
        <Tab.Screen name="Sushi Entree" component={SushiEntreeScreen} />
        <Tab.Screen name="Entree" component={EntreeScreen} />
        <Tab.Screen name="Ramen" component={RamenScreen} />
        <Tab.Screen name="Ramen Dinner" component={RamenDinnerScreen} />
        <Tab.Screen name="Dessert" component={DessertScreen} />
      </Tab.Navigator>
    </MenuContext.Provider>
  );
}
