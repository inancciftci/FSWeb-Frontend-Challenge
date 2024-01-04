import React from "react";
import "./HeroContent.css";
import linkedInLogo from "../assets/brand/LinkedIn.png";
import gitHubLogo from "../assets/brand/github.png";
import heroPhoto from "../assets/foto.png";

export default function HeroContent({ context }) {
  return (
    <div className="hero-section">
      <div className="container hero-flex flex align-center">
        <div className="hero-left">
          <p className="font-light">{context.heroContent_Title}</p>
          <p className="font-bold">
            {context && context.heroContent_Context}
            <div className="shadow-1"></div>
          </p>
          <div className="hero-icons">
            <img src={linkedInLogo} alt="" />
            <img src={gitHubLogo} alt="" />
          </div>
          <p className="hero-info">
            <p>
              {context && context.heroContent_Info_1}{" "}
              <span className="info-span">
                {context && context.heroContent_Info_2}
              </span>{" "}
              {context && context.heroContent_Info_3}
              <span className="info-span">
                {context && context.heroContent_Info_4}
              </span>
            </p>
            <p>
              {context && context.heroContent_Info_5}
              <span className="info-span">
                {context && context.heroContent_Info_6}
              </span>
            </p>
          </p>
        </div>
        <div className="hero-right">
          <img className="hero-img" src={heroPhoto} alt="" />

          <div className="rectangle-effect-1"></div>
        </div>
      </div>
    </div>
  );
}
