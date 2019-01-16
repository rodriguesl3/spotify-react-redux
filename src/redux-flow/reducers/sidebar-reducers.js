import {
    SHOW_SIDEBAR
} from '../../constants/index';

export const showSideBar = (state, action) => {
    if (!state) {
        state = [];
    }
    switch (action.type) {
        case SHOW_SIDEBAR:
            return { ...state,
                showSideBar: action.payload
            };
        default:
            return state;
    }
}