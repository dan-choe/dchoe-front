const initialState = {
    currentPage: 0,
    pageSize: 5
};

export default (state = initialState, action) => {
    switch(action.type){
        case 'SELECT_PAGE':
            return action.payload;
        default:
            return state;
    }
}