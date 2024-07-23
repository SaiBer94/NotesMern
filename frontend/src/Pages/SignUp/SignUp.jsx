// SignUp.jsx
import React, { useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import PasswordInput from '../../Components/Password/PasswordInput';
import { validateEmail } from '../../Utils/helper';
import './SignUp.css'; // Import the CSS

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!name) {
      setError("Please enter your name");
      return;
    }

    if (!validateEmail(email)) {
      setError("Invalid email address");
      return;
    }

    if (!password) {
      setError("Please enter your password");
      return;
    }

    setError("");
  };

  return (
    <>
      <Navbar />
      <div className="signup-container">
        <div className="signup-form">
          <form onSubmit={handleSignUp}>
            <h4>Sign Up</h4>
            <input
              className="nameInput"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              className="emailInput"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <PasswordInput
              className="password-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className="error-message">{error}</p>}

            <button type="submit" className="signup-button">Sign Up</button>

            <p className="login-link">
              Already registered? <Link to={'/login'}>Log In!</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
