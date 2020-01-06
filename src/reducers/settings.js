import { SET_GAME_STARTED, SET_INSTRUCTIONS_EXPANDED, }  from '../actions/types';
// javascript initializer syntax
const DEFAULT_SETTINGS = {
    gameStarted: false,
    instructionsExpanded: false
}

// Main Reducer which is receiving signals from the action creators
 const settingsReducer = (state = DEFAULT_SETTINGS, action) => {
    switch(action.type){
        case SET_GAME_STARTED:
            return {
                ...state, gameStarted: action.gameStarted,
            };
        case SET_INSTRUCTIONS_EXPANDED:
            return {
                ...state, instructionsExpanded:action.instructionsExpanded
            }
        default:
            return state; 
    }
};
export default settingsReducer; 