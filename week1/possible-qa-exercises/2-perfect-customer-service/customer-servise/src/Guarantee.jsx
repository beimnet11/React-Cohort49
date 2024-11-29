import React from "react";

const Guarantee = ({img, title, description}) => {
  return (
    <div style = {{textAlign: "center", margin: '20px'}}>
      <img src={img} alt={title} style={{width: '100px'}}/>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Guarantee;