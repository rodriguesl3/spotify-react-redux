import Axios from 'axios';


import {
  isDevelopmentEnvironment,
  isValidUrlHandle,
} from '../redux-flow/actions/login-actions';

export const requestCredentials = () => Axios.get(isDevelopmentEnvironment());