import {
    USER_INFORMATION,
    ARTIST_FOLLOWED
} from '../../constants/index'

export const userInformation = (state, action) => {
    if(!state){
        state = []
    }
    switch (action.type) {
        case USER_INFORMATION:
            return {
                ...state,
                spotifyUserInfo: action.payload
            }
        case ARTIST_FOLLOWED:
            return {
                ...state,
                followingArtist: action.payload
            }
        default:
            return state;
    }
}