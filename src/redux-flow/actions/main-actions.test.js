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
  userListening,
  followingArtists,
} from '../../components/main/UserInfo/__mocks__/objectsMocks';

import {
  userInfoResponse,
  getUserInfo,
  dispatchUserListNow,
  dispatchFollowinArtists,
  validateError,
} from './main-actions';


const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares);


jest.mock('../../constants/api');

describe('User Info', () => {
  test('getting user info', (done) => {
    get(selfInformation).then((response) => {
      expect(response).toHaveProperty('data.email', 'lusk.rs@hotmail.com');
      expect(response).toHaveProperty('status', 200);
    });
    done();
  });

  test('getting whole function', () => {
    const history = {
      push: jest.fn(),
    };

    const result = getUserInfo(history);
    expect(result).toBeInstanceOf(Object);
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
});

describe('User Listen Now', () => {
  test('getting user listen now', () => {
    const store = mockStore({});
    dispatchUserListNow(userListening, store.dispatch);
    const actions = store.getActions();
    expect(actions[0]).toHaveProperty('type', 'USER_LISTENING');
    expect(actions[0].payload).toEqual(userListening.data);
  });

  test('not getting user listen now', () => {
    const store = mockStore({});
    userListening.status = 401;
    dispatchUserListNow(userListening, store.dispatch);
    const actions = store.getActions();
    expect(actions[0]).toBeUndefined();
    expect(actions.length).toEqual(0);
  });
});

describe('Following artists', () => {
  test('getting following artists', () => {
    const store = mockStore({});
    dispatchFollowinArtists(followingArtists, store.dispatch);
    const actions = store.getActions();
    expect(actions[0]).toHaveProperty('type', 'ARTIST_FOLLOWED');
    expect(actions[0].payload).toEqual(followingArtists.data);
  });

  test('not getting following artists', () => {
    const store = mockStore({});
    followingArtists.status = 401;

    dispatchFollowinArtists(followingArtists, store.dispatch);
    const actions = store.getActions();
    expect(actions[0]).toBeUndefined();
  });
});

test('forbidden access getUserInfo', () => {
  const history = {
    push: jest.fn(),
  };
  const error = {
    response: {
      status: 401,
    },
  };

  validateError(error, history);
  expect(history.push).toBeCalledWith('/login');
});


test('generic error access getUserInfo', () => {
  const history = {
    push: jest.fn(),
  };
  const error = {
    response: {
      status: 505,
    },
  };

  validateError(error, history);
  expect(history.push).toBeCalledWith('/main');
});
