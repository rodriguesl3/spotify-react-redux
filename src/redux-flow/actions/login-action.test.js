import {
  isDevelopmentEnvironment,
  isValidUrlHandle,
} from './login-actions';

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
