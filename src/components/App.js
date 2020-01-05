import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startGame, cancelGame } from "../actions/settings"
import { fetchDeckResult } from  '../actions/deck'; // attach this method to the redux mapDispathcToProps method


class App extends Component {
  //local helper added to prevent the the function to be call directly in the JSX because its an anti-pattern
  startGame = () => {
    this.props.startGame();

    //call fetch method
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle')
    .then(response => response.json())
    .then( json => this.props.fetchDeckResult(json));
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
  return { gameStarted: state.gameStarted };
}

const mapDispatchToProps = dispatch => {
  return {
    startGame: () => dispatch(startGame()),
    cancelGame: () => dispatch(cancelGame()),
    fetchDeckResult: deckJson => dispatch(fetchDeckResult(deckJson))
  };
} 

// mapDispatchToProps added as the second parameter in the connector fn 
const componentConnector = connect(mapStateToProps, mapDispatchToProps );
export default componentConnector(App);
