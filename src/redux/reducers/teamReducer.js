import * as TeamsActionsTypes from "../actionTypes/teamActionType";

export default (state = {}, action) => {
  switch (action.type) {
    case TeamsActionsTypes.IMPORT_TEAM:
      return {
        ...state,
        importedTeam: action.payload,
      };
    case TeamsActionsTypes.GET_TEAMS:
      return {
        ...state,
        vendorTeam: action.payload,
      };
    default:
      return state;
  }
};
