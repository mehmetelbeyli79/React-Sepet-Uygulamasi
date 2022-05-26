import React from "react";
import "./cardInfo.css";
function CardInfo({ info }) {
  return (
    <div className="card-info">
      <p>{info}</p>
    </div>
  );
}

export default CardInfo;
