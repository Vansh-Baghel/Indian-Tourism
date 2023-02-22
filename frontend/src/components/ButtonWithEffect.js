import React from "react";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import "./ButtonWithEffect.css";

const ButtonWithEffect = ({ buttonText, textColor, borderColor, id }) => {
  textColor = !textColor ? "yellow" : textColor;
  borderColor = !borderColor ? "yellow" : borderColor;

  return (
      <Button
        disableRipple
        className="rounded-md inline-flex justify-center items-center text-base"
        style={{
          border: `2px solid ${borderColor}`,
          borderLeft: `5px solid ${borderColor}`,
          margin: "2rem",
          color: `${textColor}`,
        }}
        id="buttonBackgroundEffect"
      >
        <Box
          sx={{
            backgroundColor: "transparent",
            borderRadius: "5px",
            padding: ".5rem 2rem",
          }}
          id="ButtonBox"
        >
          {buttonText}
        </Box>
      </Button>
  );
};

export default ButtonWithEffect;
