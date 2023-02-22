import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const TopContent = ({ vidLink, overlapHeading, overlapDescription, poster }) => {
  return (
    <div>
      <div
        id="background-gif"
        className="relative top-0"
        style={{
          backgroundColor: "black",
          width: "calc(99vw - 2px)",
          height: "80vh",
        }}
      >
        <video
          autoPlay
          loop
          muted
          poster={poster}
          className="w-full h-full bg-right object-cover opacity-70"
        >
          <source
            src={vidLink}
            type="video/mp4"
          />
        </video>
        <Grid
          className="absolute top-0 left-0 right-0 bottom-0"
          style={{
            margin: "auto",
            height: "10vh",
            width: "65vw",
            textAlign: "start",
          }}
        >
          <Typography
            variant="h2"
            className="font-bold font-roboto text-neutral-300"
          >
            {overlapHeading}
          </Typography>
          <div
            className="font-roboto text-neutral-300"
            style={{ width: "calc(((((1366px - 512px)/12) * 6) + 192px) * 1)" }}
          >
            {overlapDescription}
          </div>
        </Grid>
      </div>
    </div>
  );
};

export default TopContent;
