import React, { useContext } from "react";
import { StyleSheet, View, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import MenuItem from "../components/MenuItem";
import ListItemSeparator from "../components/ListItemSeparator";
import AppText from "../components/AppText";
import MenuContext from "../menu/context";
import _ from "lodash";

export default function MenuListScreen({ title, navigation }) {
  const { data, error, request } = useContext(MenuContext);
  const mData = _.filter(data, { type: title });
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
      }}
    >
      {error && (
        <>
          <AppText>Couldn't retrieve the menu.</AppText>
          <Button title="Retry" onPress={request} />
        </>
      )}
      <FlatList
        data={mData}
        keyExtractor={(mData) => mData._id}
        renderItem={({ item }) => (
          <MenuItem
            title={item.name}
            subTitle={item.desc}
            desc={item.price}
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
