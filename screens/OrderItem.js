import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TextInput,
} from "react-native";

import colors from "../config/colors";
import AppText from "../components/AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import AppCounter from "../components/AppCounter";
import {
  updateItemAmountPlus,
  updateItemAmountMinus,
  updateItemAddition,
  updateRemoveItem,
} from "../src/redux/orderListAction";

export default function OrderItem({
  addition,
  amount,
  name,
  onFinishItem,
  isSent,
  onRemoveOrder,
  itemId,
  orderNum,
}) {
  const isEdit = useSelector((state) => state.isEdit);

  const dispatch = useDispatch();

  let item = { orderNum: orderNum, itemId: itemId };

  return (
    <View style={isSent ? styles.detailConSent : styles.detailCon}>
      <View style={styles.infoBox}>
        <View style={styles.conBox}>
          <Text style={{ paddingBottom: 5, fontSize: 18 }}>{name}</Text>
        </View>
        {onFinishItem && isEdit ? (
          <AppCounter
            counterNum={amount}
            onPressMin={() => dispatch(updateItemAmountMinus(item))}
            onPressPlus={() => dispatch(updateItemAmountPlus(item))}
          />
        ) : (
          <Text style={styles.amountBox}>{amount}</Text>
        )}

        {onRemoveOrder && (
          <TouchableWithoutFeedback onPress={onRemoveOrder}>
            <MaterialCommunityIcons
              name="delete"
              size={25}
              color={colors.primary}
              style={{ marginLeft: 20, marginRight: 7 }}
            />
          </TouchableWithoutFeedback>
        )}
        {onFinishItem && !isEdit && (
          <TouchableWithoutFeedback onPress={onFinishItem}>
            <MaterialCommunityIcons
              name="send"
              size={25}
              color={colors.primary}
              style={{ marginLeft: 20, marginRight: 7 }}
            />
          </TouchableWithoutFeedback>
        )}
        {onFinishItem && isEdit && (
          <TouchableWithoutFeedback
            onPress={() =>
              dispatch(updateRemoveItem({ orderNum: orderNum, itemId: itemId }))
            }
          >
            <MaterialCommunityIcons
              name="delete"
              size={25}
              color={colors.primary}
              style={{ marginLeft: 20, marginRight: 7 }}
            />
          </TouchableWithoutFeedback>
        )}
      </View>

      {isEdit ? (
        <View style={styles.textInput}>
          <TextInput
            style={{ height: "100%", width: "100%" }}
            placeholder="PS"
            onChangeText={(text) =>
              dispatch(
                updateItemAddition({
                  addition: text,
                  orderNum: orderNum,
                  itemId: itemId,
                })
              )
            }
            value={addition}
          />
        </View>
      ) : (
        addition != "" && (
          <View style={styles.textInput}>
            <AppText>PS: {addition}</AppText>
          </View>
        )
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
  detailConSent: {
    width: "100%",
    height: 150,
    backgroundColor: colors.gray,
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
