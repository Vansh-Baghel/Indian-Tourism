import React from "react";

const AboutSection = ({ tour, isMobile, index, id }) => {
  const aboutTour = tour[index] !== undefined && tour[index].about;
  const tourStateName = tour[index] !== undefined && tour[index].name;
  const visitTime = tour[index] !== undefined && tour[index].climate;
  const history = tour[index] !== undefined && tour[index].history;

  return (
    <>
      <div style={{ margin: "1.5rem", color: "black" }} id={id}>
        <div style={{ padding: "0 3rem" }}>
          <h2
            style={{
              fontSize: "2.5rem",
              padding: "1rem",
              margin: "1rem",
              textAlign: "start",
              fontFamily: "Kanit",
            }}
          >
            About {tourStateName}
          </h2>
          <p
            style={{
              lineHeight: "2.1rem",
              margin: isMobile ? 0 : "0.5rem 1.5rem 3.5rem 3rem",
              fontSize: "1.2rem",
              textAlign: "start",
            }}
          >
            {aboutTour}
          </p>
        </div>
        <div style={{ padding: "0 3rem" }}>
          <h2
            style={{
              fontSize: "2.5rem",
              padding: "1rem",
              margin: "1rem",
              textAlign: "start",
              fontFamily: "Kanit",
            }}
          >
            Best Time To Visit
          </h2>
          <p
            style={{
              lineHeight: "2.1rem",
              margin: isMobile
                ? 0
                : "0.5rem 1.5rem 3.5rem 3rem",
              fontSize: "1.2rem",
              textAlign: "start",
            }}
          >
            {visitTime}
          </p>
        </div>
        <div style={{ padding: "0 3rem" }}>
          <h2
            style={{
              fontSize: "2.5rem",
              padding: "1rem",
              margin: "1rem",
              textAlign: "start",
              fontFamily: "Kanit",
            }}
          >
            History
          </h2>
          <p
            style={{
              lineHeight: "2.1rem",
              margin: isMobile
                ? 0
                : "0.5rem 1.5rem 3.5rem 3rem",
              fontSize: "1.2rem",
              textAlign: "start",
            }}
          >
            {history}
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
