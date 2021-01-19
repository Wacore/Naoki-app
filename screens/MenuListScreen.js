import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import MenuItem from "../components/MenuItem";
import ListItemSeparator from "../components/ListItemSeparator";
import AppButton from "../components/AppButton";

export default function MenuListScreen({ menuData, navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
      }}
    >
      <FlatList
        data={menuData}
        keyExtractor={(menuData) => menuData.id.toString()}
        renderItem={({ item }) => (
          <MenuItem
            title={item.name}
            subTitle={item.desc}
            desc={item.Price}
            navigation={navigation}
            onPress={() => navigation.navigate("Details", item)}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "tomato",
  },
});
