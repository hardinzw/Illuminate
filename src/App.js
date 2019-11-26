import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navigation from './components/navigation/AppBar';
import Issues from './ui/screens/Issues';
import EditIssue from './components/actions/editIssue';
import CreateIssue from './components/actions/createIssue';
import CreateUser from './components/actions/createUser';

class App extends React.Component {
  render() {
    return ( 
      <Router>
        <Navigation/>
          <Switch>
            <Route exact path="/" exact component={Issues} />
            <Route exact path="/edit/:id" component={EditIssue} />
            <Route exact path="/create" component={CreateIssue} />
            <Route exact path="/user" component={CreateUser} />
          </Switch>
      </Router>
      )
    }
};

export default App;
