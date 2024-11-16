import { useState, useEffect } from 'react';
import Person from './Preson';

function PersonController() {
  const [person, setPerson] = useState([null]);

  const getRandomPerson = async () => {
    try{
    const response = await fetch ('https://randomuser.me/api?result=1');
    const data = await response.json();
    const user = data.results[0];
    setPerson({
      firstName: user.name.first,
      lastName: user.name.last,
      email: user.email,
    });
  } catch (error){
    console.error('error fetching data:', error);
  }
};

useEffect (() => {
  getRandomPerson();
}, []);

return (
  <div>
    <button onClick={getRandomPerson}>Get Random Person</button>
    <Person
      firstName = {person.firstName}
      lastName = {person.lastName}
      email = {person.email}
    />
  </div>
);
}

export default PersonController;
