import {applyMiddleware, compose, createStore} from 'redux';
import { save, load } from "redux-localstorage-simple";
import rootReducer from './reducers/rootReducer';

const createStoreWithMiddleware = applyMiddleware(
	save({state: ['dataUser']})
)(createStore);

const store = createStoreWithMiddleware(
    rootReducer,
    load({
        preloadState : {
            user : {},
            cart : []
        },
        state: ['dataUser']
    }),
    // eslint-disable-next-line
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
        trace: true,
    // eslint-disable-next-line
    }) || compose
);

export default store;