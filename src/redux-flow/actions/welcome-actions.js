import Axios from 'axios'
import {
    USER_INFORMATION
} from '../../constants';

export const getUserInfo = (history) => {
    return dispatch => {
        return Axios.get('https://api.spotify.com/v1/me', {
                headers: {
                    "Authorization": `Bearer ${window.sessionStorage.getItem('access_token')}`
                }
            })
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