import React, { useContext } from 'react';

import fireApp from '../../services/base';
import { AuthContext } from '../../services/auth';

const HomePage = () => {
  const { currentUser } = useContext(AuthContext);

  const handleDisplayName = () => {
    if (currentUser && currentUser.displayName) {
      return currentUser.displayName
    }
    return 'Usuário'
  }

  return (
    <>
      <h1>Home Page</h1>
      <span>Hello, {handleDisplayName()}</span>
      <br />
      <button onClick={() => fireApp.signOut()}>Sign Out</button>
    </>
  )
};

export default HomePage;
