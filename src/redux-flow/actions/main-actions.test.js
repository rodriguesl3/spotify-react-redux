/* eslint-disable no-undef */
import {
  selfInformation,
} from '../../constants';

import {
  get,
} from '../../constants/api';

jest.mock('../../constants/api');

test('getting user info', (done) => {
  get(selfInformation).then((response) => {
    expect(response).toHaveProperty('data.email', 'lusk.rs@hotmail.com');
    expect(response).toHaveProperty('status', 200);
  });
  done();
});

test('getting error user info', (done) => {
  get(null).then((response) => {
    expect(response).toHaveProperty('status', 401);
  });
  done();
});
