import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './layout';
import app from './reducers/rules-reducer'

// Grab the state from a global injected into server-generated HTML
const initialState = window.__INITIAL_STATE__;
const domElement = document.getElementById('main');

// Create Redux store with initial state
const store = createStore(app, initialState);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  domElement
);
