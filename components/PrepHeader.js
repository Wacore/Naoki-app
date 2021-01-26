import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";

const PrepHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Prep List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    paddingTop: 25,
    backgroundColor: "#fff",
  },
  title: {
    color: "black",
    textAlign: "center",
    fontWeight: "500",
    fontSize: 18,
  },
});

export default PrepHeader;
