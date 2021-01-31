import * as orderActionType from "./OrderListItem";
const initialState = {
  orderlist: [
    {
      orderNum: 1,
      orders: [
        {
          Price: 5.95,
          addition: "None",
          amount: 1,
          desc: "Fried tofu with tempura sauce",
          id: "a2",
          name: "Age-Tofu",
          type: "appetizers",
        },
      ],
      peopleNum: 1,
      tableNum: 0,
      type: true,
    },
  ],
  type: true,
  peopleNum: 1,
  tableNum: 1,
  name: null,
  phoneNumber: null,
  pickUpTime: null,
  orderItems: [],
};

const orderListReducer = (state = initialState, action) => {
  switch (action.type) {
    case orderActionType.ADD_TO_LIST:
      return {
        ...state,
        orderlist: [
          ...state.orderlist,
          {
            orderNum: action.orderNum,
            orders: action.orderItems,
            peopleNum: action.peopleNum,
            tableNum: action.tableNum,
            type: action.type,
          },
        ],
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

    default:
      return state;
  }
};

export default orderListReducer;
