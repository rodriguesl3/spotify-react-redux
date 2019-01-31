/* eslint-disable no-undef */
import {
  isDevelopmentEnvironment,
  isValidUrlHandle,
} from './login-actions';


import {
  requestCredentials,
} from '../../services/credentials';

test('is development environment', () => {
  const window = {
    location: 'http://localhost:5000',
  };

  const url = isDevelopmentEnvironment();
  expect(url).toContain('development=true');
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

jest.mock('../../services/credentials');

test('mocking async request', () => {
  requestCredentials().then(response => expect(response).toHaveProperty(
    'data', 'https://accounts.spotify.com/authorize?client_id=dc6af13b21094058a9b5e104eccee32e&response_type=code&redirect_uri=https://spotifyauth.azurewebsites.net/api/callback?development=true&scope=user-read-private%20user-read-email%20user-follow-read%20user-read-playback-state'
  ));
});
