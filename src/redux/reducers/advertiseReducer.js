import * as AdvertiseActionTypes from "../actionTypes/advertiseActionType";

export default (state = {}, action) => {
  switch (action.type) {
    case AdvertiseActionTypes.ADD_ADVERTISE:
      return {
        ...state,
        newAdvertise: action.payload,
      };
    case AdvertiseActionTypes.GET_ADVERTISE:
      return {
        ...state,
        vendorAdvertise: action.payload,
      };
    default:
      return state;
  }
};
