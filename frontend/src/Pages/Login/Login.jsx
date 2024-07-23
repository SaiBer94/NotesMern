// Login.jsx
import React, { useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import PasswordInput from '../../Components/Password/PasswordInput';
import { validateEmail } from '../../Utils/helper';
import './Login.css'; // Import the CSS

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
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
      <div className="login-container">
        <div className="login-form">
          <form action="" onSubmit={handleLogin}>
            <h4>Login</h4>
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

            <button type="submit" className="login-button">Login</button>

            <p className="signup-link">
              Not Registered yet? <Link to={'/signup'}>Create Account!</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
