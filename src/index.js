import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './components/App';
import './index.css';
import { type } from 'os';

// javascript initializer syntax
const DEFAULT_SETTINGS = {
    gameStarted: false,
    instructionsExpanded: false
}

const SET_GAME_STARTED = 'SET_GAME_STARTED';
const SET_INSTRUCTIONS_EXPANDED = 'SET_INSTRUCTIONS_EXPANDED';



// Main Reducer which is receiving signals from the action creators
const rootReducer = (state = DEFAULT_SETTINGS, action) => {
    console.log('state', state, 'action', action);
    
    switch(action.type){
        case SET_GAME_STARTED:
            return {
                // code can be refactor using the spread operator 
                gameStarted: action.gameStarted,
                instructionsExpanded: state.instructionsExpanded
            }
        case SET_INSTRUCTIONS_EXPANDED:
            return {
                gameStarted: state.gameStarted,
                instructionsExpanded:action.instructionsExpanded
            }
        default:
            return state; 
    }
};

// ~~~~~~ Store which is collects the app data from  reducer and the reducer is receving the action 
const store = createStore(rootReducer);

console.log('store', store); // the first store is the string is use to identify the store object on the right
console.log( 'store.getState()', store.getState());

store.subscribe(() => console.log('store.getstarted()', store.getState()));

// ~~~~~~~ Action Creators  #note action require a type action 
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

// Action objects dispatch to reducers
store.dispatch(startGame());
store.dispatch(expandInstructions());
store.dispatch(cancelGame());
store.dispatch(cancelInstructions());


// dummy action object to check  the reducer respond to the actions

ReactDOM.render(<App />, document.getElementById('root'));