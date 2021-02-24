const { create } = require("apisauce");

const apiClient = create({
  baseURL: "https://naokijc-api.herokuapp.com/",
});

export default apiClient;
