import { FETCH_DECK_RESULT } from  './types';

export const fetchDeckResult = deckjson => {
    const { remaining, deck_id } = deckjson;

    return { type: FETCH_DECK_RESULT, remaining, deck_id };
}

// creat a function ( action creator) to place the fetch api in its own action creator
// Adjust the fectchNewDeck code so that it works with the middleware, notice thunk expects a plain function to be pass through,
// Redux-thunk expects a function with a dispatch parameter
export const fetchNewDeck = () => dispatch => {
    //call fetch method and make it the return of the function 
     return fetch('https://deck-of-cards-api-wrapper.appspot.com/deck/new/shuffle')
        .then(response => response.json())
        .then( json => dispatch(fetchDeckResult(json)));
}