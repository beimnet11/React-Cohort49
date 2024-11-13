import React from "react";
import Guarantee from "./Guarancy";

const App = () => {
  return (
    <div className = 'guarantee-container'>
      <Guarantee
        img = '../assets/chat.png'
        title = '24/7 Customer Service'
        description = 'We are here to help you anytime, anywhere'
      />
      <Guarantee
        img = '.../assets\exercises/coin.png'
        title = 'Money Back Guarantee'
        description = 'We will refund your money if you are not satisfied'
      />
      </div>

      );

};

export default App;
