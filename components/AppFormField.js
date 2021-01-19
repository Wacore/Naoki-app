import React from "react";
import { StyleSheet, View } from "react-native";
import { useFormikContext } from "formik";

import AppTextInput from "./AppTextInput";
import ErrorMessage from "./ErrorMessage";

export default function AppFormField({ icon, name, ...otherProps }) {
  const { handleChange, setFieldTouched, touched, errors } = useFormikContext();
  return (
    <View style={styles.container}>
      <AppTextInput
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        appStyle={styles.input}
        icon={icon}
        {...otherProps}
      />

      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginBottom: 15,
  },
  input: {
    marginBottom: 8,
  },
});
