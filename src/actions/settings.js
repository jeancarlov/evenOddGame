import { SET_GAME_STARTED, SET_INSTRUCTIONS_EXPANDED} from './types'

// add all the (action types move to type.js) and action creators

// ~~~~~~~ Action Creators  #note action require a type action 
export const startGame = () => {
    return { type: SET_GAME_STARTED, gameStarted: true}
}
export const cancelGame = () => {
    return { type: SET_GAME_STARTED, gameStarted: false}
}

export const expandInstructions = () => {
    return { type: SET_INSTRUCTIONS_EXPANDED, instructionsExpanded: true};
};
export const collapseInstructions = () => {
    return { type: SET_INSTRUCTIONS_EXPANDED, instructionsExpanded: false};
};