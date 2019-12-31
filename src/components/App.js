import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startGame, cancelGame } from "../actions/settings"

class App extends Component {
  //local helper added to prevent the the function to be call directly in the JSX because its an anti-pattern
  
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
              <button onClick = {this.props.startGame}>Start game</button>
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
    cancelGame: () => dispatch(cancelGame())
  };
} 

// mapDispatchToProps added as the second parameter in the connector fn 
const componentConnector = connect(mapStateToProps, mapDispatchToProps );
export default componentConnector(App);
