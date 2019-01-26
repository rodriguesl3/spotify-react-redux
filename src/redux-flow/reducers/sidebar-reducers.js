import {
    SHOW_SIDEBAR
} from '../../constants/index';

export const showSideBar = (state, action) => {
    if (!state) {
        state = [];
    }
    if (SHOW_SIDEBAR === action.type) {
        return { ...state,
            showSideBar: action.payload
        };
    }
    return state;
}