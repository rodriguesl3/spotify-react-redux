import {
    USER_INFORMATION,
    ARTIST_FOLLOWED,
    USER_LISTENING,
    selfInformation,
    following_information,
    userListening
} from '../../constants';

import {
    get
} from '../../constants/api';

export const getUserInfo = (history) => {
    return dispatch => {
        return get(selfInformation)
            .then(response => {
                if (response.status === 200) {
                    dispatch({
                        type: USER_INFORMATION,
                        payload: response.data
                    });
                } else {
                    history.push('/login');
                }
            })
            .catch((error) => {
                if (error.response.status === 401) {
                    history.push('/login');
                }
            })
    }
}

export const followingArtist = () => {
    return dispatch => {
        let fullUrl = `${following_information}?type=artist&limit=30`
        return get(fullUrl)
            .then(response => {
                if (response.status === 200) {
                    dispatch({
                        type: ARTIST_FOLLOWED,
                        payload: response.data
                    })
                }
            })
    }
}


export const getUserListenNow = () => {
    return dispatch => {
        return get(userListening)
            .then(response => {
                console.log(response.data);
                if (response.status === 200) {
                    dispatch({
                        type: USER_LISTENING,
                        payload: response.data
                    })
                }
            })
    }
}