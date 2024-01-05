import React from "react";
import "./HeroContent.css";
import linkedInLogo from "../assets/brand/LinkedIn.png";
import gitHubLogo from "../assets/brand/github.png";
import heroPhoto from "../assets/foto.png";

export default function HeroContent({ content }) {
  return (
    <div className="hero-section">
      <div className="container hero-flex flex align-center">
        <div className="hero-left">
          <p className="font-light">{content.heroContent_Title}</p>
          <p className="font-bold">
            {content && content.heroContent_Context}
            <span className="shadow-1"></span>
          </p>
          <div className="hero-icons">
            <img src={linkedInLogo} alt="" />
            <img src={gitHubLogo} alt="" />
          </div>
          <p className="hero-info">
            {content && content.heroContent_Info_1}
            {"  "}
            <span className="info-span">
              {content && content.heroContent_Info_2}
            </span>{" "}
            {content && content.heroContent_Info_3}
            <span className="info-span">
              {content && content.heroContent_Info_4}
            </span>{" "}
            <br />
            {content && content.heroContent_Info_5}
            <span className="info-span">
              {content && content.heroContent_Info_6}
            </span>
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
