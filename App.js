import React, { useState } from "react";
import { StyleSheet } from "react-native";

import TabNavigator from "./routes/TabNavigator";
import LoginScreen from "./screens/LoginScreen";

import { createStore } from "redux";
import { Provider } from "react-redux";
import orderListReducer from "./src/redux/orderListReducer";
import AuthContext from "./auth/context";
import authStorage from "./auth/storage";
import logger from "./utility/logger";
import { AppLoading } from "expo";

logger.start();

const store = createStore(orderListReducer);

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  if (!isReady)
    return (
      <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} />
    );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {user ? (
        <Provider store={store}>
          <TabNavigator />
        </Provider>
      ) : (
        <LoginScreen />
      )}
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
