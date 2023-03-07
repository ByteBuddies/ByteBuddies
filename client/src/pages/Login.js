import React from 'react';
import { Link } from 'react-router-dom';
import loginPic from '../../assets/login.png';

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
            <input class="login-input"></input>
            <input class="login-input"></input>
            <button>Log In</button>
            <Link to="/">Sign Up</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
