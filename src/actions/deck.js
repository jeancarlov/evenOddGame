import { FETCH_DECK_RESULT } from  './types';

export const fetchDeckResult = deckjson => {
    const { remaining, deck_id } = deckjson;

    return { type: FETCH_DECK_RESULT, remaining, deck_id };
}