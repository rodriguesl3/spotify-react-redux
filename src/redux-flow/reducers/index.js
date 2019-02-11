import {
  combineReducers
} from "redux";
import {
  authentication,
} from "./login-reducers";
import userInformation from "./main-reducers";
import {
  showSideBar,
} from "./sidebar-reducers";
import navbarHandle from './navbar-reducers';

export default combineReducers({
  authentication,
  userInformation,
  showSideBar,
  navbarHandle,
});
