import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";
import './SignInPage.css'; // Import CSS for styling

const auth = getAuth(app);

const SignInPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const signInUser = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                console.log("User signed in successfully");
                setSuccessMessage("Sign in successful.");
                setErrorMessage("");
            })
            .catch(error => {
                console.error("Error signing in: ", error);
                setErrorMessage(error.message);
                setSuccessMessage("");
            });
    };

    return (
        <div className="signin-page">
            <h1>Student Sign In</h1>
            <label>Email</label>
            <input onChange={e => setEmail(e.target.value)} value={email} type="email" required placeholder='Enter your email' /><br />
            <label>Password</label>
            <input onChange={e => setPassword(e.target.value)} value={password} type="password" required placeholder='Enter your password' /><br />
            <button onClick={signInUser}>Sign In</button>
            {errorMessage && <p className="error">{errorMessage}</p>}
            {successMessage && <p className="success">{successMessage}</p>}
        </div>
    );
};

export default SignInPage;
