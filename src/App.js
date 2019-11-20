import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Dashboard from './ui/screens/Dashboard'

class App extends Component {

  render() {
    return (
      <Router>
          <Switch>
            <Route exact path="/" component={Dashboard} />
          </Switch>
      </Router>
      )
    }
};

export default App;
