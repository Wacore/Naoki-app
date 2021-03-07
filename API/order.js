import client from "./client";

const endpoint = "/api/order";

const getOrder = () => client.get(endpoint);

const addOrder = (order) => {
  return client.post(endpoint, order);
};

const updateOrder = (id, orderlist) => {
  let newEndpoint = `${endpoint}/${id}`;
  return client.put(newEndpoint, orderlist);
};

const updateOrderAddItem = (id, item) => {
  let newEndpoint = `${endpoint}/${id}/add`;
  return client.put(newEndpoint, item);
};

const removeOrder = (id) => {
  let newEndpoint = `${endpoint}/${id}`;
  return client.delete(newEndpoint);
};

export default {
  getOrder,
  addOrder,
  updateOrder,
  updateOrderAddItem,
  removeOrder,
};
