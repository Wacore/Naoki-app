import orderApi from "../API/order";

export const handleGetOrderApi = async () => {
  const result = await orderApi.getOrder();
  if (!result.ok) return alert("Cannot fetch orders");
  return result;
};

export const factoringOrder = (newOrderlist) => {
  const list = newOrderlist;
  list.map((l) => {
    l.menu = l.menu._id;
    delete l._id;
  });
  return list;
};
