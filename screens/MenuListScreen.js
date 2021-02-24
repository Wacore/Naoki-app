import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Button,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import MenuItem from "../components/MenuItem";
import ListItemSeparator from "../components/ListItemSeparator";
import { useSelector } from "react-redux";
import AppText from "../components/AppText";
import { loadMenu } from "../APIFuncs/menuApiFunc";

export default function MenuListScreen({ menuData, navigation }) {
  const menuItemError = useSelector((state) => state.menuItemError);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
      }}
    >
      {menuItemError && (
        <>
          <AppText>Couldn't retrieve the menu.</AppText>
          <Button title="Retry" onPress={loadMenu} />
        </>
      )}
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
