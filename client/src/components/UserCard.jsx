import React from "react";
// delete when done with dummy data
import Pic from '../../assets/placeholder.png';

export const UserCard = (props) => {
    return (
      <>
        <div className="card">
            <img src={Pic} style={{ width: 300, }}/>
            <div className="card-body">
                <p>Username: {props.name}</p>
                <p>Match:  {props.match}</p>
                <p>Skills: {props.skills}</p>
            </div>
        </div>
      </>  
    );
}