import { DECK }  from '../actions/types';
import fetchState from './fetchState';

// javascript initializer syntax
const DEFAULT_DECK = {
    deck_id: '',
    remaining: 0,
    fetchState: '',
    message: '',
}

// Main Reducer which is receiving signals from the action creators
 const deckReducer = (state = DEFAULT_DECK, action) => {
    switch(action.type){
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

export default deckReducer; 