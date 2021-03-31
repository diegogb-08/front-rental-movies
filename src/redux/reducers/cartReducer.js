import { ADD, REMOVE, CLEAN, EDIT, TOTAL_CART } from '../types/cartType';

const initialState = {
    cart: [],
    totalCart: 0
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return {
                ...state,

                cart: [...state.cart, action.payload]
            };

        case REMOVE:
            return {
                ...state,
                cart: state.cart.filter(cart => cart.id !== action.payload)
            };

        case CLEAN:
            return {
                ...state,
                cart: action.payload
            };


        case EDIT:

            let newCart = state.cart.map((_x) => {

                if (_x.price === action.payload.price) { // If it already exists
                    _x.onCart = action.payload.newAmount; // I modity it
                };

                return _x;

            });

            return {
                ...state,
                cart: newCart,

            };

        case TOTAL_CART:
            return {
                ...state,
                totalCart: action.payload
            };

        default:
            return state
    }
}

export default cartReducer;