import {ADD, REMOVE, CLEAN, EDIT, TOTAL_CART} from '../types/cartType';

const initialState = {
    cart : [],
    totalCart : 0
};

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD :
            return {
                ...state,

                cart: [...state.cart, action.payload]
            };
        
        case REMOVE : 
            return {
                ...state,
                cart : action.payload
            };

        case CLEAN : 
            return {
                ...state,
                cart : action.payload
            };
        
        // Repo: https://github.com/GeeksHubsAcademy/cartEcommerceFSDJunior/blob/master/src/redux/reducers/cartReducer.js    
        case EDIT:  
		
            let newCart = state.cart.map( (_x) => {
                
                if (_x.name === action.payload.name) { // If it already exists
                    _x.onCart = action.payload.newAmount; // I modity it
                };
                
                return _x;
                
            });
        
          return {
            ...state,
            cart: newCart,

          };
          
        case TOTAL_CART :
            return {
              ...state,
              totalCart : action.payload
            };

        default : 
            return state
    }
}

export default cartReducer;