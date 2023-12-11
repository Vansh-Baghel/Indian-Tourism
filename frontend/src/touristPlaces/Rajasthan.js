import React, { useEffect, useState } from "react";
import axios from "axios";

import { useMediaQuery } from "react-responsive";
import AboutSection from "../components/AboutSection";
import TopContent from "../components/TopContent";

import Footer from "../components/Footer";
import ProductCarousel from "../components/ProductCarousel";
import vid from "../assests/rajasthan.mp4";
import poster from "../assests/poster/rajasthan.jpeg";
import TouristPlaces from "../components/TouristPlaces";

const Rajasthan = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 650px)" });
  const overlapHeading = "Explore the state with us";
  const overlapDescription = "Collect the moments";

   const [data, setData] = useState(false);

   const ENDPOINT_BACKEND = "http://localhost:5000";

   useEffect(() => {
     const fetchData = async () => {
       try {
         await new Promise((resolve) => setTimeout(resolve, 1000));

         const response = await axios.get(`${ENDPOINT_BACKEND}/api/v1/tours`);
         setData(response.data.data);
       } catch (error) {
         console.error("Error fetching data:", error.message);
       }
     };

     fetchData();
   }, []);

  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <div>
      <TopContent
        vidLink={vid}
        overlapHeading={overlapHeading}
        overlapDescription={overlapDescription}
        poster={poster}
      />
      <AboutSection tour={data} isMobile={isMobile} index='0' />
      <ProductCarousel isMobile={isMobile} index='0' />
      <TouristPlaces tour={data} isMobile={isMobile} index='0' />
      <Footer />
    </div>
  );
};

export default Rajasthan;
