import React from 'react';
import scoob from '../../assets/Characters/scoob.png'

export const Profile = () => {
  return (
    <>
      <div className="profile-container">
        <div className="profile-header">
          <div class="profile-photo-container">
            <img class="profile-photo" src={scoob}></img>
          </div>
          <h1>scoob</h1>
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
};
