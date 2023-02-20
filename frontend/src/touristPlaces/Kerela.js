import React from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import AboutSection from "../components/AboutSection";

import TouristPlaces from "../components/TouristPlaces";
import Footer from "../components/Footer";
import ProductCarousel from "../components/ProductCarousel";

const Kerela = () => {
  const tour = useSelector((state) => state.tour.tourInfo);
  const isMobile = useMediaQuery({ query: "(max-width: 650px)" });

  return (
    <div style={{ marginTop: "10vh" }}>
      <AboutSection tour={tour} isMobile={isMobile} index="2" />{" "}
      <ProductCarousel tour={tour} isMobile={isMobile} index="2" />
      <TouristPlaces tour={tour} isMobile={isMobile} index="2" />
      <Footer />
    </div>
  );
};

export default Kerela;
