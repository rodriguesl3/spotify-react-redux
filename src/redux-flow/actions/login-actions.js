import {
  USER_AUTHENTICATION,
  ADD_CREDENTIALS,
  LOGIN_TOKEN,
} from '../../constants';

import {
  requestCredentials,
} from '../../services/credentials';


export const isDevelopmentEnvironment = () => {
  if (window.location.origin.indexOf('localhost') >= 0) {
    return `${LOGIN_TOKEN}?development=true`;
  }
  return LOGIN_TOKEN;
};

export const isValidUrlHandle = (win) => {
  try {
    return win.document.location.origin === window.document.location.origin;
  } catch (error) {
    return false;
  }
};

export const submitCredentials = (credentials, history) => dispatch => requestCredentials()
  .then((response) => {
    const win = window.open(response.data, '', 'location=no,toolbar=0');

    const polTimer = window.setInterval(() => {
      const isValidUrl = isValidUrlHandle(win);

      if (isValidUrl) {
        clearInterval(polTimer);
        const accessToken = win.document.location.pathname.split('=')[1];
        win.close();
        window.sessionStorage.setItem('access_token', accessToken);

        history.push('/main');

        dispatch({
          type: USER_AUTHENTICATION,
          payload: accessToken,
        });
      }
    }, 600);
  });

export const addCredentials = credentials => ({
  type: ADD_CREDENTIALS,
  payload: credentials,
});
