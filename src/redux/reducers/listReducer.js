import {ADD_LIST, REMOVE_LIST, CLEAN_LIST} from '../types/listType';

const initialState = {
    list : [],
    totalList : 0
};

const listReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_LIST :
            return {
                ...state,
                list: [...state.list, action.payload],
            }
        
        case REMOVE_LIST : 
            const numIndex = parseInt(action.payload)
            return {
                list : [
                    ...state.list.slice(0, numIndex),
                    ...state.list.slice(numIndex + 1)
                ]
            }

        case CLEAN_LIST : 
            return {
                ...state,
                list : action.payload
            }

        default : 
            return state
    }
}

export default listReducer;