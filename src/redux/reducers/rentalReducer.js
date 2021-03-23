import {ADD, REMOVE, CLEAN} from '../types/rentalType';

const initialState = {
    rental: [],
    totalRental: 0
 
};

const rentalReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD :
            return {
                ...state,
                rental : [...state.cart, action.payload]
                
            }

        case REMOVE :
            return {
                ...state,
                rental : action.payload
                
      
            }

        case CLEAN :
            return {
                ...state,
                rental : initialState
            }

        default : 
            return state
    }
};

export default rentalReducer;