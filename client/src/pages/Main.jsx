import React from 'react';
import { Profile } from '../components/Profile.jsx';
import Feed from '../components/Feed.jsx';

const Main = (props) => {
  return (
    <>
      <div className="home-container">
        <section className="home-faux-screen-border">
          <section className="home-faux-screen-container">
            <Profile profile={props.profile} />
            <Feed skillsSought={props.profile.skillsSought} />
          </section>
        </section>
      </div>
    </>
  );
};

export default Main;
