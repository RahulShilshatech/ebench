import * as EditActionTypes from "../actionTypes/editActionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case EditActionTypes.EDIT_HANDLE:
      return {
        ...state,
        editState: action.payload,
      };
    default:
      return state;
  }
};
