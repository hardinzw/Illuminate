import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import GlobalStyle from './styles/globals';
import 'bootstrap/dist/css/bootstrap.min.css';

//Import  higher order components

//Import routing components


//Import custom components
import App from './components/App';
import configureStore from './store';

const renderApp = () => { 
  const store = configureStore;
  ReactDOM.render(
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>,
    document.getElementById('root'),
  );
};

renderApp();
