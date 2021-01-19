import _ from "lodash";

export default function sortingOrders(orders) {
  let sortedOrders = [
    {
      title: "appetizers",
      data: _.filter(orders, { type: "appetizers" }),
    },
    {
      title: "Dessert",
      data: _.filter(orders, { type: "Dessert" }),
    },
    {
      title: "Entree",
      data: _.filter(orders, { type: "Entree" }),
    },
    {
      title: "Ramen Dinner",
      data: _.filter(orders, { type: "Ramen Dinner" }),
    },
    {
      title: "Ramen",
      data: _.filter(orders, { type: "Ramen" }),
    },
    {
      title: "Sushi Entree",
      data: _.filter(orders, { type: "Sushi Entree" }),
    },
    {
      title: "Sushi Roll",
      data: _.filter(orders, { type: "Sushi Roll" }),
    },
  ];

  return _.filter(sortedOrders, function (o) {
    return o.data.length != 0;
  });
}
