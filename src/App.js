import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navigation from './components/navigation/AppBar';
import Dashboard from './ui/screens/Dashboard';
import Issues from './ui/screens/Issues';

class App extends Component {
  render() {
    return ( 
      <Router>
        <Navigation/>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/issues" component={Issues} />
          </Switch>
      </Router>
      )
    }
};

export default App;
