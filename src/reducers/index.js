import { combineReducers } from "redux";
import postReducer from './PostReducer';
import userReducer from './userReducer';
import themeReducer from './themeReducer';
import sidebarReducer from './sidebarReducer';

const tempReducer = (state = [], action) => {
    return state;
}

const rootReducer = combineReducers({
    tempReducer: tempReducer,
    postReducer: postReducer,
    users: userReducer,
    themeReducer: themeReducer,
    sidebarReducer: sidebarReducer,
});

export default rootReducer;