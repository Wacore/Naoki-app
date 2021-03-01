import _ from "lodash";

export default function sortingOrders(orders) {
  let sortedOrders = [
    {
      title: "Appetizer",
      data: _.filter(orders, { type: "appetizer" }),
    },
    {
      title: "Dessert",
      data: _.filter(orders, { type: "dessert" }),
    },
    {
      title: "Entree",
      data: _.filter(orders, { type: "entree" }),
    },
    {
      title: "Ramen Dinner",
      data: _.filter(orders, { type: "ramen dinner" }),
    },
    {
      title: "Ramen",
      data: _.filter(orders, { type: "ramen" }),
    },
    {
      title: "Sushi Entree",
      data: _.filter(orders, { type: "sushi entree" }),
    },
    {
      title: "Sushi Roll",
      data: _.filter(orders, { type: "classic sushi roll" }),
    },
  ];

  return _.filter(sortedOrders, function (o) {
    return o.data.length != 0;
  });
}
