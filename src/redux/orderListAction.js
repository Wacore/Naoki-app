import * as orderActionType from "./OrderListItem";

export const setOrderNum = () => {
  return {
    type: orderActionType.SET_ORDER_NUM,
  };
};

export const setType = () => {
  return {
    type: orderActionType.SET_TYPE,
  };
};

export const setPeopleNum = (peopleNum) => {
  return {
    type: orderActionType.SET_PEOPLE_NUM,
    payload: peopleNum,
  };
};

export const setTableNum = (tableNum) => {
  return {
    type: orderActionType.SET_TABLE_NUM,
    payload: tableNum,
  };
};

export const setName = (name) => {
  return {
    type: orderActionType.SET_NAME,
    payload: name,
  };
};

export const setPhoneNum = (phoneNum) => {
  return {
    type: orderActionType.SET_PHONE_NUM,
    payload: phoneNum,
  };
};

export const setPickUpTime = (pickUpTime) => {
  return {
    type: orderActionType.SET_PICKUP_TIME,
    payload: pickUpTime,
  };
};

export const setEdit = (item) => {
  return {
    type: orderActionType.SET_EDIT,
    payload: item,
  };
};

export const setCurrentOrder = (item) => {
  return {
    type: orderActionType.SET_CURRENT_ORDER_NUM,
    payload: item,
  };
};

export const addOrder = (item) => {
  return {
    type: orderActionType.ADD_TO_ORDER,
    payload: item,
  };
};

export const addList = (item) => {
  return {
    type: orderActionType.ADD_TO_LIST,
    payload: item,
  };
};

export const removeOrderFromList = (item) => {
  return {
    type: orderActionType.REMOVE_FROM_LIST,
    payload: item,
  };
};

export const finishOrder = (item) => {
  return {
    type: orderActionType.SET_FINISH_ORDER,
    payload: item,
  };
};

export const resetOrder = () => {
  return {
    type: orderActionType.RESET_ORDER,
  };
};

export const removeOrder = (id) => {
  return {
    type: orderActionType.REMOVE_FROM_ORDER,
    payload: id,
  };
};

export const setSelectedId = (id) => {
  return {
    type: orderActionType.SET_SELECTED_ID,
    payload: id,
  };
};

export const setSelectedAmountPlus = () => {
  return {
    type: orderActionType.SET_SELECTED_AMOUNT_PLUS,
  };
};

export const setSelectedAmountMinus = () => {
  return {
    type: orderActionType.SET_SELECTED_AMOUNT_MINUS,
  };
};

export const setSelectedAddition = (addition) => {
  return {
    type: orderActionType.SET_SELECTED_ADDITION,
    payload: addition,
  };
};

export const resetSelectedAmount = () => {
  return {
    type: orderActionType.RESET_SELECTED_AMOUNT,
  };
};

export const resetSelectedAddition = () => {
  return {
    type: orderActionType.RESET_SELECTED_ADDITION,
  };
};

export const updateItemSent = (item) => {
  return {
    type: orderActionType.UPDATE_SENT_ITEM,
    payload: item,
  };
};

export const updateItemAmountPlus = (item) => {
  return {
    type: orderActionType.UPDATE_AMOUNT_PLUS,
    payload: item,
  };
};

export const updateItemAmountMinus = (item) => {
  return {
    type: orderActionType.UPDATE_AMOUNT_MINUS,
    payload: item,
  };
};

export const updateOrderListAdd = (item) => {
  return {
    type: orderActionType.UPDATE_ORDER_LIST,
    payload: item,
  };
};

export const updateItemAddition = (item) => {
  return {
    type: orderActionType.UPDATE_ADDITION,
    payload: item,
  };
};
