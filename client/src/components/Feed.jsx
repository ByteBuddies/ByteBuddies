import React from 'react';
import { UserCard } from '../components/UserCard.jsx';
import fred from '../../assets/Characters/fred.png'
import daph from '../../assets/Characters/daph.png'
import velma from '../../assets/Characters/velma.png'
import shaggy from '../../assets/Characters/shaggy.png'

export default function Feed (){
    // logic here for amount of user cards needed
    const cards = [];

    const names = ["shaggy", "velma", "fred", "daph"];

    for(let i = 0; i < names.length; i++){
      let image;
      if (names[i] === "shaggy"){image = shaggy}
      if (names[i] === "velma"){image = velma}
      if (names[i] === "fred"){image = fred}
      if (names[i] === "daph"){image = daph}
      cards.push(<UserCard
        key={i}
        img={image}
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