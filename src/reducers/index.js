import { combineReducers } from "redux";
import postReducer from './PostReducer';
import userReducer from './userReducer';
import themeReducer from './themeReducer';

const tempReducer = (state = [], action) => {
    return state;
}

const rootReducer = combineReducers({
    tempReducer: tempReducer,
    postReducer: postReducer,
    users: userReducer,
    themeReducer: themeReducer,
});

export default rootReducer;