import React from "react";

import "./card.styles.scss";

function Card({ type, title, paragrapth, img, color }) {
  return (
    <div className="body__projects__cards__card">
      <div className="body__projects__cards__card__picture">
        <img src={img} alt=""></img>
      </div>
      <div className="body__projects__cards__card__title">
        <h5 style={{ color: color }}>{type}</h5>
        <h4>{title}</h4>
        <p>
          {paragrapth}
          <a> Read More</a>
        </p>
      </div>
    </div>
  );
}

export default Card;
