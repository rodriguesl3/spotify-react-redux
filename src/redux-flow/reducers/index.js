import { combineReducers } from "redux";
import { authentication } from "./login-reducers";
import { userInformation } from "./main-reducers";

export default combineReducers({authentication, userInformation});