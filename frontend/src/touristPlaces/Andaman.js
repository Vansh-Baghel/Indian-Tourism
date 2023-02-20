import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import AboutSection from "../components/AboutSection";
import TouristPlaces from "../components/TouristPlaces";
import Footer from "../components/Footer";
import ProductCarousel from "../components/ProductCarousel";
import TopContent from "../components/TopContent";
import prod from "../assests/production ID_4120588.mp4"

const Andaman = () => {
  const tour = useSelector((state) => state.tour.tourInfo);
  const isMobile = useMediaQuery({ query: "(max-width: 650px)" });
  const overlapHeading = "Explore the state with us" 
  const overlapDescription = "Explore the state with us" 
  const poster = "https://www.differenttruths.com/wp-content/uploads/2021/08/best-time-to-visit-Andaman-and-nicobar-islands-Feature-1080x720-1.jpg" 

  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div style={{ marginTop: "10vh" }}>
      <TopContent vidLink={prod} overlapHeading={overlapHeading} overlapDescription={overlapDescription} poster={poster}/>
      <AboutSection tour={tour} isMobile={isMobile} index="0" />
      <ProductCarousel tour={tour} isMobile={isMobile} index="0" />
      <TouristPlaces tour={tour} isMobile={isMobile} index="0" />
      <Footer />
    </div>
  );
};

export default Andaman;
