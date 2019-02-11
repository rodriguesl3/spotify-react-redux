import {
  USER_INFORMATION,
  ARTIST_FOLLOWED,
  USER_LISTENING,
  SHOW_SEARCH,
} from '../../constants/index';

export const userInformation = (state, action) => {
  if (!state) {
    state = []
  }
  switch (action.type) {
    case USER_INFORMATION:
      return {
        ...state,
        spotifyUserInfo: action.payload
      }
    case ARTIST_FOLLOWED:
      return {
        ...state,
        followingArtist: action.payload
      }
    case USER_LISTENING:
      return {
        ...state,
        userListening: action.payload
      }
    case SHOW_SEARCH:
      return {
        ...state,
        isSearching: action.payload
      }
    default:
      return state;
  }
};