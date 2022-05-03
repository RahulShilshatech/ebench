import * as UserService from "../../services/userService";
import * as UserActionTypes from "../actionTypes/userActionType";

export const userRegisteration = (params) => async (dispatch) => {
  const resp = await UserService.userRegistration(params);

  dispatch({
    type: UserActionTypes.REGISTER_USER,
    payload: resp?.data,
  });
  return resp?.data;
};

export const userLogin = (params) => async (dispatch) => {
  const resp = await UserService.userLogin(params);
  dispatch({
    type: UserActionTypes.LOGIN_USER,
    payload: resp?.data,
  });
  return resp?.data;
};
export const currentUserDetail = (params) => async (dispatch) => {
  const resp = await UserService.getCurrentUser();
  dispatch({
    type: UserActionTypes.CURRENT_USER,
    payload: resp?.data,
  });
  return resp?.data;
};
export const vendorListing = (params) => async (dispatch) => {
  const resp = await UserService.vendorList();
  dispatch({
    type: UserActionTypes.VENDOR_LIST,
    payload: resp?.data,
  });
  return resp?.data;
};
export const userListing = () => async (dispatch) => {
  const resp = await UserService.userList();
  dispatch({
    type: UserActionTypes.USER_LIST,
    payload: resp?.data,
  });
  return resp?.data;
};
