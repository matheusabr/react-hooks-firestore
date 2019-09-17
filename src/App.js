import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from './pages/Home/home';
import LoginPage from './pages/Login/login';
import SignUpPage from './pages/SignUp/signup';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component="HomePage" />
        <Route exact path="/login" component="LoginPage" />
        <Route exact path="/signup" component="SignUpPage" />
      </div>
    </Router>
  );
}

export default App;
