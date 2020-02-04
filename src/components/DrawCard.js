import React from 'react'
import { connect } from 'react-redux';

// stateless component 
 const DrawCard = props => {
     console.log('DrawCArd props', props);
     
     return(
         <div>
            <button> Draw the next card!</button>         
         </div>
     )
 }

//  export default connect(
//     state => ({ deck_id: state.deck.deck_id})
//  )(DrawCard);

 // reafactor code with destruction 

 export default connect(
  ({ deck: {deck_id}}) => ({deck_id})
 )(DrawCard);

 