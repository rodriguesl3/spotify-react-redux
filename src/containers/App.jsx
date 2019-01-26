/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import React from 'react';

import './App.css';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import rootReducers from '../redux-flow/reducers/index';


import Login from './Authenticate';
import MainContainer from './MainContainer';

//  const w = window;


const store = createStore(rootReducers,
  compose(applyMiddleware(thunk)));
/* w.__REDUX_DEVTOOLS_EXTENSION__
    && w.__REDUX_DEVTOOLS_EXTENSION__() */

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/login" component={Login} />
        <Route path="/main" component={MainContainer} />
      </div>
    </Router>
  </Provider>
);

export default App;
