import React from "react";
// delete when done with dummy data
import shaggy from '../../assets/Characters/shaggy.png'

export const UserCard = (props) => {
  return (
    <>
      <div className="card">
        <div class="profile-photo-container">
          <img class="profile-photo" src={shaggy} style={{ width: 300, }}/>
        </div>
        <div className="card-body">
          <p>Username: {props.name}</p>
          <p>Match: {props.match}</p>
          <p>Skills: {props.skills}</p>
        </div>
      </div>
    </>
  );
};
