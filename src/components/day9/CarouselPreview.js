import React from "react";
import "../../assets/day9/styles/preview.css";
const CarouselPreview = ({ imagePath, onClick, isActive }) => {
  return (
    <div className="carousel-preview-container" onClick={onClick}>
      <img src={imagePath} alt="" className={`${isActive ? "carousel-item-active":""}`} />
      {/* {imagePath} */}
    </div>
  );
};

export default CarouselPreview;