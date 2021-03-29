import {LOGIN, LOGOUT, UPDATE, SAVEEMAIL} from '../types/userType';

const initialState = {
    user: {},
    token: '',

};
 
const userReducer = (state = initialState, action) => {
    switch(action.type){
        case SAVEEMAIL : 
            return {
                ...state,
                user : action.payload.user,
            }

        case LOGIN :
            return {
                ...state,
                user : action.payload.user,
                token : action.payload.token,
            }

        case LOGOUT :
            return initialState

        case UPDATE :
            return {
                ...state,
                user : action.payload.user
            }
        default : 
            return state
    }
};

export default userReducer;