import {
    USER_AUTHENTICATION,
    ADD_CREDENTIALS,
    LOGIN_TOKEN
} from "../../constants";
import Axios from "axios";


export const submitCredentials = (credentials, history) => {
    return dispatch => {
        return Axios.get(isDevelopmentEnvironment()).then(response => {

            let win = window.open(response.data, '', 'location=no,toolbar=0');

            let polTimer = window.setInterval(() => {
                let isValidUrl = isValidUrlHandle(win)

                if (isValidUrl) {
                    clearInterval(polTimer);
                    var access_token = win.document.location.pathname.split('=')[1];
                    win.close();
                    window.sessionStorage.setItem('access_token', access_token);

                    history.push('/main');

                    dispatch({
                        type: USER_AUTHENTICATION,
                        payload: access_token
                    });
                }
            }, 600)
        });
    }
}



export const isDevelopmentEnvironment = () => {
    if(window.location.origin.indexOf("localhost") >= 0)
        return LOGIN_TOKEN+"?development=true";
    else
        return LOGIN_TOKEN;
}

export const isValidUrlHandle = (win) => {
    try {
        return win.document.location.origin === window.location.origin
    } catch (error) {
        return false
    }
}


export const addCredentials = (credentials) => ({
    type: ADD_CREDENTIALS,
    payload: credentials
})