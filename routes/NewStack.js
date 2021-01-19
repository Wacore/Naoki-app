import * as React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import NewOrderScreen from "../screens/NewOrderScreen";
import MenuTab from "./MenuTab";
import MenuDetailScreen from "../screens/MenuDetailScreen";

const Stack = createStackNavigator();

function NewStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Add"
        component={NewOrderScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Menu" component={MenuTab} />
      <Stack.Screen name="Details" component={MenuDetailScreen} />
    </Stack.Navigator>
  );
}

export default NewStack;
