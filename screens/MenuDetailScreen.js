import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

import AppButton from "../components/AppButton";
import AppCounter from "../components/AppCounter";
import AppTextInput from "../components/AppTextInput";
import colors from "../config/colors";
import { Formik } from "formik";
import * as Yup from "yup";
import AppFormField from "../components/AppFormField";

export default function MenuDetailScreen({ navigation, route }) {
  const item = route.params;

  const [amount, setAmount] = useState(1);
  const [addition, setAddition] = useState("None");

  const handleSubmit = () => {
    const res = addition
      ? {
          id: item.id,
          amount: amount,
          addition: addition,
        }
      : {
          id: item.id,
          amount: amount,
        };

    res.isSent = false;

    navigation.navigate("Add", res);

    setAmount(1);
    setAddition("None");
  };

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
              counterNum={amount}
              onPressMin={() => setAmount(amount - 1)}
              onPressPlus={() => setAmount(amount + 1)}
            />
          </View>
        </View>
        <View style={styles.textInput}>
          <TextInput
            style={{ height: "100%", width: "100%" }}
            placeholder="PS"
            onChangeText={(text) => setAddition(text)}
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
