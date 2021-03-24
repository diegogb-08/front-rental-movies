import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';

// REDUX
import {Provider} from 'react-redux';
import store from './redux/store';


ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);
