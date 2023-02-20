
import React, { useEffect } from "react";
import TouristPlaces from "../components/TouristPlaces";
import Footer from "../components/Footer";
import ProductCarousel from "../components/ProductCarousel";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import AboutSection from "../components/AboutSection";

const HimachalPradesh = () => {
  const tour = useSelector((state) => state.tour.tourInfo);
  const isMobile = useMediaQuery({ query: "(max-width: 650px)" });
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div style={{ marginTop: "10vh" }}>
      <AboutSection tour={tour} isMobile={isMobile} index="4" />
      <ProductCarousel tour={tour} isMobile={isMobile} index="4" />
      <TouristPlaces tour={tour} isMobile={isMobile} index="4" />
      <Footer />
    </div>
  );
};

export default HimachalPradesh;
