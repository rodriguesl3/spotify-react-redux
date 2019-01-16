import {
    combineReducers
} from "redux";
import {
    authentication
} from "./login-reducers";
import {
    userInformation
} from "./main-reducers";
import {
    showSideBar
} from "./sidebar-reducers";

export default combineReducers({
    authentication,
    userInformation,
    showSideBar
});