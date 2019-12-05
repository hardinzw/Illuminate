import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { colorsDark, colorsLight } from '../../styles/palette';
import { Wrapper, Title } from './styles';
import Form from '../Common/Form';

import DataTable from '../Common/Table';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={colorsDark}>
          <Wrapper>
            <DataTable />
            <Form />
          </Wrapper>
      </ThemeProvider>
    );
  };
};

export default App;