import {LOGIN, LOGOUT, UPDATE, SAVEEMAIL} from '../types/userType';

const initialState = {
    user: {},
    token: '',
    email: ''

};
 
const userReducer = (state = initialState, action) => {
    switch(action.type){
        case SAVEEMAIL : 
            return {
                ...state,
                email : action.payload.email,
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
                user : action.payload
            }
        default : 
            return state
    }
};

export default userReducer;