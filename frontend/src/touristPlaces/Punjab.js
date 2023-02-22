import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import AboutSection from "../components/AboutSection";

import TouristPlaces from "../components/TouristPlaces";
import Footer from "../components/Footer";
import ProductCarousel from "../components/ProductCarousel";
import TopContent from "../components/TopContent";
import vid from "../assests/Punjab.mp4";
import poster from "../assests/poster/punjab.jpeg";

const Punjab = () => {
  const tour = useSelector((state) => state.tour.tourInfo);
  const isMobile = useMediaQuery({ query: "(max-width: 650px)" });
  useEffect(() => window.scrollTo(0, 0), []);
  const overlapHeading = "Explore the state with us" 
  const overlapDescription = "Collect the moments" 

  return (
    <div >
      <TopContent vidLink={vid} overlapHeading={overlapHeading} overlapDescription={overlapDescription} poster={poster}/>
      <AboutSection tour={tour} isMobile={isMobile} index="3" />
      <ProductCarousel tour={tour} isMobile={isMobile} index="3" />
      <TouristPlaces tour={tour} isMobile={isMobile} index="3" />
      <Footer />
    </div>
  );
};

export default Punjab;
