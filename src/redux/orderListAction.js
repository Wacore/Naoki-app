import * as orderActionType from "./OrderListItem";

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
