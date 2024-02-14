import React from "react";

export const CarouselItem = ({ item, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      <div></div>
      <img className="carousel-img" alt="item icon" src={item.icon.default} />
      <div className="carousel-item-text">{item.description}</div>
    </div>
  );
};
