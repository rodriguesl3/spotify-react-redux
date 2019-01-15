import {
    USER_AUTHENTICATION,
    ADD_CREDENTIALS
} from "../../constants/index";

export const authentication = (state, action) => {
    if(!state){
        state = []
    }
    switch (action.type) {
        case USER_AUTHENTICATION:
            return { ...state,
                spotifyAuth: action.payload
            };

        case ADD_CREDENTIALS:
            return {
                ...state,
                [action.payload.name]: action.payload.value
            };
        default:
            return state;
    }
}