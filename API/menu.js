import client from "./client";

const endpoint = "/api/menu";

const getMenu = () => client.get(endpoint);

export default {
  getMenu,
};
