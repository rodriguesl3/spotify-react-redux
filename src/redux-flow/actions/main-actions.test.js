/* eslint-disable no-undef */
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  selfInformation,
} from '../../constants';

import {
  get,
} from '../../constants/api';

import {
  userInfo,
} from '../../components/main/UserInfo/__mocks__/objectsMocks';

import {
  userInfoResponse,
} from './main-actions';


const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares);


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

test('validating response redirect', () => {
  const store = mockStore({});
  const history = {};

  userInfoResponse(userInfo, store.dispatch, history);
  const actions = store.getActions();
  expect(actions[0]).toHaveProperty('type', 'USER_INFORMATION');
  expect(actions[0]).toHaveProperty('payload');
});

test('validating error response redirect', () => {
  const store = mockStore({});
  const history = {
    push: jest.fn(),
  };
  userInfo.status = 401;

  userInfoResponse(userInfo, store.dispatch, history);
  const actions = store.getActions();
  expect(actions[0]).toBeUndefined();
  expect(history.push).toBeCalledWith('/login');
});
