import {LOGOUT, LOGINADMIN} from '../types/adminType';

const initialState = {
    admin: {},
    token: ''

};

const adminReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGINADMIN :
            return {
                ...state,
                admin : action.payload,
                token : action.payload.token,
            }

        case LOGOUT :
            return initialState

        default : 
            return state
    }
};

export default adminReducer;