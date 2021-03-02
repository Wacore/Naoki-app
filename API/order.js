import client from "./client";

const endpoint = "/api/order";

const getOrder = () => client.get(endpoint);

const addOrder = (order) => {
  // const data = new FormData();
  // data.append("is_done", order.is_done);

  // if (order.order_info.type == "Dine-in") {
  //   data.append("order_info", {
  //     orderNum: order.order_info.orderNum,
  //     type: order.order_info.type,
  //     peoNum: order.order_info.peoNum,
  //     tableNum: order.order_info.tableNum,
  //   });
  // } else {
  //   data.append("order_info", {
  //     orderNum: order.order_info.orderNum,
  //     type: order.order_info.type,
  //     pickupTime: order.order_info.pickUpTime,
  //   });

  //   data.append("customer_info", {
  //     name: order.customer_info.name,
  //     phoneNum: order.customer_info.phoneNum,
  //   });
  // }

  // order.orderlist.forEach((o) => {
  //   data.append("orderlist", {
  //     amount: o.amount,
  //     desc: o.desc,
  //     isSent: o.isSent,
  //     menu: o.menu,
  //   });
  // });
  return client.post(endpoint, order);
};

export default {
  getOrder,
  addOrder,
};
