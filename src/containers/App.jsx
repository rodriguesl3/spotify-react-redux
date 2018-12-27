import React, { Component } from 'react';

import './App.css';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux'
import rootReducers from '../redux-flow/reducers/index'

import { NavBar } from '../components/navbar'
import Login from './Authenticate'
import Welcome from './Welcome';

const store = createStore(rootReducers,
  compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);


const App = () => {
  return (
    <Provider store={store}>
        <NavBar brandName="N2L" />
          <Router>
          <div className="container">
            <Route path="/login" component={Login} />
            <Route path="/main" component={Welcome} />
            </div>
          </Router>
    </Provider>
  );
}
export default App;
