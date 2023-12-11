import React from "react";
import Footer from "../components/Footer";
import AboutUs from "./AboutUs";
import Home from "./Home";
import TouristCard from "./TouristCard";

const DiscoverPage = () => {
  return (
    <div>
      <Home />
      <AboutUs />
      <TouristCard />
      <Footer />
    </div>
  );
};

export default DiscoverPage;
