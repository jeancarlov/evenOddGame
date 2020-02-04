import { DECK, DECK_DRAW } from  './types';

const API_ADDRESS = 'https://deck-of-cards-api-wrapper.appspot.com';

export const fetchDeckSuccess = deckJson => {
    const { remaining, deck_id } = deckJson;

    return { type: DECK.FETCH_SUCCESS, remaining, deck_id };
}

// Action creator to  Handle fetchDeckError
export const fetchDeckError = error =>{
    return { type: DECK.FETCH_ERROR, message: error.message };
}


// creat a function ( action creator) to place the fetch api in its own action creator
// Adjust the fectchNewDeck code so that it works with the middleware, notice thunk expects a plain function to be pass through,
// Redux-thunk expects a function with a dispatch parameter
export const fetchNewDeck = () => dispatch => {
    //call fetch method and make it the return of the function 
     return fetch(`${API_ADDRESS}/deck/new/shuffle`)
        .then(response => {
            if (response.status !== 200){
                throw new Error('Unsuccessful request to deck of cards api, please try again');
            }
            return response.json()
        })
        .then( json => dispatch(fetchDeckSuccess(json)))
        .catch( error => dispatch(fetchDeckError(error)));
}
export const fetchDrawCard= () => dispatch => {
    //call fetch method and make it the return of the function 
     return fetch(`${API_ADDRESS}/deck/${deck_id}/draw`)
        .then(response => {
            if (response.status !== 200){
                throw new Error('Unsuccessful request to deck of new card, please try again');
            }
            return response.json()
        })
        .then( json => {
            dispatch({
                type: DECK_DRAW.FETCH_SUCCESS,
                cards: json.cards,
                remaining: json.remaining 
            });
        })
        .catch( error => dispatch({
            type: DECK_DRAW.FETCH_ERROR,
            message: error.message
        }));
}

