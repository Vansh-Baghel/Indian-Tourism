import React from "react";
import { Link } from "react-router-dom";
import ButtonWithEffect from "../components/ButtonWithEffect";
import "./TouristCard.css";

const TouristCard = ({ datas }) => {
  return (
    <>
      {datas.map((data, index) => (
        <>
          <div>
            <div>
              <h1
                style={{
                  textAlign: "left",
                  fontSize: "2rem",
                  paddingLeft: "3rem",
                }}
                className="m-6xl mobile:m-0"
              >
                {index + 1}. {data.name}
              </h1>
            </div>
            <div className="featured-link-1up v-space fixed-width ">
              <div className="featured-link-1up__wrapper">
                <div className="featured-link-1up__content">
                  <Link className="link link--default">
                    <div className="featured-link-1up__media">
                      <div className="featured-link-1up__image">
                        <picture className="js-object-fit">
                          <img src={data.img} alt="state" />
                        </picture>
                      </div>
                      <div className="featured-link-1up__heading">
                        <h3 className="heading featured-link-1up__heading-title">
                          Its capital is {data.capital}
                        </h3>
                        <p className="featured-link-1up__heading-description">
                          {data.history && data.history.slice(0, 160) + "..."}
                        </p>
                      </div>
                    </div>
                  </Link>
                  <div className="featured-link-1up__body">
                    <h5 className="heading featured-link-1up__title">
                      Explore programs &amp; opportunities:
                    </h5>
                    <ul className="featured-link-1up__list">
                      <li className="list__item">Business Programs</li>
                      <li className="list__item">Leasing Opportunities</li>
                      <li className="list__item">Finance Solutions</li>
                      <li className="list__item">RFPs</li>
                    </ul>
                    <Link
                      to={
                        data.name && data.name.toLowerCase().replace(" ", "-")
                      }
                    >
                      <ButtonWithEffect buttonText="Read More"></ButtonWithEffect>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default TouristCard;
