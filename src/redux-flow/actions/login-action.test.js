import {
  isDevelopmentEnvironment,
} from './login-actions';


test('is development environment', () => {
  const window = {
    location: "localhost:5000"
  };

  const url = isDevelopmentEnvironment();
  expect(url).toContain('development=true');
});