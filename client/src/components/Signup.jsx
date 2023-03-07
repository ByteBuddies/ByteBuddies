import React from "react";

const Signup = () => {
    return (
        <>
            <div className="signup-container">
                <span>Username</span><input type='text'></input>
                <span>Name</span><input type='text'></input>
                <span>My Skills</span><input type='text'></input>
                <span>Sought Skills</span><input type='text'></input>
                <span>Current Project</span><input type='text'></input>
                <span>LinkedIn</span><input type='text'></input>
                <span>Github</span><input type='text'></input>
                <span>Email</span><input type='text'></input>
            </div>
        </>
    );
  };

  export default Signup;