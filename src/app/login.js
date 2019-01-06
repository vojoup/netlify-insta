import React from 'react';
import { navigate } from 'gatsby';
import { handleLogin, isLoggedIn, logout } from '../services/auth';

class Login extends React.Component {
  handleLogin = () => handleLogin(user => navigate(`/app/profile`));
  handleLogout = () => logout(user => navigate(`/app/login`));
  render() {
    return (
      <>
        <h1>Log in</h1>
        {isLoggedIn ? (
          <button onClick={this.handleLogout}>Log out</button>
        ) : (
          <button onClick={this.handleLogin}>Log in</button>
        )}
      </>
    );
  }
}

export default Login;
