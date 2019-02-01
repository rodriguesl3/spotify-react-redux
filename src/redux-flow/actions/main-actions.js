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
    console.log('UserInfo:', response);
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
      console.log('followingArtist:', response);
      if (response.status === 200) {
        dispatch({
          type: ARTIST_FOLLOWED,
          payload: response.data,
        });
      }
    });
};

export const getUserListenNow = () => dispatch => get(userListening)
  .then((response) => {
    console.log('getUserListenNow', response);
    if (response.status === 200) {
      dispatch({
        type: USER_LISTENING,
        payload: response.data,
      });
    }
  });