import Axios from 'axios';


import {
  isDevelopmentEnvironment,
} from '../redux-flow/actions/login-actions';

export const requestCredentials = () => Axios.get(isDevelopmentEnvironment(window));
