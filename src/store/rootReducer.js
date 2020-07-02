import { combineReducers } from "redux";
import matches from "./matches/reducer";
import predictions from "./matches/reducer";

export default combineReducers({
  matches,
  predictions,
});
