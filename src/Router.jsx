// src/Router.jsx

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import HomePage from './pages/HomePage';

const AppRouter = () => {
  return (
    <Router>
      <Route path="/signup" render={() => <SignUpPage />} />
      <Route path="/signin" render={() => <SignInPage />} />
      <Route path="/home" render={() => <HomePage />} />
      {/* Add more routes as needed */}
    </Router>
  );
};

export default AppRouter;



