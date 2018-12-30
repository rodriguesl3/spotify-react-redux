import { combineReducers } from "redux";
import { authentication } from "./login-reducers";
import { welcome } from "./welcome-reducers";

export default combineReducers({authentication, welcome});