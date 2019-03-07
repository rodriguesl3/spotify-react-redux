/* eslint-disable no-undef */
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  isSearching,
  validateSearchTrackArtists,
} from './navbar-actions';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

test('is Searching test with true parameter', () => {
  const store = mockStore({});
  const isSearchResult = isSearching(true)(store.dispatch);

  const actions = store.getActions();
 
  expect(actions[0]).toHaveProperty('type', 'SHOW_SEARCH');
  expect(actions[0]).toHaveProperty('payload', true);
});

test('is Searching test with false parameter', () => {
  const store = mockStore({});
  isSearching(false)(store.dispatch);

  const actions = store.getActions();
  expect(actions[0]).toHaveProperty('type', 'SHOW_SEARCH');
  expect(actions[0]).toHaveProperty('payload', false);
});

test('mock response', () => {
  const response = {
    status: 200,
    data: {},
  };
  const store = mockStore({});
  validateSearchTrackArtists(response, store.dispatch);

  const actions = store.getActions();
  expect(actions[0]).toHaveProperty('type', 'SPOTIFY_SEARCH');
  expect(actions[0]).toHaveProperty('payload', response.data);
});


test('mock response with error', () => {
  const response = {
    status: 500,
  };
  const store = mockStore({});
  validateSearchTrackArtists(response, store.dispatch);

  const actions = store.getActions();
  expect(actions[0]).toHaveProperty('type', 'SPOTIFY_SEARCH_ERROR');
  expect(actions[0]).toHaveProperty('payload', '');
});
