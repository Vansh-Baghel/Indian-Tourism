import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { easeInOut, motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./ProductCarousel.scss";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const ProductCarousel = ({ tour, index, isMobile }) => {
  const [data, setData] = useState(false);

  useEffect(() => {
    tour.length === 5 && setData(tour[index].products);
  }, [tour]);

  return (
    <>
      <div>
        <div style={{ padding: isMobile ? "0 1rem" : "0 3rem" }}>
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
              style={{
                width: isMobile ? "280px" : "600px",
                height: isMobile ? "280px" : "600px",
              }}
              onClick={() => {
                setData(product);
              }}
            >
              <>
                <motion.img
                  src={product.image}
                  alt={product.name}
                  style={{ height: "100%" }}
                  initial={{ translateY: -180 }}
                  animate={{ translateY: 0 }}
                  transition={{ duration: 1, ease: easeInOut }}
                />
              </>
            </SwiperSlide>
          ))
        ) : (
          <>
            <SwiperSlide
              className="tourSwiperSlide"
              onClick={() => {
                setData(tour[index].products);
              }}
            >
              <img
                src={data.image}
                alt={data.name}
                style={{ height: isMobile && "50vh" }}
              />
              <motion.div
                className="text-black text-2xl font-bold"
                style={{ padding: isMobile && "1rem" }}
                initial={{ translateX: 20, opacity: 0 }}
                animate={{ translateX: 0, opacity: 1 }}
                transition={{ duration: 1.3, ease: easeInOut }}
              >
                {data.name}
              </motion.div>
              <motion.div
                className="text-black text-start"
                style={{ padding: isMobile && "1.5rem" }}
                initial={{ translateX: -20, opacity: 0 }}
                animate={{ translateX: 0, opacity: 1 }}
                transition={{ duration: 1.3, ease: easeInOut }}
              >
                {data.description}
              </motion.div>
            </SwiperSlide>
          </>
        )}
      </Swiper>
    </>
  );
};

export default ProductCarousel;
