import {combineReducers} from 'redux';
import userReducer from './userReducer';
import filmReducer from './filmReducer'
import adminReducer from './adminReducer'

const rootReducer = combineReducers({
    userReducer,
    filmReducer,
    adminReducer
});

export default rootReducer;
