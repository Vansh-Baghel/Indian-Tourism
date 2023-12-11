import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./TouristPlaces.scss";
import LocationOnIcon from "@mui/icons-material/LocationOn";

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
          tour[index].tourist.map((place, index) => (
            <SwiperSlide
              key={index}
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <img
                src={place.images}
                alt={place.images}
                style={{ objectFit: "cover" }}
              />
              <div className="place-blackBlur">
                <div className="flex justify-end align-bottom">
                  <div className="place-title">{place.name}</div>
                  <a
                    href={place.location}
                    style={{
                      fontSize: isMobile ? "0" : "4rem",
                    }}
                  >
                    <LocationOnIcon
                      style={{
                        width: isMobile ? "4rem" : "5rem",
                        height: isMobile ? "3rem" : "5rem",
                      }}
                    />
                  </a>
                </div>
                <div className="place-description">
                  {place.info.slice(0, 250) + "..."}
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default TouristPlaces;
