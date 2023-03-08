import React from 'react';
import { UserCard } from '../components/UserCard.jsx';

export const Feed = () => {
  // logic here for amount of user cards needed
  return (
    <>
      <div className="feed-container">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </>
  );
};