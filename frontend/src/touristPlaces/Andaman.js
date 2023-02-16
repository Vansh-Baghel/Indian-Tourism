import CarouselComponent from "../components/CarouselComponent";
import { SwiperSlide } from "swiper/react";
import React from "react";
import { useSelector } from "react-redux";

const Andaman = () => {
  const tour = useSelector((state) => state.tour.tourInfo);

  return (
    <div style={{ marginTop: "10vh" }}>
      <div className="text-black">HI</div>
      <CarouselComponent>
        {tour[0] !== undefined &&
          tour[0].products.map((product, index) => (
            <SwiperSlide
              key={index}
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <img
                src={product.image}
                alt={product.image}
                style={{ width: "70%" }}
              />
            </SwiperSlide>
          ))}
      </CarouselComponent>
    </div>
  );
};

export default Andaman;
