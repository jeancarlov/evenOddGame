import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startGame, cancelGame } from "../actions/settings"
import { fetchNewDeck  } from  '../actions/deck'; // attach this method to the redux mapDispathcToProps method
import fetchState from '../reducers/fetchState';

class App extends Component {
  //local helper added to prevent the the function to be call directly in the JSX because its an anti-pattern
  startGame = () => {
    this.props.startGame();
    this.props.fetchNewDeck();
  }
  render() {
    console.log('this', this);
    
    // render different UI feature with a ternary expression
    return (
      <div>
        <h2> Evens or Odds</h2>
        {
          this.props.gameStarted ? (
            <div>
              <h3>The game is on ! </h3>
              <br />
              <button onClick = {this.props.cancelGame}>Cancel game</button>
            </div>
          ) : (
            <div>
              <h3> A new game awaits</h3>
              <br />
              <button onClick = {this.startGame}>Start game</button>
            </div>
          )
        }
      </div> 
    );
  }
}

const mapStateToProps = state => {
  console.log('state', state);
  return { gameStarted: state.gameStarted, fetchState: state.fetchState, message: state.message };
}

// const mapDispatchToProps = dispatch => {
//   return {
//     startGame: () => dispatch(startGame()),
//     cancelGame: () => dispatch(cancelGame()),
//     fetchNewDeck: () => dispatch(fetchNewDeck()) // refactor this code for the json obtect to have acces to the store #67
//   };
// } 

// mapDispatchToProps added as the second parameter in the connector fn 
const componentConnector = connect(mapStateToProps,
  { startGame, cancelGame, fetchNewDeck}
  );
export default componentConnector(App);

