import { DECK } from  './types';

export const fetchDeckSuccess = deckjson => {
    const { remaining, deck_id } = deckjson;

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
     return fetch('https://deck-of-cards-api-wrapper.appspot.com/deck/new/shuffle')
        .then(response => response.json())
        .then( json => dispatch(fetchDeckSuccess(json)))
        .catch( error => dispatch(fetchDeckError(error)));
}