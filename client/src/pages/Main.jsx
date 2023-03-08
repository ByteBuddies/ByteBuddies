import React from "react";
import { Profile } from "../components/Profile.jsx";
import Feed from "../components/Feed.jsx";

const Main = (props) => {
    return (
        <>
          <div className="home-container">
            <Profile profile={props.profile}/>
            <Feed skillsSought={props.profile.skillsSought}/>
          </div>
        </>  
      );
  };

  export default Main;