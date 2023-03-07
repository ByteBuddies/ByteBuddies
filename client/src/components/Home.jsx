import React from "react";
import { Profile } from "../components/Profile.jsx";
import { Feed } from "../components/Feed.jsx";

export const Home = () => {
    return (
      <>
        <div className="home-container">
          <Profile id="profile-window"/>
          <Feed id="feed-window"/>
        </div>
      </>  
    );
}