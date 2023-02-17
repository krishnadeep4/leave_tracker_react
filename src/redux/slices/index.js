import { combineReducers } from "redux";
import authslice from "./authslice";

export default combineReducers({
  auth: authslice,
});
