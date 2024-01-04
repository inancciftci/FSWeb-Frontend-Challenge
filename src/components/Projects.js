/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Projects.css";
import contextPhoto1 from "../assets/context-1.png";
import contextPhoto2 from "../assets/context-2.png";

export default function Projects({ context }) {
  return (
    <div className="projects-section">
      <div className="container projects-flex">
        <h3 className="projects-title">{context && context.projects_title}</h3>
        <div className="projects-context">
          <div className="left-context">
            <h4 className="context-title">
              {context && context.projects_left_title}
            </h4>
            <p className="context-p">{context && context.projects_left_p}</p>
            <div className="used-techs">
              <span className="tech">react</span>
              <span className="tech">vercel</span>
              <span className="tech">axios</span>
              <span className="tech">router</span>
            </div>
            <div className="project-links">
              <a href="#">{context && context.projects_link_1}</a>
              <a href="#">{context && context.projects_link_2}</a>
            </div>
            <div className="img-placeholder-1"></div>
            <img src={contextPhoto1} alt="context" className="context-img" />
          </div>
          <div className="right-context">
            <h4 className="context-title">
              {context && context.projects_right_title}
            </h4>
            <p className="context-p">{context && context.projects_right_p}</p>
            <div className="used-techs">
              <span className="tech">react</span>
              <span className="tech">redux</span>
              <span className="tech">axios</span>
              <span className="tech">router</span>
              <span className="tech">vercel</span>
            </div>
            <div className="project-links">
              <a href="#">{context && context.projects_link_1}</a>
              <a href="#">{context && context.projects_link_2}</a>
            </div>
            <div className="img-placeholder-2"></div>
            <img src={contextPhoto2} alt="context" className="context-img" />
          </div>
        </div>
        <div className="bottom-context">
          <div className="bottom-left-context">
            <h3 className="left-context-title">
              <span className="shadow-bottom">
                {context && context.footer_title_1}
                <div className="shadow-bottom-box"></div>
              </span>{" "}
              <br />
              {context && context.footer_title_2}
            </h3>
          </div>
          <div className="bottom-right-context">
            <a href="#" className="bottom-link">
              Github
            </a>
            <a href="#" className="bottom-link">
              Personal Blog
            </a>
            <a href="#" className="bottom-link">
              Linkedin
            </a>
            <a href="#" className="bottom-link">
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
