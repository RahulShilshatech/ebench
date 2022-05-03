import * as TeamServices from "../../services/teamsService";
import * as TeamsActionsTypes from "../actionTypes/teamActionType";

export const importTeam = (params) => async (dispatch) => {
  const resp = await TeamServices.importTeam(params);

  dispatch({
    type: TeamsActionsTypes.IMPORT_TEAM,
    payload: resp?.data,
  });
  return resp?.data;
};

export const getTeams = () => async (dispatch) => {
  const resp = await TeamServices.getTeam();

  dispatch({
    type: TeamsActionsTypes.GET_TEAMS,
    payload: resp?.data,
  });
  return resp?.data;
};
