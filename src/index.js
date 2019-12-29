import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './components/App';
import './index.css';
import { type } from 'os';

const DEFAULT_SETTINGS = {
    gameStarted: false,
    instructionsExpanded: false
}


const rootReducer = (state, action) => {
    console.log('state', state, 'action', action);
    
    if (action.type === 'SET_GAME_STARTED'){
        return {
            gameStarted: action.gameStarted,
            instructionsExpanded:false
        }
    }
    return DEFAULT_SETTINGS;
};
const store = createStore(rootReducer);

console.log('store', store); // the first store is the string is use to identify the store object on the right
console.log( 'store.getState()', store.getState());

store.subscribe(() => console.log('store.getstarted()', store.getState()));

const action1 = { gameStarted: true, type: 'SET_GAME_STARTED' };
store.dispatch(action1);

store.dispatch({ type: 'foo'});
store.dispatch({ type: 'bar'});

// dummy action object to check  the reducer respond to the actions

ReactDOM.render(<App />, document.getElementById('root'));