import * as orderActionType from "./OrderListItem";
const _ = require("lodash");

const initialState = {
  orderlist: [],
  orderNum: 1,
  type: true,
  peopleNum: 1,
  tableNum: 1,
  name: null,
  phoneNumber: null,
  pickUpTime: null,
  isEdit: false,
  currentOrderNum: null,
  orderItems: [],
  selectedItem: {
    selectedItemAmount: 1,
    selecteditemAddition: "",
  },
  menuItems: null,
  menuItemError: false,
};

let newArray, orderIndex, itemIndex;

const getOrderIndex = (newArray, orderNum) => {
  return _.findIndex(newArray, function (o) {
    return o.order_info.orderNum == orderNum;
  });
};

const getItemIndex = (newArray, orderIndex, itemId) => {
  return _.findIndex(newArray[orderIndex].orderlist, function (i) {
    return i.itemId == itemId;
  });
};

const orderListReducer = (state = initialState, action) => {
  switch (action.type) {
    case orderActionType.ADD_TO_ORDER:
      return {
        ...state,
        orderItems: [
          ...state.orderItems,
          {
            addition: action.payload.addition,
            amount: action.payload.amount,
            itemId: action.payload.itemId,
            menuItemId: action.payload.menuItemId,
            name: action.payload.name,
            type: action.payload.type,
            isSent: action.payload.isSent,
          },
        ],
      };

    case orderActionType.REMOVE_FROM_ORDER:
      return {
        ...state,
        orderItems: state.orderItems.filter(
          (item) => item.itemId !== action.payload
        ),
      };

    case orderActionType.SET_FINISH_ORDER:
      console.log(action.payload);
      newArray = state.orderlist;
      // newArray.map((o) =>
      //   o.orderId == action.payload ? { ...o, is_done: true } : o
      // );
      let index = _.findIndex(newArray, { orderId: action.payload });
      newArray[index].is_done = true;
      alert("Done");
      return { ...state, orderlist: newArray };

    case orderActionType.RESET_ORDER:
      return {
        ...state,
        type: true,
        peopleNum: 1,
        tableNum: 1,
        name: null,
        phoneNumber: null,
        pickUpTime: null,
        orderItems: [],
      };

    case orderActionType.ADD_TO_LIST:
      return {
        ...state,
        orderlist: action.payload,
      };

    // const { is_done, order_info, orderlist } = action.payload;
    // if (order_info.type == "Dine-in") {
    //   return {
    //     ...state,
    //     orderlist: [
    //       ...state.orderlist,
    //       {
    //         orderId: action.payload.orderId,
    //         is_done: is_done,
    //         order_info: {
    //           orderNum: order_info.orderNum,
    //           peoNum: order_info.peoNum,
    //           tableNum: order_info.tableNum,
    //           type: "Dine-in",
    //         },
    //         orderlist: orderlist,
    //       },
    //     ],
    //   };
    // } else {
    //   const { customer_info } = action.payload;
    //   return {
    //     ...state,
    //     orderlist: [
    //       ...state.orderlist,
    //       {
    //         customer_info: {
    //           name: customer_info.name,
    //           phoneNum: customer_info.phoneNum,
    //         },
    //         is_done: is_done,
    //         order_info: {
    //           orderNum: order_info.orderNum,
    //           pickupTime: parseInt(order_info.pickupTime),
    //           type: "To-go",
    //         },
    //         orderlist: orderlist,
    //       },
    //     ],
    //   };
    // }

    case orderActionType.REMOVE_FROM_LIST:
      return {
        ...state,
        orderlist: state.orderlist.filter(
          (order) => order.orderId !== action.payload
        ),
      };

    case orderActionType.UPDATE_SENT_ITEM:
      newArray = [...state.orderlist];

      orderIndex = _.findIndex(newArray, function (o) {
        return o.order_info.orderNum == action.payload.orderNum;
      });
      itemIndex = _.findIndex(newArray[orderIndex].orderlist, function (i) {
        return i.itemId == action.payload.itemId;
      });
      newArray[orderIndex].orderlist[itemIndex].isSent = true;
      return {
        ...state,
        orderlist: newArray,
      };

    case orderActionType.UPDATE_AMOUNT_PLUS:
      newArray = [...state.orderlist];

      orderIndex = getOrderIndex(newArray, action.payload.orderNum);
      itemIndex = getItemIndex(newArray, orderIndex, action.payload.itemId);

      newArray[orderIndex].orderlist[itemIndex].amount += 1;

      return {
        ...state,
        orderlist: newArray,
      };

    case orderActionType.UPDATE_AMOUNT_MINUS:
      newArray = [...state.orderlist];

      orderIndex = getOrderIndex(newArray, action.payload.orderNum);
      itemIndex = getItemIndex(newArray, orderIndex, action.payload.itemId);

      newArray[orderIndex].orderlist[itemIndex].amount -= 1;

      return {
        ...state,
        orderlist: newArray,
      };

    case orderActionType.UPDATE_ORDER_LIST:
      newArray = [...state.orderlist];

      orderIndex = getOrderIndex(newArray, state.currentOrderNum);
      newArray[orderIndex].orderlist.push(action.payload);
      return {
        ...state,
        orderlist: newArray,
      };

    case orderActionType.UPDATE_ADDITION:
      newArray = [...state.orderlist];

      orderIndex = getOrderIndex(newArray, action.payload.orderNum);
      itemIndex = getItemIndex(newArray, orderIndex, action.payload.itemId);

      newArray[orderIndex].orderlist[itemIndex].desc = action.payload.addition;
      return {
        ...state,
        orderlist: newArray,
      };

    case orderActionType.UPDATE_ITEM_REMOVE:
      newArray = [...state.orderlist];

      orderIndex = getOrderIndex(newArray, action.payload.orderNum);
      itemIndex = getItemIndex(newArray, orderIndex, action.payload.itemId);
      // _(newArray[orderIndex].orderlist).slice(itemIndex, 1).value();
      newArray[orderIndex].orderlist.splice(itemIndex, 1);
      return {
        ...state,
        orderlist: newArray,
      };

    case orderActionType.SET_ORDER_NUM:
      return {
        ...state,
        orderNum: state.orderNum + 1,
      };

    case orderActionType.SET_TYPE:
      return {
        ...state,
        type: !state.type,
      };

    case orderActionType.SET_PEOPLE_NUM:
      return {
        ...state,
        peopleNum: action.payload,
      };

    case orderActionType.SET_TABLE_NUM:
      return {
        ...state,
        tableNum: action.payload,
      };

    case orderActionType.SET_NAME:
      return {
        ...state,
        name: action.payload,
      };

    case orderActionType.SET_PHONE_NUM:
      return {
        ...state,
        phoneNumber: action.payload,
      };

    case orderActionType.SET_PICKUP_TIME:
      return {
        ...state,
        pickUpTime: action.payload,
      };

    case orderActionType.SET_EDIT:
      return {
        ...state,
        isEdit: action.payload,
      };

    case orderActionType.SET_CURRENT_ORDER_NUM:
      return {
        ...state,
        currentOrderNum: action.payload,
      };

    case orderActionType.SET_SELECTED_AMOUNT_PLUS:
      return {
        ...state,
        selectedItem: {
          ...state.selectedItem,
          selectedItemAmount: state.selectedItem.selectedItemAmount + 1,
        },
      };

    case orderActionType.SET_SELECTED_AMOUNT_MINUS:
      return {
        ...state,
        selectedItem: {
          ...state.selectedItem,
          selectedItemAmount: state.selectedItem.selectedItemAmount - 1,
        },
      };

    case orderActionType.SET_SELECTED_ADDITION:
      return {
        ...state,
        selectedItem: {
          ...state.selectedItem,
          selecteditemAddition: action.payload,
        },
      };

    case orderActionType.RESET_SELECTED_AMOUNT:
      return {
        ...state,
        selectedItem: {
          ...state.selectedItem,
          selectedItemAmount: 1,
        },
      };

    case orderActionType.RESET_SELECTED_ADDITION:
      return {
        ...state,
        selectedItem: {
          ...state.selectedItem,
          selecteditemAddition: "",
        },
      };

    // Menu items

    case orderActionType.GET_MENU_ITEMS:
      return {
        ...state,
        menuItems: action.payload,
      };

    default:
      return state;
  }
};

export default orderListReducer;
