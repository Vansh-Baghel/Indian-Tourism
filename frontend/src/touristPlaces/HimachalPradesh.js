import ProductCarousel from "../components/TouristPlaces";
import React from "react";

import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import AboutSection from "../components/AboutSection";

const HimachalPradesh = () => {
  const tour = useSelector((state) => state.tour.tourInfo);
  const isMobile = useMediaQuery({ query: "(max-width: 650px)" });

  return (
    <div style={{ marginTop: "10vh" }}>
      <AboutSection tour={tour} isMobile={isMobile} index="3" />
      <ProductCarousel isMobile={isMobile} tour={tour} index="3"/>
    </div>
  );
};

export default HimachalPradesh;
