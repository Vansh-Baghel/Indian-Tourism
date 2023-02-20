import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./TouristPlaces.scss";

// import required modules
import { Keyboard, EffectFade, Navigation, Pagination } from "swiper";

const TouristPlaces = ({ tour, index, isMobile }) => {
  return (
    <>
      <div>
        <div style={{ padding: "0 3rem" }}>
          <h2
            style={{
              fontSize: isMobile ? "1.5rem" : "2.5rem",
              padding: isMobile ? "1rem 0 0 0 " : "1rem",
              textAlign: "start",
              fontFamily: "Kanit",
              margin: "1rem",
              padding: "1rem",
            }}
          >
            Places To Visit
          </h2>
        </div>
      </div>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        slidesPerView="auto"
        navigation={true}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Keyboard]}
        className="mySwiper"
      >
        {tour[index] !== undefined &&
          tour[index].tourist.map((product, index) => (
            <SwiperSlide
              key={index}
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <img src={product.images} alt={product.images} />
              <div className="prod-blackBlur">
                <div className="prod-title">{product.name}</div>
                <div className="prod-name">{product.name}</div>
                <div className="prod-description">
                  {isMobile ? product.info.slice(0, 250) + "..." : product.info}
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default TouristPlaces;
