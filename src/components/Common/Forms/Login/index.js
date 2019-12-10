import React from 'react';
import './style.css';
import { reduxForm } from 'redux-form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

let LoginForm = () => {
  return (
    <Form className="form">
      <Form.Group controlId="formBasicEmail">
        <Form.Control type="email" placeholder="User Name or Email" />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formHorizontalCheck">    
        <Form.Check label="Remember me" />
      </Form.Group>
      <Button className="sign-in-button" variant="primary" type="submit">
        SIGN IN
      </Button>
      <Form.Group controlId="formOptions">
        <br/>
        <a href="#">Create Account</a>
        <br/>
        <a href="#">Forgot Password?</a>
        <br/>
        <a href="#">Sign In to Demo User</a>
      </Form.Group>
    </Form>
  );
};

LoginForm = reduxForm({
    // a unique name for the form
    form: 'Login'
  })(LoginForm);

export default LoginForm;