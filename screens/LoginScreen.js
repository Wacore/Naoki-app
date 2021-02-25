import React, { useContext, useState } from "react";
import { StyleSheet, View } from "react-native";

import AppFormField from "../components/AppFormField";
import Screen from "../components/Screen";
import { Formik } from "formik";
import * as Yup from "yup";
import SubmitButton from "../components/SubmitButton";
import ErrorMessage from "../components/ErrorMessage";
import colors from "../config/colors";

import authApi from "../API/auth";
import useAuth from "../auth/useAuth";

export default function LoginScreen() {
  const [loginFatal, setLoginFatal] = useState(false);
  const { logIn } = useAuth();

  const handleSubmit = async ({ username, password }) => {
    const result = await authApi.login(username, password);
    if (!result.ok) return setLoginFatal(true);
    setLoginFatal(false);
    logIn(result.data);
  };

  return (
    <Screen appStyle={styles.screen}>
      {
        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={Yup.object().shape({
            username: Yup.string().required().min(3).label("Username"),
            password: Yup.string().required().min(8).label("Password"),
          })}
        >
          {() => (
            <View style={styles.container}>
              <ErrorMessage
                error="Invalid email and/or password."
                visible={loginFatal}
              />
              <AppFormField
                name="username"
                placeholder="Usrename"
                keyboardType="default"
              />

              <AppFormField
                name="password"
                placeholder="Password"
                secureTextEntry
                keyboardType="default"
              />

              <SubmitButton />
            </View>
          )}
        </Formik>
      }
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  container: {
    paddingHorizontal: 20,
    height: "25%",
    width: "100%",
    justifyContent: "center",
    marginTop: "55%",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.gray,
    backgroundColor: "rgba(245, 245, 245, 0.5)",
  },
});
