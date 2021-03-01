import storage from "../auth/storage";

const { create } = require("apisauce");
import authStorage from "../auth/storage";

const apiClient = create({
  baseURL: "https://naokijc-api.herokuapp.com/",
});

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();
  if (!authToken) return;

  request.headers["x-auth-token"] = authToken;
});

export default apiClient;
