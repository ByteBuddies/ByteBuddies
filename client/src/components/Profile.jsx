import React from "react";

export const Profile = (props) => {
    return (
      <>
        <div className="profile-container">
            <div className="profile-header">
                <img></img>
                <h1>{props.profile.username}</h1>
            </div>
            <div className="profile-body">
                <p>{props.profile.firstName} {props.profile.lastName}</p>
                <p>My Skills: {props.profile.skills}</p>
                <p>Sought Skills: {props.profile.skillsSought}</p>
                <p>Current Project: {props.profile.currentProject}</p>
                <p>LinkedIn: {props.profile.linkedIn}</p>
                <p>GitHub: {props.profile.github}</p>
            </div>
        </div>
      </>  
    );
}