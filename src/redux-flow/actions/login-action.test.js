/* eslint-disable no-undef */
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  LOGIN_TOKEN,
} from '../../constants';

import {
  isDevelopmentEnvironment,
  isValidUrlHandle,
  redirectSubmitCredential,
} from './login-actions';


import {
  requestCredentials,
} from '../../services/credentials';


const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares);
jest.mock('../../services/credentials');

test('is development environment', () => {
  const window = {
    location: {
      origin: 'http://localhost:5000',
    },
  };

  const url = isDevelopmentEnvironment(window);
  expect(url).toContain('development=true');
});


test('is not development environment', () => {

  const window = {
    location: {
      origin: 'http://azure.windows.com:5000',
    },
  };

  const url = isDevelopmentEnvironment(window);
  expect(url).toEqual(LOGIN_TOKEN);
});


test('is valid url', () => {
  const win = {
    document: {
      location: {
        origin: 'http://localhost',
      },
    },
  };
  const window = {
    document: {
      location: {
        origin: 'http://localhost',
      },
    },
  };
  const isValid = isValidUrlHandle(win, window);
  expect(isValid).toBeTruthy();
});

test('is not valid url', () => {
  const win = null;
  const window = {};
  const isValid = isValidUrlHandle(win, window);
  expect(isValid).toBeFalsy();
});


test('mocking async request', (done) => {
  requestCredentials().then((response) => {
    expect(response).toHaveProperty(
      'data', 'https://accounts.spotify.com/authorize?client_id=dc6af13b21094058a9b5e104eccee32e&response_type=code&redirect_uri=https://spotifyauth.azurewebsites.net/api/callback?development=true&scope=user-read-private%20user-read-email%20user-follow-read%20user-read-playback-state'
    );
    expect(response).toHaveProperty('statusText', 'OKe');
  });
  done();
});


test('redirect Credentials', () => {
  const store = mockStore({});
  const history = {
    push: jest.fn(),
  };
  const win = {
    close: jest.fn(),
    sessionStorage: {
      setItem: jest.fn(),
    },
    document: {
      location: {
        origin: 'http://localhost:5000?session=123123123',
        pathname: 'http://localhost:5000?session=123123123',
      },
    },
  };
  const window = {
    close: jest.fn(),
    sessionStorage: {
      setItem: jest.fn(),
    },
    document: {
      location: {
        origin: 'http://localhost:5000?session=123123123',
        pathname: 'http://localhost:5000?session=123123123',
      },
    },
  };
  const polTimer = setTimeout(jest.fn(), 5);

  redirectSubmitCredential(win, window, history, store.dispatch, polTimer);
  const actions = store.getActions();

  expect(actions[0]).toHaveProperty('type', 'USER_AUTHENTICATION');
  expect(actions[0]).toHaveProperty('payload');
  expect(history.push).toBeCalledWith('/main');
  expect(win.close).toBeCalled();
  expect(window.sessionStorage.setItem).toBeCalledWith('access_token', '123123123');
});