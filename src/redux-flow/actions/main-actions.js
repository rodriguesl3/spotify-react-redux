import {
  USER_INFORMATION,
  ARTIST_FOLLOWED,
  USER_LISTENING,
  selfInformation,
  followingInformation,
  userListening,
} from '../../constants';

import {
  get,
} from '../../constants/api';

export const userInfoResponse = (response, dispatch, history) => {
  if (response.status === 200) {
    dispatch({
      type: USER_INFORMATION,
      payload: response.data,
    });
  } else {
    history.push('/login');
  }
};

export const dispatchUserListNow = (response, dispatch) => {
  if (response.status === 200) {
    dispatch({
      type: USER_LISTENING,
      payload: response.data,
    });
  }
};

export const dispatchFollowinArtists = (response, dispatch) => {
  if (response.status === 200) {
    dispatch({
      type: ARTIST_FOLLOWED,
      payload: response.data,
    });
  }
};


export const getUserInfo = history => dispatch => get(selfInformation)
  .then(response => userInfoResponse(response, dispatch, history))
  .catch((error) => {
    if (error.response && error.response.status && error.response.status === 401) {
      history.push('/login');
    }
  });

export const followingArtist = () => (dispatch) => {
  const fullUrl = `${followingInformation}?type=artist&limit=30`;
  return get(fullUrl)
    .then(response => dispatchFollowinArtists(response, dispatch));
};

export const getUserListenNow = () => dispatch => get(userListening)
  .then(response => dispatchUserListNow(response, dispatch));
