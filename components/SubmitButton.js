import React from "react";
import { StyleSheet } from "react-native";
import AppButton from "./AppButton";
import { useFormikContext } from "formik";

export default function SubmitButton() {
  const { handleSubmit } = useFormikContext();
  return (
    <AppButton
      title="Login"
      appStyle={{ backgroundColor: "#FF476F" }}
      onPress={handleSubmit}
    />
  );
}

const styles = StyleSheet.create({});
