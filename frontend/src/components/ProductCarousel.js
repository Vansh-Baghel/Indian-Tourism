import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./style.scss";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const ProductCarousel = ({ tour, index }) => {
  const [data, setData] = useState(false);

  useEffect(() => {
    tour[index].products !== undefined && setData(tour[index].products)
  } , [])

  return (
    <>
      <div style={{ margin: "1.5rem", marginTop: "8rem", color: "black" }}>
        <div style={{ padding: "0 3rem" }}>
          <h2
            style={{
              fontSize: "2.5rem",
              textAlign: "start",
              fontFamily: "Kanit",
              margin: "1rem",
              padding: "1rem",
            }}
          >
            Products To Buy
          </h2>
        </div>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="tourSwiper"
      >
        {data.length > 1 ? (
          data.map((product, index) => (
            <SwiperSlide
              className="tourSwiperSlide"
              onClick={() => {
                setData(product);
              }}
            >
              <>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ height: "100%" }}
                />
              </>
            </SwiperSlide>
          ))
        ) : (
          <>
            <img src={data.image} alt={data.name} style={{ height: "65%" }} />
            <div className="text-black">{data.name}</div>
            <div className="text-black">{data.description}</div>
          </>
        )}
      </Swiper>
      ;
    </>
  );
};

export default ProductCarousel;
