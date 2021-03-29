import {combineReducers} from 'redux';
import userReducer from './userReducer';
import cartReducer from './cartReducer';
import adminReducer from './adminReducer';
import listReducer from './listReducer';

const rootReducer = combineReducers({
    userReducer,
    cartReducer,
    adminReducer,
    listReducer
});

export default rootReducer;
