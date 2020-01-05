import { 
    SET_GAME_STARTED, 
    SET_INSTRUCTIONS_EXPANDED, 
    DECK}  from '../actions/types';
import fetchState from './fetchState';

// javascript initializer syntax
const DEFAULT_SETTINGS = {
    gameStarted: false,
    instructionsExpanded: false
}

// Main Reducer which is receiving signals from the action creators
 const rootReducer = (state = DEFAULT_SETTINGS, action) => {
    console.log('state', state, 'action', action);
    
    switch(action.type){
        case SET_GAME_STARTED:
            return {
                // code can be refactor using the spread operator 
                ...state, gameStarted: action.gameStarted,
            };
        case SET_INSTRUCTIONS_EXPANDED:
            return {
                ...state, instructionsExpanded:action.instructionsExpanded
            }
        case DECK.FETCH_SUCCESS:
            // grab the remaining and deck_id from the action object by destructuring and mixed those in within the return state for the actual reducer
            const { remaining, deck_id } = action;
            return {
                ...state, remaining, deck_id,  fetchState: fetchState.success
            };
        case DECK.FETCH_ERROR:
            return {
                ...state, message: action.message, fetchState: fetchState.error
            };
        default:
            return state; 
    }
};

export default rootReducer; 