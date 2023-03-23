import React from "react";
// delete when done with dummy data

export const UserCard = (props) => {
  return (
    <>
      <div className="card">
        <div class="profile-photo-container">
          <img class="profile-photo" src={props.img} style={{ width: 300, }}/>
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
