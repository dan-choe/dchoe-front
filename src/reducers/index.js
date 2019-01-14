import { combineReducers } from "redux";
import postReducer from './PostReducer';
import userReducer from './userReducer';

const tempReducer = (state = [], action) => {
    return state;
}

const rootReducer = combineReducers({
    tempReducer: tempReducer,
    postReducer: postReducer,
    users: userReducer
});

export default rootReducer;