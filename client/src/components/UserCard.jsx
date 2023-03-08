import React from 'react';
import shaggy from '../../assets/Characters/shaggy.png'

export const UserCard = () => {
  return (
    <>
      <div className="card">
        <div class="profile-photo-container">
          <img class="profile-photo" src={shaggy}></img>
        </div>
        <div className="card-body">
          <p>Username</p>
          <p>Match %</p>
          <p>Skills</p>
        </div>
      </div>
    </>
  );
};
