import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { colorsDark, colorsLight } from '../../styles/palette';
import Nav from '../Common/Header/Nav';
import Dashboard from '../Dashboard';

class App extends Component {

  componentDidMount() {
  };

  render() {
    return (
      <ThemeProvider theme={colorsDark}>
        <Nav />
        <Dashboard />
      </ThemeProvider>
    );
  };
};

export default App;