import * as UserActionTypes from "../actionTypes/userActionType";

export default (state = {}, action) => {
  switch (action.type) {
    case UserActionTypes.REGISTER_USER:
      return {
        ...state,
        loginUser: action.payload,
      };
    case UserActionTypes.LOGIN_USER:
      return {
        ...state,
        registerUser: action.payload,
      };
    case UserActionTypes.CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case UserActionTypes.USER_LIST:
      return {
        ...state,
        userList: action.payload,
      };
    case UserActionTypes.VENDOR_LIST:
      return {
        ...state,
        vendorList: action.payload,
      };
    default:
      return state;
  }
};
