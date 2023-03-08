import React from 'react';
import { Link } from 'react-router-dom';
import loginPic from '../../assets/logo-dark.png';

const Login = () => {

  const login = async (e) => {
    e.preventDefault();
    const obj = {}
    for (let ele of e.target.parentNode.childNodes) {
      if (ele.id) {
        obj[ele.id] = ele.value
      }
    }
    try {
      const response = await (fetch('http://localhost:3000/api/login', {method: "POST", headers:{
        "Access-Control-Allow-Origin'": 'http://localhost:8080',
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)}))
      console.log(await response.json())
    }catch(err) {
      console.log(err)
    }

  }
  return (
    <div className="flex-container">
      <div id="image-container">
        <img id="login-sidebar-image" src={loginPic}></img>
      </div>
      <div id="login-container">
        <div id="login-group">
          <h1>Byte Buddies</h1>
          <form id="login-form">
            <h2>Login</h2>
            <input id='email'className="login-input" placeholder="username"></input>
            <br></br>
            <input id="password"className="login-input" placeholder="password"></input>
            <br></br>
            <button id="login-button" onClick={login} >Log In</button>
            <br></br>
            <Link to="/signup" id="sign-up-link">Sign Up</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
