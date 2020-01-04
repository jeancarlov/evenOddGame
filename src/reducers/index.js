import { 
    SET_GAME_STARTED, 
    SET_INSTRUCTIONS_EXPANDED, 
    FETCH_DECK_RESULT}  from '../actions/types';


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

export default rootReducer; 