import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import HomePage from './home/HomePage';
import Sudoku from './games/sudoku/Game';
import Register from './register/Register';
import Header from './header/Header';

export default class Routes extends Component {
  render() {
    return (
      <Router basename="/">
        <Header />
        <Route exact path='/' component={HomePage} />
        <Route path='/register' component={Register} />
        <Route path='/sudoku' component={Sudoku} />
      </Router>
    )
  }
}
