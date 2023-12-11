import React, { useEffect, useState } from "react";
import axios from "axios";
import TouristPlaces from "../components/TouristPlaces";
import Footer from "../components/Footer";
import ProductCarousel from "../components/ProductCarousel";
import { useMediaQuery } from "react-responsive";
import AboutSection from "../components/AboutSection";
import TopContent from "../components/TopContent";
import vid from "../assests/Himachal.mp4";
import poster from "../assests/poster/himachal.jpeg";

const HimachalPradesh = () => {
  const [tour, setTour] = useState(false);

  const ENDPOINT_BACKEND = "http://localhost:5000";

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const response = await axios.get(`${ENDPOINT_BACKEND}/api/v1/tours`);
        setTour(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  const isMobile = useMediaQuery({ query: "(max-width: 650px)" });
  useEffect(() => window.scrollTo(0, 0), []);
  const overlapHeading = "Explore the state with us";
  const overlapDescription = "Collect the moments";

  return (
    <div>
      <TopContent
        vidLink={vid}
        overlapHeading={overlapHeading}
        overlapDescription={overlapDescription}
        poster={poster}
      />

      <AboutSection tour={tour} isMobile={isMobile} index='2' />
      <ProductCarousel tour={tour} isMobile={isMobile} index='2' />
      <TouristPlaces tour={tour} isMobile={isMobile} index='2' />
      <Footer />
    </div>
  );
};

export default HimachalPradesh;
