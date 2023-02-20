
import React from "react";
import TouristPlaces from "../components/TouristPlaces";
import Footer from "../components/Footer";
import ProductCarousel from "../components/ProductCarousel";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import AboutSection from "../components/AboutSection";

const HimachalPradesh = () => {
  const tour = useSelector((state) => state.tour.tourInfo);
  const isMobile = useMediaQuery({ query: "(max-width: 650px)" });

  return (
    <div style={{ marginTop: "10vh" }}>
      <AboutSection tour={tour} isMobile={isMobile} index="3" />{" "}
      <ProductCarousel tour={tour} isMobile={isMobile} index="3" />
      <TouristPlaces tour={tour} isMobile={isMobile} index="3" />
      <Footer />
    </div>
  );
};

export default HimachalPradesh;
