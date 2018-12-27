import {
    USER_AUTHENTICATION,
    ADD_CREDENTIALS
} from "../../constants";
import Axios from "axios";
import {
    baseUri,
    clientID,
    clientSecret
} from '../../secret'

export const submitCredentials = (credentials) => {
    return dispatch => {
        var basicAuth = 'Basic ' + btoa(clientID + ':' + clientSecret);
        return Axios.get("https://localhost:5001/api/token").
        then(response => {
            // console.log(response);
            let win = window.open(response.data, '', 'location=no,toolbar=0');

            let polTimer = window.setInterval(() => {

                if (win.document.location.origin == window.location.origin) {
                    clearInterval(polTimer);
                    var access_token = win.document.location.pathname.split('=')[1];
                    win.close();

                    window.sessionStorage.setItem('access_token', access_token);
                   
                    dispatch({
                        type: USER_AUTHENTICATION,
                        payload: access_token
                    });

                }



            }, 600)

        });



        // return Axios.get('https://jsonplaceholder.typicode.com/todos/1')
        //     .then(response => dispatch({
        //         type: USER_AUTHENTICATION,
        //         payload: response.data
        //     }))

    }
}



export const addCredentials = (credentials) => ({
    type: ADD_CREDENTIALS,
    payload: credentials
})