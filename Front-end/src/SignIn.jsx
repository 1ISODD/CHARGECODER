import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';
import logo_cc from './assets/logo_cc.png';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    navigate('/landing');
  };

  const handleSignUp = () => {
    navigate('/signup'); // Navigate to Signup page
  };

  return (
    <body class="login-page">
      <div class="login-container">
    <div className="login-box">
      <img src={logo_cc} alt="Logo" />
      <form onSubmit={handleSignIn}>
        <input 
          className="i1"
          type="email"
          value={email}
          placeholder="     email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input 
          className="i2"
          type="password"
          value={password}
          placeholder="     password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="fp">FORGOT PASSWORD?</p>
        <button className="loginb" type="submit">SIGN IN</button>
        <p>OR</p>
        <button className="signupb" type="button" onClick={handleSignUp}>SIGN UP</button>
      </form>
    </div>
    </div>
    </body>
  );
}

export default SignIn;
