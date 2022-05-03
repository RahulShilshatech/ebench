import * as AdvertiseService from "../../services/advertiseService";
import * as AdvertiseActionTypes from "../actionTypes/advertiseActionType";

export const addAdvertise = (params) => async (dispatch) => {
  const resp = await AdvertiseService.newAdvertise(params);

  dispatch({
    type: AdvertiseActionTypes.ADD_ADVERTISE,
    payload: resp?.data,
  });
  return resp?.data;
};

export const getAdvertiseList = () => async (dispatch) => {
  const resp = await AdvertiseService.getAdvertise();
  dispatch({
    type: AdvertiseActionTypes.GET_ADVERTISE,
    payload: resp?.data,
  });
  return resp?.data;
};

export const updateAdvertise = (params) => async (dispatch) => {
  const resp = await AdvertiseService.updateAdvertise(params);

  dispatch({
    type: AdvertiseActionTypes.UPDATE_ADVERTISE,
    payload: resp?.data,
  });

  return resp?.data;
};
