import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import AboutSection from "../components/AboutSection";
import TopContent from "../components/TopContent";

import TouristPlaces from "../components/TouristPlaces";
import Footer from "../components/Footer";
import ProductCarousel from "../components/ProductCarousel";
import vid from "../assests/rajasthan.mp4";
import poster from "../assests/poster/rajasthan.jpeg";

const Rajasthan = () => {
  const tour = useSelector((state) => state.tour.tourInfo);
  const isMobile = useMediaQuery({ query: "(max-width: 650px)" });
  const overlapHeading = "Explore the state with us";
  const overlapDescription = "Collect the moments";

  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <div>
      <TopContent
        vidLink={vid}
        overlapHeading={overlapHeading}
        overlapDescription={overlapDescription}
        poster={poster}
      />
      <AboutSection tour={tour} isMobile={isMobile} index="0" />
      <ProductCarousel tour={tour} isMobile={isMobile} index="0" />
      <TouristPlaces tour={tour} isMobile={isMobile} index="0" />
      <Footer />
    </div>
  );
};

export default Rajasthan;
