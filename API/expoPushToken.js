import client from "./client";

const endpoint = "/user";

const register = (obj) => {
  client.put(endpoint, obj);
};

export default {
  register,
};
