import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

export default function PrepAddPrep({ handleAddItem }) {
  const [text, setText] = useState("");

  const handleTextChange = (text) => {
    setText(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="new todo..."
        onChangeText={handleTextChange}
        value={text}
      />
      <View style={styles.addField}>
        <TouchableWithoutFeedback
          onPress={() => {
            handleAddItem(text);
            setText("");
          }}
        >
          <Text style={styles.addText}>Add</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: 60,
    marginBottom: 15,
    borderBottomColor: "#f1f1f1",
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 8,
  },
  input: {
    flex: 0.9,
    borderBottomWidth: 2,
    borderBottomColor: "#c1c1c1",
    backgroundColor: "#fff",
    paddingVertical: 18,
    paddingLeft: 8,
    fontSize: 18,
    height: "100%",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  addField: {
    flex: 0.1,
    backgroundColor: colors.primary,
    alignItems: "center",
  },
  addText: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
});
