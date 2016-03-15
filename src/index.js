import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'

import App from './components/App';
import { createStore } from 'redux';
import reducers from './reducers';


var _initialState = {
  COUNTER: [{
    id: 0,
    number: 0
  },{
    id: 1,
    number: 10
  }]
};

let store = createStore(reducers, _initialState);

render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);
