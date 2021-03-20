import Constants from "expo-constants";

const settings = {
  dev: {
    apiURL: "https://naokijc-api.herokuapp.com/",
  },
  staging: {
    apiURL: "https://naokijc-api.herokuapp.com/",
  },
  prod: {
    apiURL: "https://naokijc-api.herokuapp.com/",
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Constants.manifest.releaseChannel === "staging") return settings.staging;
  return settings.prod;
};

export default getCurrentSettings();
