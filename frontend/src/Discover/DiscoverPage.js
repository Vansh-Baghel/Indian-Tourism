import React from "react";
import Footer from "../components/Footer";
import AboutUs from "./AboutUs";
import Home from "./Home";
import TouristCard from "./TouristCard";

const DiscoverPage = ({ datas }) => {
  return (
    <div>
      <Home />
      <AboutUs />
      <TouristCard datas={datas} />
      <Footer />
    </div>
  );
};

export default DiscoverPage;
