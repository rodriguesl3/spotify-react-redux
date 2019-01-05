import {
    USER_INFORMATION,
    ARTIST_FOLLOWED,
    selfInformation,
    following_information
} from '../../constants';

import {
    get
} from '../../constants/api';

export const getUserInfo = (history) => {
    return dispatch => {
        return get(selfInformation)
            .then(response => {
                console.log(response);
                if (response.status == 200) {
                    dispatch({
                        type: USER_INFORMATION,
                        payload: response.data
                    });
                } else {
                    history.push('/login');
                }
            })
            .catch((error) => {
                if (error.response.status == 401) {
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
                console.log(response.data);
                if (response.status === 200) {
                    dispatch({
                        type: ARTIST_FOLLOWED,
                        payload: response.data
                    })
                }
            })
    }
}