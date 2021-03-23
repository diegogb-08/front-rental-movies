import {combineReducers} from 'redux';
import userReducer from './userReducer.js';
import rentalReducer from './rentalReducer.js'
import adminReducer from './adminReducer'

const rootReducer = combineReducers({
    userReducer,
    rentalReducer,
    adminReducer
});

export default rootReducer;
