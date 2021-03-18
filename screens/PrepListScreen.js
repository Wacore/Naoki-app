import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

import Screen from "../components/Screen";
import PrepHeader from "../components/PrepHeader";
import PrepItem from "../components/PrepItem";
import PrepAddPrep from "../components/PrepAddPrep";

export default function PrepListScreen() {
  const [prepItem, setPrepItem] = useState([]);

  const [completedItem, setCompletedItem] = useState([]);
  const [history, setHistory] = useState(false);

  const handleCompleteItem = (key) => {
    setCompletedItem((prevItems) => {
      let completedItem = prepItem.filter((todo) => todo.key == key);
      return [...prevItems, completedItem[0]];
    });
    setPrepItem((prevItems) => {
      return prevItems.filter((todo) => todo.key != key);
    });
  };

  const handleDeleteItem = (key) => {
    setPrepItem((prevItems) => {
      return prevItems.filter((todo) => todo.key != key);
    });
  };

  const handleAddItem = (task) => {
    setPrepItem((prevItems) => {
      let newKey = prepItem.length + 1;
      return [...prevItems, { text: task, key: newKey }];
    });
  };

  const handleSwitchToCompleted = () => {
    setHistory(true);
  };
  const handleSwitchToTodo = () => {
    setHistory(false);
  };

  return (
    <Screen appStyle={styles.container}>
      <PrepHeader />
      <View style={styles.bar}>
        <TouchableOpacity onPress={handleSwitchToTodo}>
          <Text style={styles.option}>To-do</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSwitchToCompleted}>
          <Text style={styles.option}>Completed</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <PrepAddPrep handleAddItem={handleAddItem} />
        <View style={styles.list}>
          {!history && (
            <FlatList
              data={prepItem}
              keyExtractor={(prepItem) => prepItem.key.toString()}
              renderItem={({ item }) => (
                <PrepItem
                  item={item}
                  handleCompleteItem={handleCompleteItem}
                  handleDeleteItem={handleDeleteItem}
                  isCompleted={false}
                ></PrepItem>
              )}
            />
          )}
          {history && (
            <FlatList
              data={completedItem}
              keyExtractor={(completedItem) => completedItem.key.toString()}
              renderItem={({ item }) => (
                <PrepItem
                  item={item}
                  handleCompleteItem={handleCompleteItem}
                  handleDeleteItem={handleDeleteItem}
                  isCompleted={true}
                ></PrepItem>
              )}
            />
          )}
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  bar: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 25,
    borderTopWidth: 1,
    borderTopColor: "#e1e1e1",
  },
  container: {
    flex: 1,
    backgroundColor: "#eee",
    padding: 0,
    marginTop: 0,
  },
  content: {
    paddingHorizontal: 25,
  },
  list: {
    width: "100%",
  },
  option: {
    color: "dodgerblue",
    fontSize: 16,
    fontWeight: "400",
    padding: 10,
  },
});
