import{SHOW_SIDEBAR} from '../../constants/index';

export const showHideSideBar = (showHide) => {
    return {
        type: SHOW_SIDEBAR,
        payload: showHide
    }
}