import React from "react";
import { Carousel } from "react-responsive-carousel";

import { img } from "./images/data";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carousel.css";

const CarouselEffect = () => {
  return (
    <div className="carousel-container">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((imageItemLink) => (
          <div className="image-wrapper">
            <img src={imageItemLink} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselEffect;
