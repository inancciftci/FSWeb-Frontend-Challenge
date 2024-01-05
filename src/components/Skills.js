import React from "react";
import "./Skills.css";
import ellipseShape from "../assets/Ellipse11.png";

const skills = ["javascript", "react", "redux", "node", "vs-code", "figma"];

export default function Skills({ content }) {
  return (
    <div className="skills-section">
      <img className="ellipseShape" src={ellipseShape} alt="" />
      <div className="rectangleShape-skills"></div>
      <div className="container">
        <div className="skill-content">
          <h3 className="skill-section-title">
            {content && content.skills_Title}
          </h3>
          <div className="skill-imgs">
            {skills.map((skill) => (
              <div className="skill-img-box" key={skills.indexOf(skill)}>
                <img src={require(`../assets/${skill}.png`)} alt="" />
                <h4 className="skill-title">{skill}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
