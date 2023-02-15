import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper";
import "./Carousel.css"

import "swiper/css";
import "swiper/css/effect-fade";

const CarouselComponent = (props) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <div>
      <div class="swiper mySwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">{props.children}</div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default CarouselComponent;
