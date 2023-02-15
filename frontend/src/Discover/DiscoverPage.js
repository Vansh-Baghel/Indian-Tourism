import React from "react";
import AboutUs from "./AboutUs";
import Home from "./Home";
import TouristCard from "./TouristCard";

const DiscoverPage = ({datas}) => {

  return (
    <div>
      <Home />
      <AboutUs />
      <TouristCard datas={datas}/>
    </div>
  );
};

export default DiscoverPage;
