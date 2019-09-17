import React from 'react';
import app from '../../services/base';

const LoginPage = () => (
  <>
    <h1>login Page</h1>
    <button onClick={() => app.auth().signOut()}>Sign Out</button>
  </>
);

export default LoginPage;
