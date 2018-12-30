import {
    USER_INFORMATION
} from '../../constants/index'

export const welcome = (state = [], action) => {
    switch (action.type) {
        case USER_INFORMATION:
            return {
                ...state,
                spotifyUserInfo: action.payload
            }
        default:
            return state;
    }
}