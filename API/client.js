import authStorage from "../auth/storage";
import settings from "../config/settings";
const { create } = require("apisauce");

const apiClient = create({
  baseURL: settings.apiURL,
});

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();
  if (!authToken) return;

  request.headers["x-auth-token"] = authToken;
});

export default apiClient;
