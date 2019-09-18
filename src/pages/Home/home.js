import React from 'react';
import fireApp from '../../services/base';

const HomePage = () => (
  <>
    <h1>Home Page</h1>
    <button onClick={() => fireApp.signOut()}>Sign Out</button>
  </>
);

export default HomePage;
