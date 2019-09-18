import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
import fireApp from '../../services/base';
import { AuthContext } from '../../services/auth';

const LoginPage = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await fireApp.login(email.value.toLowerCase(), password.value)
        history.push('/');
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  // Check if user is already logged in
  const { currentUser } = useContext(AuthContext)
  if (currentUser) return <Redirect to='/' />

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>
          E-mail
          <input
            type="email"
            name="email"
            id="email"
            placeholder="user@email.com"
          />
        </label>
        <br />
        <label>
          Password
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
        </label>
        <br />
        <button type="submit">It's Play Time</button>
        <br />
        <button onClick={() => history.push('/signup')}>Sign Me Up</button>
      </form>
    </div>
  );
};

export default withRouter(LoginPage);
