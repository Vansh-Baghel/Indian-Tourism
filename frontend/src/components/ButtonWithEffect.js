import React from "react";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import "./ButtonWithEffect.css";
import { Link } from "react-scroll";

const ButtonWithEffect = ({ buttonText, textColor, borderColor, id }) => {
  textColor = !textColor ? "yellow" : textColor;
  borderColor = !borderColor ? "yellow" : borderColor;

  return (
    <Link to={id ? id : ""} smooth>
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
        >
          {buttonText}
        </Box>
      </Button>
    </Link>
  );
};

export default ButtonWithEffect;
