import { combineReducers } from "redux";
import postReducer from './PostReducer';
import userReducer from './userReducer';
import themeReducer from './themeReducer';
import sidebarReducer from './sidebarReducer';
import selectPage from './SelectPage';

const tempReducer = (state = [], action) => {
    return state;
}

const rootReducer = combineReducers({
    tempReducer: tempReducer,
    postReducer: postReducer,
    users: userReducer,
    themeReducer: themeReducer,
    sidebarReducer: sidebarReducer,
    selectPage
});

export default rootReducer;