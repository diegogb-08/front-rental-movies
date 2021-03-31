import {combineReducers} from 'redux';
import userReducer from './userReducer';
import cartReducer from './cartReducer';
import adminReducer from './adminReducer';
import listReducer from './listReducer';
import searchReducer from './searchReducer'

const rootReducer = combineReducers({
    userReducer,
    cartReducer,
    adminReducer,
    listReducer,
    searchReducer    
});

export default rootReducer;
