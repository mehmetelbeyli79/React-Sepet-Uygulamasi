import React from "react";
import "./cardTitle.css";
function CardTitle({ title }) {
  return (
    <div className="card-title">
      <h3>{title}</h3>
    </div>
  );
}

export default CardTitle;
