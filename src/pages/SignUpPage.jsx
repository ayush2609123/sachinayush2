import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";
import './SignUpPage.css'; // Import CSS for styling

const auth = getAuth(app);

const SignUpPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const signUpUser = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                console.log('Successfully created user account');
                setSuccessMessage('User account created successfully.');
                setErrorMessage('');
            })
            .catch(error => {
                console.error('Error creating user account:', error.message);
                setErrorMessage(error.message);
                setSuccessMessage('');
            });
    };

    return (
        <div className="signup-page">
            <h1>Student Sign Up </h1>
            <label>Email</label>
            <input onChange={e => setEmail(e.target.value)} value={email} type="email" required placeholder='Enter your email' /><br />
            <label>Password</label>
            <input onChange={e => setPassword(e.target.value)} value={password} type="password" required placeholder='Enter your password' /><br />
            <button onClick={signUpUser}>Sign Up</button>
            {errorMessage && <p className="error">{errorMessage}</p>}
            {successMessage && <p className="success">{successMessage}</p>}
        </div>
    );
};

export default SignUpPage;


