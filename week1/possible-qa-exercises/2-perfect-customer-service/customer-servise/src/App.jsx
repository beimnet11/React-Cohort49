import React from "react";
import Guarantee from "./Guarantee";
import coinImg from "./assets/coin.png";
import truckImg from "./assets/f-delivery.png";
import chatImg from "./assets/chat.png";

const App = () => {
  return (
    <div style = {{display : 'flex', justifyContent: 'space-around', padding:'20px'}}>
      <Guarantee img = {coinImg} title = "Money back guarantee" description = "We return your money if you are not satisfied with our service."/>
      <Guarantee img = {truckImg} title = "Fast delivery" description = "We deliver your order within 24 hours."/>
      <Guarantee img = {chatImg} title = "24/7 customer service" description = "Our customer service is available 24/7 to help you."/>
    </div>
  );
};

export default App;