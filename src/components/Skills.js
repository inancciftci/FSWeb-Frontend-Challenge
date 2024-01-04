import React from "react";
import "./Skills.css";
import jsLogo from "../assets/js-logo 1.png";
import reactLogo from "../assets/Rectangle 35.png";
import reduxLogo from "../assets/Group 101.png";
import nodeLogo from "../assets/node-logo 1.png";
import vsCodeLogo from "../assets/vs-code.png";
import figmaLogo from "../assets/figma-logo 1.png";
import ellipseShape from "../assets/Ellipse11.png";

export default function Skills({ context }) {
  return (
    <div className="skills-section">
      <img className="ellipseShape" src={ellipseShape} alt="" />
      <div className="rectangleShape-skills"></div>
      <div className="container">
        <div className="skill-content">
          <h3 className="skill-section-title">
            {context && context.skills_Title}
          </h3>
          <div className="skill-imgs">
            <div className="skill-img-box">
              <img src={jsLogo} alt="" />
              <h4 className="skill-title">javascript</h4>
            </div>
            <div className="skill-img-box">
              <img src={reactLogo} alt="" />
              <h4 className="skill-title">react</h4>
            </div>
            <div className="skill-img-box">
              <img src={reduxLogo} alt="" />
              <h4 className="skill-title">redux</h4>
            </div>
            <div className="skill-img-box">
              <img src={nodeLogo} alt="" />
              <h4 className="skill-title">node</h4>
            </div>
            <div className="skill-img-box">
              <img src={vsCodeLogo} alt="" />
              <h4 className="skill-title">vs code</h4>
            </div>
            <div className="skill-img-box">
              <img src={figmaLogo} alt="" />
              <h4 className="skill-title">figma</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
