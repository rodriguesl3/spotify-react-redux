/* eslint-disable no-undef */
import {
  LOGIN_TOKEN,
} from '../../constants';

import {
  isDevelopmentEnvironment,
  isValidUrlHandle,
} from './login-actions';


import {
  requestCredentials,
} from '../../services/credentials';

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
  const isValid = isValidUrlHandle(win);
  expect(isValid).toBeTruthy();
});

test('is not valid url', () => {
  const win = null;
  const isValid = isValidUrlHandle(win);
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