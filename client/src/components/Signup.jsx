import React, {useState} from "react";

const Signup = () => {
  
  const Signup = async (e) => {
    const childNodes = e.target.parentNode.childNodes
    const obj = {}
    for (let ele of childNodes) {
      if (ele.id){
        obj[ele.id]= ele.value 
      }
    }
    try {
      const data = await fetch('http://localhost:3000/api/signup', {
        method: "POST", 
        headers: {
          "Access-Control-Allow-Origin'": 'http://localhost:8080',
          "Content-Type": "application/json" 
        },
        body: JSON.stringify(obj)
      })
      console.log(await data.json())
    }catch(err) {
      console.log(err)
    }
  }

  return (
    <>
      <div className="signup-container">
        <span>Username</span><input id='username'type='text'></input>
        <span>Name</span><input id='name' type='text'></input>
        <span>My Skills</span><input id='myskill' type='text'></input>
        <span>Sought Skills</span><input id='skill' type='text'></input>
        <span>Current Project</span><input id='project' type='text'></input>
        <span>LinkedIn</span><input id='linkedin' type='text'></input>
        <span>Github</span><input id='github' type='text'></input>
        <span>Email</span><input id='email' type='text'></input>
        <span>Password</span><input id='password' type='text'></input>
        <button onClick={Signup}>signup</button>
      </div>
    </>
  );
  };

  export default Signup;