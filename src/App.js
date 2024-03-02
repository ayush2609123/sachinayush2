import React, { useState } from "react";
import "./App.css";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import "./FrontPage.css"; // Import CSS for front page buttons

function App() {
	const [user, setUser] = useState(null);
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

  const handleSignOut = () => {
    setUser(null);
  }

	return (
		<div className="App">
      {user && <h1>Welcome {user.email}, to the Student Portal</h1>}
			<div className="buttons-container">
				<button onClick={handleSignInClick}>Sign In</button>
				<button onClick={handleSignUpClick}>Sign Up</button>
        {user && <button onClick={handleSignOut}>Sign Out</button>}
			</div>
			{showSignIn && <SignInPage  setUser={setUser} />}
			{showSignUp && <SignUpPage  />}
		</div>
	);
}

export default App;
