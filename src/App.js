import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import fireApp from './services/base';
import { AuthProvider } from './services/auth';

import PrivateRoute from './routes/PrivateRoute';

import HomePage from './pages/Home/home';
import LoginPage from './pages/Login/login';
import SignUpPage from './pages/SignUp/signup';

function App() {

  const [isFirebaseInitialized, setFirebaseInitialized] = useState(false)

  useEffect(() => {
    fireApp.isInitialized().then(val => {
      setFirebaseInitialized(val)
    })
  })

  return isFirebaseInitialized ? (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignUpPage} />
        </div>
      </Router>
    </AuthProvider>
  ) : (
      <span>Loading...</span>
    );
}

export default App;
