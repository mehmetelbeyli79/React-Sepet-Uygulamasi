import React from "react";
import CardImage from "../card-image/CardImage";
import CardInfo from "../card-info/CardInfo";
import CardTitle from "../card-title/CardTitle";
import "./card.css";
function Card({ title, image, info, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-body">
        <CardTitle title={title} />
        <CardImage image={image} />
        <CardInfo info={info} />
      </div>
    </div>
  );
}

export default Card;
