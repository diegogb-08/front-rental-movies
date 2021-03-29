import {ADDLIST, REMOVE, CLEAN} from '../types/listType';

const initialState = {
    list : [],
};

const listReducer = (state = initialState, action) => {
    switch(action.type){
        case ADDLIST :
            return {
                ...state,
                list: [...state.list, action.payload]
            }
        
        case REMOVE : 
            return {
                ...state,
                list : action.payload
            }

        case CLEAN : 
            return {
                ...state,
                list : action.payload
            }

        default : 
            return state
    }
}

export default listReducer;