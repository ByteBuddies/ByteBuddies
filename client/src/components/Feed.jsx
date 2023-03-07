import React from "react";
import { UserCard } from "../components/UserCard.jsx";

export default function Feed (){
    // logic here for amount of user cards needed
    return (
      <>
        <div className="feed-container">
            <h1>Feed</h1>
            <div className="card-container">
                <UserCard/>
                <UserCard/>
                <UserCard/>
            </div>
        </div>
      </>  
    );
}