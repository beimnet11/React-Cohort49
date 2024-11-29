import React from "react";
import Hobby from "./Hobby";

const hobbies = ['skydiving', 'fishing', 'rock climbing', 'running', 'cycling', 'hiking', 'swimming', 'dancing', 'singing', 'painting'];
function HobbyList(){
  return (
    <div>
      {hobbies.map((hobby, index) => (<Hobby key={index} hobbyName={hobby} />))}
    </div>
  );
}

export default HobbyList;
