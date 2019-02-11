import {
  SHOW_SEARCH,
  SPOTIFY_SEARCH,
} from '../../constants/index';

const navbarHandle = (state, action) => {
  if (!state) {
    state = [];
  }
  switch (action.type) {
    case SHOW_SEARCH:
      return {
        ...state,
        isSearching: action.payload,
      };
    case SPOTIFY_SEARCH:
      return {
        ...state,
        searchResult: action.payload,
      };
    default:
      break;
  }
  return state;
};

export default navbarHandle;
