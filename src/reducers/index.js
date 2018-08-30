import { combineReducers } from "redux";
import svadaReducer from "./svada";
import viewReducer from "./view";

export default combineReducers({
  svada: svadaReducer,
  view: viewReducer
});
