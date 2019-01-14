export default (state = [], action) => {
    switch(action.type){
        case 'FETCH_USER':
            // return action.payload;
            return [...state, action.payload];
        default:
            return state;
    }
}