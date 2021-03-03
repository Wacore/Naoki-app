import _ from "lodash";

export default function sortingOrders(orders) {
  let sortedOrders = [
    {
      title: "Appetizer",
      data: _.filter(orders, (o) => {
        return o.menu.type == "appetizer";
      }),
    },
    {
      title: "Dessert",
      data: _.filter(orders, (o) => {
        return o.menu.type == "dessert";
      }),
    },
    {
      title: "Entree",
      data: _.filter(orders, (o) => {
        return o.menu.type == "entree";
      }),
    },
    {
      title: "Ramen Dinner",
      data: _.filter(orders, (o) => {
        return o.menu.type == "ramen dinner";
      }),
    },
    {
      title: "Ramen",
      data: _.filter(orders, (o) => {
        return o.menu.type == "ramen" || o.menu.type == "speical ramen";
      }),
    },
    {
      title: "Sushi Entree",
      data: _.filter(orders, (o) => {
        return o.menu.type == "sushi entree";
      }),
    },
    {
      title: "Sushi Roll",
      data: _.filter(orders, (o) => {
        return (
          o.menu.type == "classic sushi roll" ||
          o.menu.type == "special sushi roll"
        );
      }),
    },
  ];

  return _.filter(sortedOrders, function (o) {
    return o.data.length != 0;
  });
}
