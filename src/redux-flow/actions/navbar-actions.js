import {
  SHOW_SEARCH,
  spotifySearch,
  SPOTIFY_SEARCH,
  SPOTIFY_SEARCH_ERROR,
} from '../../constants';

import {
  get,
} from '../../constants/api';


export const validateSearchTrackArtists = (response, dispatch) => {
  console.log(response);
  if (response.status === 200) {
    dispatch({
      type: SPOTIFY_SEARCH,
      payload: response.data,
    });
  } else {
    dispatch({
      type: SPOTIFY_SEARCH_ERROR,
      payload: '',
    });
  }
};

export const searchingTracksArtists = query => (dispatch) => {
  const url = `${spotifySearch}?q=${query}&type=track%2Cartist&limit=10`;
  get(url).then(response => validateSearchTrackArtists(response, dispatch));
};

export const isSearching = isVisible => (dispatch) => {
  dispatch({
    type: SHOW_SEARCH,
    payload: isVisible,
  });
};