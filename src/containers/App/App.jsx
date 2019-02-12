/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import React from 'react';

import './App.css';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import rootReducers from '../../redux-flow/reducers/index';


import Login from '../Authenticate';
import MainContainer from '../MainContainer/MainContainer';


const store = createStore(rootReducers, compose(applyMiddleware(thunk)));

// const store = createStore(rootReducers,
//   compose(applyMiddleware(thunk),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <div>
          <Route exact path="/" component={Login} />
          <Route path="/main" component={MainContainer} />
        </div>
      </Switch>
    </Router>
  </Provider>
);

export default App;
