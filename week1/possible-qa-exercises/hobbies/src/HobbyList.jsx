import React from 'react';
import Hobby from './Hobby';

const HobbyList = () => {
  //define hobbies array
const hobbies = ['surfing', 'reading', 'coding', 'hiking','swimming','biking','running'];



return(
  <div>
    <h2> my Hobbies</h2>
    <ul>
      {hobbies.map((hobby, index) => (
        // render Hobby component for each hobby in the array
        <Hobby key = {index} hobby = {hobby} />

      ))}
    </ul>
  </div>
);
};
export default HobbyList;