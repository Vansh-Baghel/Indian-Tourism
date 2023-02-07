import { Grid } from "@mui/material";
import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div id="img" className="h-screen w-screen bg-cover bg-fixed" />
      <Grid
        className="absolute top-0 left-0 right-0 bottom-0"
        style={{
          margin: "auto",
          height: "30vh",
          width: "85vw",
          textAlign: "start",
        }}
      >
        <span className="text-black text-7xl" id="head">
          Indian Tours
        </span>
        <div
          className="font-poppins text-black"
          style={{ width: "80%" }}
        >
          We are here to introduce you tourist places in Indian states. With the
          diverse culture, there are variety of places to visit with unique things which you can buy
          from each place.
        </div>
      </Grid>
    </div>
  );
};

export default Home;
