import React from "react";

export const Profile = () => {
    return (
      <>
        <div className="profile-container">
            <div className="profile-header">
                <img></img>
                <h1>UserName</h1>
            </div>
            <div className="profile-body">
                <p>Name</p>
                <p>My Skills</p>
                <p>Sought Skills</p>
                <p>Current Project</p>
                <p>LinkedIn</p>
                <p>GitHub</p>
            </div>
        </div>
      </>  
    );
}