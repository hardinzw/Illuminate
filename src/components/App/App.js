import React, { Component } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../../utils/history';
import { alertActions } from '../../store/alert/actions';
import { ThemeProvider } from 'styled-components';
import { colorsDark, colorsLight } from '../../styles/palette';
import Login from '../Pages/Login';
import { PrivateRoute } from '../PrivateRoute';
import { RegisterPage } from '../Pages/Register';

class App extends Component {
  constructor(props) {
    super(props);

    history.listen((location, action) => {
        // clear alert on location change
        this.props.clearAlerts();
    });
};

render() {
  //const { alert } = this.props;
  return (
    <ThemeProvider theme={colorsDark}>
      <Router history={history}>
        <Switch>        
          <PrivateRoute exact path='/' component={Login} />
          <Route path='/register' component={RegisterPage} />
          {/*<Route path='/create' exact component={CreateIssue} />
          <Route path='/edit/:id' component={EditIssue} />*/}
          </Switch>
        </Router>       
      </ThemeProvider>
    );
  };
};

function mapState(state) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
  clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };

export default App;