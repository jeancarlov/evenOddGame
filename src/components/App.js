import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    console.log('this', this);
    
    return (
      <div>React App</div> 
    );
  }
}

const componentConnector = connect();
export default componentConnector(App);
