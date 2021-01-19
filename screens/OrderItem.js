import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";

import colors from "../config/colors";
import AppText from "../components/AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function OrderItem({ addition, amount, name, onRemoveOrder }) {
  return (
    <View style={styles.detailCon}>
      <View style={styles.infoBox}>
        <View style={styles.conBox}>
          <Text style={{ paddingBottom: 5, fontSize: 18 }}>{name}</Text>
        </View>
        <Text style={styles.amountBox}>{amount}</Text>
        <TouchableWithoutFeedback onPress={onRemoveOrder}>
          <MaterialCommunityIcons
            name="delete"
            size={25}
            color={colors.primary}
            style={{ marginLeft: 20, marginRight: 7 }}
          />
        </TouchableWithoutFeedback>
      </View>
      {addition != "None" && (
        <View style={styles.textInput}>
          <AppText>PS: {addition}</AppText>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  amountBox: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: colors.light,
  },
  conBox: {
    height: 60,
    justifyContent: "center",
    flex: 1,
  },
  descBox: { justifyContent: "center", alignItems: "center" },
  detailCon: {
    width: "100%",
    height: 150,
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 5,
    // backgroundColor: "pink",
    borderColor: colors.sublight,
    borderWidth: 0.3,
    marginBottom: 10,
  },
  infoBox: {
    height: 60,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: colors.sublight,
  },
  textInput: {
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 16,
    borderColor: colors.gray,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: colors.light,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
});
