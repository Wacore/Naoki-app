import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import PrepListScreen from "../screens/PrepListScreen";
import colors from "../config/colors";
import OrdersStack from "./OrderStack";
import NewOrderButton from "./NewOrderButton";
import NewStack from "./NewStack";
import menuApi from "../API/menu";
import useApi from "../hooks/useApi";
import MenuContext from "../menu/context";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const { request, data, error } = useApi(menuApi.getMenu);
  useEffect(() => {
    request();
  }, []);

  return (
    <NavigationContainer>
      <MenuContext.Provider value={{ data, error, request }}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = "ios-home";
              } else if (route.name === "Add") {
                iconName = focused
                  ? "ios-add-circle"
                  : "ios-add-circle-outline";
              } else if (route.name === "Prep") {
                iconName = focused ? "ios-list-box" : "ios-list";
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: colors.black,
            inactiveTintColor: colors.medium,
          }}
        >
          <Tab.Screen name="Home" component={OrdersStack} />
          <Tab.Screen
            name="Add"
            component={NewStack}
            options={({ navigation }) => ({
              tabBarButton: () => (
                <NewOrderButton onPress={() => navigation.navigate("Add")} />
              ),
            })}
          />
          <Tab.Screen name="Prep" component={PrepListScreen} />
        </Tab.Navigator>
      </MenuContext.Provider>
    </NavigationContainer>
  );
}
