
export default (state = {isSidebarOpen: false}, action) => {
    switch(action.type){
        case 'TOGGLE_SIDEBAR':
            return { isSidebarOpen: !state.isSidebarOpen };
        default:
            return state;
    }
}