import React from "react";
import "../../assets/day9/styles/index.css";
import CarouselPreview from "./CarouselPreview";
import ChevronIcon from "../../assets/day9/icons/chevron.svg";
import { useState } from "react";
const Carousel = () => {
  const images = [
    {
      id: 1,
      imagePath: "/assets/day9/images/dave-hoefler-okUIdo6NxGo-unsplash.jpg",
      imageBy: "Photo by Sonya Romanovska on Unsplash",
    },
    {
      id: 2,
      imagePath:
        "/assets/day9/images/eugene-golovesov-EXdXp7Z4X4w-unsplash.jpg",
      imageBy: "Photo by Romanovska Sonya on Unsplash",
    },
    {
      id: 3,
      imagePath:
        "/assets/day9/images/finding-dan-dan-grinwis-O35rT6OytRo-unsplash.jpg",
      imageBy: "Photo by Sonya Romanovska on Unsplash",
    },
    {
      id: 4,
      imagePath: "/assets/day9/images/jakob-owens-EwRM05V0VSI-unsplash.jpg",
      imageBy: "Photo by Sonya Romanovska on Unsplash",
    },
    {
      id: 5,
      imagePath:
        "/assets/day9/images/jennifer-reynolds-_8HI5xf4TkE-unsplash.jpg",
      imageBy: "Photo by Sonya Romanovska on Unsplash",
    },
    {
      id: 6,
      imagePath: "/assets/day9/images/sherman-yang-VBBGigIuaDY-unsplash.jpg",
      imageBy: "Photo by Sonya Romanovska on Unsplash",
    },
    {
      id: 7,
      imagePath: "/assets/day9/images/silas-baisch-Wn4ulyzVoD4-unsplash.jpg",
      imageBy: "Photo by Sonya Romanovska on Unsplash",
    },
    {
      id: 8,
      imagePath:
        "/assets/day9/images/sonya-romanovska-wzdXhyi3AiM-unsplash.jpg",
      imageBy: "Photo by Sonya Romanovska on Unsplash",
    },
    {
      id: 9,
      imagePath:
        "/assets/day9/images/vincentiu-solomon-ln5drpv_ImI-unsplash.jpg",
      imageBy: "Photo by Sonya Romanovska on Unsplash",
    },
    {
      id: 10,
      imagePath: "/assets/day9/images/kellen-riggin-SIBOiXKg0Ds-unsplash.jpg",
      imageBy: "Photo by Sonya Romanovska on Unsplash",
    },
    {
      id: 11,
      imagePath:
        "/assets/day9/images/rafael-hoyos-weht-zhkAp8DGkxw-unsplash.jpg",
      imageBy: "Photo by Sonya Romanovska on Unsplash",
    },
  ];

  const [displayImageIndex, setDisplayImageIndex] = useState(0);

  const onPreviewClick = (displayIndex) => {
    setDisplayImageIndex(displayIndex);
  };

  const onNext = () => {
    // if at end
    if (displayImageIndex === images.length - 1) {
      setDisplayImageIndex(0);
    } else {
      setDisplayImageIndex((state) => state + 1);
    }
  };

  const onPrevious = () => {
    if (displayImageIndex === 0) {
      setDisplayImageIndex(images.length - 1);
    } else {
      setDisplayImageIndex((state) => state - 1);
    }
  };

  return (
    <div className="carousel-container">
      <div className="carousel-top-section">
        <div className="carousel-navigator" onClick={onPrevious}>
          <img src={ChevronIcon} alt="" />
        </div>
        <div className="carousel-navigator" onClick={onNext}>
          <img src={ChevronIcon} alt="" />
        </div>
        <div className="carousel-main-container">
          <img
            src={images[displayImageIndex].imagePath}
            alt=""
            className="carousel-main-display"
          />

          <div className="carousel-main-description">
            {images[displayImageIndex].imageBy}
          </div>
        </div>
      </div>
      <div className="carousel-bottom-section">
        {images.map((image, index) => (
          <CarouselPreview
            key={image.id}
            isActive={displayImageIndex === index}
            {...image}
            onClick={() => {
              onPreviewClick(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
