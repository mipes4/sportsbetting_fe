import { combineReducers } from "redux";
import matches from "./matches/reducer";
import predictions from "./predictions/reducer";

export default combineReducers({
  matches,
  predictions,
});
