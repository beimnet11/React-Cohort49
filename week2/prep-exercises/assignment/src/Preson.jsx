

function Person({ firstName, lastName, email }) {
 if (!firstName || !lastName || !email) {
  return <p> Loading</p>;
 }
 return (
  <ul>
    <li> First name: {firstName}</li>
    <li> Last name: {lastName}</li>
    <li> Email: {email}</li>
  </ul>
 );
};

export default Person;