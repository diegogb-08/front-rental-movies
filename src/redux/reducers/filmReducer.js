import {ADD, REMOVE, CLEAN} from '../types/filmType';

const initialState = {
    cart: [],
    list: [] 
};

const rentalReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD :
            return {
                ...state,
                cart : [...state.cart, action.payload.cart],
                list : [...state.list, action.payload.list],
                
            }

        case REMOVE :
            return {
                ...state,
                cart : [...state.cart, action.payload.cart],
                list : [...state.list, action.payload.list],
                
      
            }

        case CLEAN :
            return {
                ...state,
                cart : [...state.cart, action.payload.cart],
                list : [...state.list, action.payload.list],
            }

        default : 
            return state
    }
};

export default rentalReducer;