import React from 'react';
import { navigate } from 'gatsby';
import { handleLogin } from '../services/auth';

class Login extends React.Component {
  handleSubmit = () => handleLogin(user => navigate(`/app/profile`));
  render() {
    return (
      <>
        <h1>Log in</h1>
        <button onClick={this.handleSubmit}>Log in</button>
      </>
    );
  }
}

export default Login;
