import {
  SHOW_SEARCH,
  spotifySearch,
  SPOTIFY_SEARCH,
} from '../../constants';

import {
  get,
} from '../../constants/api';

export const searchingTracksArtists = query => (dispatch) => {
  const url = `${spotifySearch}?q=${query}&type=track%2Cartist&limit=10`;
  get(url).then((response) => {
    console.log(response);
    if (response.status === 200) {
      dispatch({
        type: SPOTIFY_SEARCH,
        payload: response.data,
      });
    }
  });
};

export const isSearching = isVisible => (dispatch) => {
  dispatch({
    type: SHOW_SEARCH,
    payload: isVisible,
  });
};