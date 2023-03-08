import React from 'react';
import { UserCard } from '../components/UserCard.jsx';

export default function Feed (){
    // logic here for amount of user cards needed
    const cards = [];

    const names = ["alex", "chris", "george", "nancy", "time"];

    for(let i = 0; i < names.length; i++){
      cards.push(<UserCard
        key={i} 
        name={names[i]}
        match={'100%'}
        skills={'react'}
      />);
    }
    return (
      <>
        <div className="feed-container">
              { cards }
        </div>
      </>  
    );
}