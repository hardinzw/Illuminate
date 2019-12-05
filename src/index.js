import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

//Import  higher order components

//Import routing components
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Import custom components
import App from './components/App';
import configureStore from './store';
import GlobalStyle from './styles/globals';

const renderApp = () => { 
  const store = configureStore;
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <GlobalStyle />
        <Route path='/' exact component={App} />
        <Route path='/dashboard' exact component={App} />
        {/*<Route path='/create' exact component={CreateIssue} />
        <Route path='/edit/:id' component={EditIssue} />*/}
      </Router>
    </Provider>,
    document.getElementById('root'),
  );
};

renderApp();
