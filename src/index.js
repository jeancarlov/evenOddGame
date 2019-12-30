import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './components/App';
import './index.css';
import rootReducer from './reducers/index'

// ~~~~~~ Store which is collects the app data from  reducer and the reducer is receving the action 
const store = createStore(rootReducer);

console.log('store', store); // the first store is the string is use to identify the store object on the right
console.log( 'store.getState()', store.getState());

store.subscribe(() => console.log('store.getstarted()', store.getState()));

// Action objects dispatch to reducers
//store.dispatch(startGame());
//store.dispatch(expandInstructions());
//store.dispatch(cancelGame());
//store.dispatch(collapseInstructions());


// dummy action object to check  the reducer respond to the actions

ReactDOM.render(<App />, document.getElementById('root'));