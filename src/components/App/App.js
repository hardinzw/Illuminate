import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { colorsDark, colorsLight } from '../../styles/palette';
import { Wrapper, Title } from './styles';

class App extends Component {

  componentDidMount() {
  };

  render() {
    return (
      <ThemeProvider theme={colorsDark}>
        <div>
          <Wrapper>
            <Title>Example MVC</Title>
          </Wrapper>
        </div>
      </ThemeProvider>
    );
  };
};

export default App;