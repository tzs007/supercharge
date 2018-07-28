import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';

import AppLayout from './components/AppLayout';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <Router>
        <AppLayout />
      </Router>
    );
  }
}
