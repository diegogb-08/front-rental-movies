import {ADDLIST, REMOVELIST, CLEANLIST} from '../types/listType';

const initialState = {
    list : [],
    totalList : 0
};

const listReducer = (state = initialState, action) => {
    switch(action.type){
        case ADDLIST :
            return {
                ...state,
                list: [...state.list, action.payload],
            }
        
        case REMOVELIST : 
            return {
                ...state,
                list : action.payload
            }

        case CLEANLIST : 
            return {
                ...state,
                list : action.payload
            }

        default : 
            return state
    }
}

export default listReducer;