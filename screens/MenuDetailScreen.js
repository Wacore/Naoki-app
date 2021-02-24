import React, { useEffect } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import AppButton from "../components/AppButton";
import AppCounter from "../components/AppCounter";
import colors from "../config/colors";
import {
  setSelectedAmountPlus,
  setSelectedAmountMinus,
  setSelectedAddition,
  resetSelectedAddition,
  resetSelectedAmount,
  addOrder,
  updateOrderListAdd,
} from "../src/redux/orderListAction";

export default function MenuDetailScreen({ navigation, route }) {
  const item = route.params;

  const dispatch = useDispatch();

  const { selectedItemAmount, selecteditemAddition } = useSelector(
    (state) => state.selectedItem
  );

  const isEdit = useSelector((state) => state.isEdit);

  const handleSubmit = () => {
    let itemId = Math.floor(100000 + Math.random() * 900000);
    let menuItem = {
      itemId,
      menuItemId: item.id,
      name: item.name,
      amount: selectedItemAmount,
      addition: selecteditemAddition,
      type: item.type,
      isSent: false,
    };
    if (!isEdit) {
      dispatch(addOrder(menuItem));
      navigation.navigate("Add");
    } else {
      dispatch(updateOrderListAdd(menuItem));
      navigation.goBack();
    }
    // console.log(menuItem);
    dispatch(resetSelectedAmount());
    dispatch(resetSelectedAddition());
  };

  useEffect(() => {
    console.log(item);
    return () => {
      console.log("unmounted");
    };
  });

  return (
    <View style={styles.container}>
      <View style={styles.detailCon}>
        <View style={styles.infoBox}>
          <View style={styles.conBox}>
            <Text style={{ paddingBottom: 5, fontSize: 18 }}>{item.name}</Text>
            <Text>{item.desc}</Text>
          </View>
          <View>
            <AppCounter
              counterNum={selectedItemAmount}
              onPressMin={() => dispatch(setSelectedAmountMinus())}
              onPressPlus={() => dispatch(setSelectedAmountPlus())}
            />
          </View>
        </View>
        <View style={styles.textInput}>
          <TextInput
            style={{ height: "100%", width: "100%" }}
            placeholder="PS"
            onChangeText={(text) => dispatch(setSelectedAddition(text))}
          />
        </View>
      </View>
      <View style={styles.buttonField}>
        <AppButton
          title="DONE"
          appStyle={{ backgroundColor: colors.primary }}
          onPress={handleSubmit}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonField: {
    height: "8%",
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  conBox: {
    height: 80,
    justifyContent: "center",
    flex: 1,
  },
  descBox: { justifyContent: "center", alignItems: "center" },
  detailCon: {
    width: "95%",
    height: "90%",
    backgroundColor: colors.white,
    padding: 10,
  },
  infoBox: {
    height: 80,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: colors.sublight,
  },
  title: {
    fontSize: 18,
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

// {
//   <Formik
//     initialValues={{ addition: "" }}
//     onSubmit={() => console.log(values)}
//     validationSchema={Yup.object().shape({
//       addition: Yup.string().optional().min(3).label("addition"),
//     })}
//   >
//     {() => <AppFormField name="addition" placeholder="PS" />}
//   </Formik>
// }
