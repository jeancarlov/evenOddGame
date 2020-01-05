import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './components/App';
import rootReducer from './reducers/index'
import './index.css';


// ~~~~~~ Store which is collects the app data from  reducer and the reducer is receving the action 
const store = createStore(rootReducer, applyMiddleware(thunk));

console.log('store', store); // the first store is the string is use to identify the store object on the right
console.log( 'store.getState()', store.getState());

store.subscribe(() => console.log('store.getstarted()', store.getState()));

// Action objects dispatch to reducers
//store.dispatch(startGame());
//store.dispatch(expandInstructions());
//store.dispatch(cancelGame());
//store.dispatch(collapseInstructions());


// dummy action object to check  the reducer respond to the actions

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>, document.getElementById('root'));