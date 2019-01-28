
export default (state = {isThemeLight: true}, action) => {
    switch(action.type){
        case 'TOGGLE_THEME':
            return { isThemeLight: !state.isThemeLight };
        default:
            return state;
    }
}