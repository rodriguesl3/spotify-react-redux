import {
  USER_AUTHENTICATION,
  ADD_CREDENTIALS,
  LOGIN_TOKEN,
} from '../../constants';

import {
  requestCredentials,
} from '../../services/credentials';


export const isDevelopmentEnvironment = (window) => {
  if (window.location.origin.indexOf('localhost') >= 0) {
    return `${LOGIN_TOKEN}?development=true`;
  }
  return LOGIN_TOKEN;
};

export const isValidUrlHandle = (win, window) => {
  try {
    return win.document.location.origin === window.document.location.origin;
  } catch (error) {
    return false;
  }
};

export const openWindow = (window, value) => window.open(value, '', 'location=no,toolbar=0');

export const submitCredentials = (credentials, history) => dispatch => requestCredentials()
  .then((response) => {
    const win = openWindow(window, response.data);

    const polTimer = window.setInterval(() => {
      redirectSubmitCredential(win, window, history, dispatch, polTimer);
    }, 600);
  });

export const addCredentials = credentials => ({
  type: ADD_CREDENTIALS,
  payload: credentials,
});

export const redirectSubmitCredential = (win, window, history, dispatch, polTimer) => {
  const isValidUrl = isValidUrlHandle(win, window);
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
  } else {
    history.push('/login');
  }
};
