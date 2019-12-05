import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { navColorsLight } from '../../../../styles/palette';
import { Wrapper, Title } from './styles';

class Nav extends Component {
  render() {
    return (
      <ThemeProvider theme={navColorsLight}>
        <div>
          <Wrapper>
            <Title>Illuminate</Title>
          </Wrapper>
        </div>
      </ThemeProvider>
    );
  };
};

export default Nav;