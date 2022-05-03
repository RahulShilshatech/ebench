import * as EditActionsTypes from "../actionTypes/editActionTypes";

// eslint-disable-next-line import/prefer-default-export
export const EditState = (name) => (dispatch) => {
  dispatch({
    type: EditActionsTypes.EDIT_HANDLE,
    payload: { edit: name !== null, name },
  });
};
