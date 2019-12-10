import React, { Component } from 'react';
import { Wrapper, Title } from './styles';
import LoginForm from '../../Common/Forms/Login';

class Login extends Component {

  componentDidMount() {
  };

  render() {
    return (
        <Wrapper>
          <LoginForm />
        </Wrapper>
    );
  };
};

export default Login;