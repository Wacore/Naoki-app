import client from "./client";

const endpoint = "/api/order";

const getOrder = () => client.get(endpoint);

const addOrder = (order) => {
  return client.post(endpoint, order);
};

export default {
  getOrder,
  addOrder,
};
