import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import fireApp from '../../services/base';

const SignUpPage = ({ history }) => {
  const handleSignUp = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await fireApp.register('Teste', email.value.toLowerCase(), password.value)
        history.push('/');
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
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
        <button onClick={() => history.push('/')}>Cancel</button>
        <button type="submit">Let Me In!</button>
      </form>
    </div>
  );
};

export default withRouter(SignUpPage);
