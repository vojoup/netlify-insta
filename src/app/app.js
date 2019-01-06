import React from 'react';
import { Router, Redirect } from '@reach/router'; // comes with gatsby v2
import Layout from '../components/layout';
import Profile from './profile';
import PrivateRoute from './components/private-route';
import Login from './login';
import Main from './main';
import NavBar from './components/navbar';

// remember everything in /app/* is dynamic now!
const App = () => {
  return (
    <Layout>
      <NavBar />
      <Router>
        <PrivateRoute path="/app/profile" component={Profile} />
        <PublicRoute path="/app">
          <PrivateRoute path="/" component={Main} />
          <PublicRoute path="/" render={() => <Redirect to="/login" />} />
          <Login path="/login" />
        </PublicRoute>
      </Router>
    </Layout>
  );
};
function PublicRoute(props) {
  return <div>{props.children}</div>;
}

export default App;
