import React from 'react';
import { Link } from 'react-router-dom';
import loginPic from '../../assets/logo-dark.png';

const Login = () => {
  return (
    <div class="flex-container">
      <div id="image-container">
        <img id="login-sidebar-image" src={loginPic}></img>
      </div>
      <div id="login-container">
        <div id="login-group">
          <h1>Byte Buddies</h1>
          <form id="login-form">
            <h2>Login</h2>
            <input class="login-input" placeholder="username"></input>
            <br></br>
            <input class="login-input" placeholder="password"></input>
            <br></br>
            <button id="login-button">Log In</button>
            <br></br>
            <Link to="/signup" id="sign-up-link">Sign Up</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
