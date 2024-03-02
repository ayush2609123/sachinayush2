import React, { useState } from 'react';
import './App.css';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import './FrontPage.css'; // Import CSS for front page buttons

function App() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleSignInClick = () => {
    setShowSignIn(true);
    setShowSignUp(false);
  };

  const handleSignUpClick = () => {
    setShowSignIn(false);
    setShowSignUp(true);
  };

  return (
    <div className="App">
      <div className="buttons-container">
        <button onClick={handleSignInClick}>Sign In</button>
        <button onClick={handleSignUpClick}>Sign Up</button>
      </div>
      {showSignIn && <SignInPage />}
      {showSignUp && <SignUpPage />}
    </div>
  );
}

export default App;

