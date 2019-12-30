import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startGame, cancelGame } from "../actions/settings"

class App extends Component {
  //local helper added to prevent the the function to be call directly in the JSX because its an anti-pattern
  startGame = () => {
    this.props.dispatch(startGame())
  }
  cancelGame = () => {
    this.props.dispatch(cancelGame())
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
              <button onClick = {this.cancelGame}>Cancel game</button>
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

const componentConnector = connect(mapStateToProps);
export default componentConnector(App);
