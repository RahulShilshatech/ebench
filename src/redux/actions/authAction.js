import * as authService from  "../../services/authServices";
import * as authActionTypes from "../actionTypes/authActionType";

export const userRegisteration = (params) => async (dispatch) => {
    console.log(params)
    const resp = await authService.userSignup(params);
  
    dispatch({
      type: authActionTypes.signUpAction,
      payload: resp?.data,
    });
    console.log(resp)
    return resp?.data;
  };
  
  export const userLogin = (params) => async (dispatch) => {
    console.log(params)
    const resp = await authService.userLogin(params);
  
    dispatch({
      type: authActionTypes.loginActionTypes,
      payload: resp?.data,
    });
    console.log(resp)
    return resp?.data;
  };