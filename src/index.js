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

const SET_GAME_STARTED = 'SET_GAME_STARTED';
const SET_INSTRUCTIONS_EXPANDED = 'SET_INSTRUCTIONS_EXPANDED';



// Main reducer
const rootReducer = (state = DEFAULT_SETTINGS, action) => {
    console.log('state', state, 'action', action);
    
    if (action.type === SET_GAME_STARTED){
        return {
            gameStarted: action.gameStarted,
            instructionsExpanded:false
        }
    }
    return state ;
};
const store = createStore(rootReducer);

console.log('store', store); // the first store is the string is use to identify the store object on the right
console.log( 'store.getState()', store.getState());

store.subscribe(() => console.log('store.getstarted()', store.getState()));

// Action Creators
const startGame = () => {
    return { type: SET_GAME_STARTED, gameStarted: true}
}
const cancelGame = () => {
    return { type: SET_GAME_STARTED, gameStarted: false}
}

const expandInstructions = () => {
    return { type: SET_INSTRUCTIONS_EXPANDED, instructionsExpanded: true};
};
const cancelInstructions = () => {
    return { type: SET_INSTRUCTIONS_EXPANDED, instructionsExpanded: false};
};

store.dispatch(startGame());
store.dispatch(cancelGame());
store.dispatch(expandInstructions());
store.dispatch(cancelInstructions());



// dummy action object to check  the reducer respond to the actions

ReactDOM.render(<App />, document.getElementById('root'));