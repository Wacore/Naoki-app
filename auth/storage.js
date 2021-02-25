import * as SecureStorage from "expo-secure-store";
import jwtDecode from "jwt-decode";

const key = "authToken";

const storeToken = async (authToken) => {
  try {
    await SecureStorage.setItemAsync(key, authToken);
  } catch (ex) {
    console.log("Error storing the auth token", ex);
  }
};

const getToken = async () => {
  try {
    return await SecureStorage.getItemAsync(key);
  } catch (ex) {
    console.log("Error getting the auth token", ex);
  }
};

const getUser = async () => {
  const token = await getToken();
  return token ? jwtDecode(token) : null;
};

const removeToken = async () => {
  try {
    await SecureStorage.deleteItemAsync(key);
  } catch (ex) {
    console.log("Error removing the auth token", ex);
  }
};

export default { storeToken, getUser, removeToken };
