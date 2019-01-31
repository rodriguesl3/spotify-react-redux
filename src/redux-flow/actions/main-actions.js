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

export const getUserInfo = history => dispatch => get(selfInformation)
  .then((response) => {
    if (response.status === 200) {
      dispatch({
        type: USER_INFORMATION,
        payload: response.data,
      });
    } else {
      history.push('/login');
    }
  })
  .catch((error) => {
    if (error.response.status === 401) {
      history.push('/login');
    }
  });

export const followingArtist = () => (dispatch) => {
  const fullUrl = `${followingInformation}?type=artist&limit=30`;
  return get(fullUrl)
    .then((response) => {
      if (response.status === 200) {
        dispatch({
          type: ARTIST_FOLLOWED,
          payload: response.data,
        });
      }
    });
};

export const getUserListenNow = () => {
  return dispatch => get(userListening)
    .then((response) => {
      console.log(response.data);
      if (response.status === 200) {
        dispatch({
          type: USER_LISTENING,
          payload: response.data,
        });
      }
    });
};