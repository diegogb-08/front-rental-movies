import {combineReducers} from 'redux';
import userReducer from './userReducer';
import cartReducer from './cartReducer'
import adminReducer from './adminReducer'

const rootReducer = combineReducers({
    userReducer,
    cartReducer,
    adminReducer
});

export default rootReducer;
