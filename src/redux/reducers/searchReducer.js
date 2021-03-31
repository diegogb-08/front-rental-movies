import {ADDSEARCH} from '../types/searchType';

const initialState = {
    search : [],
};

const searchReducer = (state = initialState, action) => {
    switch(action.type){
        case ADDSEARCH :
            return {
                ...state,
                search: action.payload
            };

        default : 
            return state
    }
}

export default searchReducer;