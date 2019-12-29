import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './components/App';
import './index.css';

const DEFAULT_SETTINGS = {
    gameStarted: false,
    instructionsExpanded: false
}
const rootReducer = () => {
    return DEFAULT_SETTINGS;
};
const store = createStore(rootReducer);
console.log( 'store.getState()', store.getState());
console.log('store', store); // the first store is the string is use to identify the store object on the right

ReactDOM.render(<App />, document.getElementById('root'));