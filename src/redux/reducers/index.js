import { combineReducers } from "redux";
import userReducer from "./userReducer";
import advertiseReducer from "./advertiseReducer";
import teamReducer from "./teamReducer";
import editReducer from "./editReducer";

export default combineReducers({
  user: userReducer,
  advertise: advertiseReducer,
  team: teamReducer,
  editor: editReducer,
});
