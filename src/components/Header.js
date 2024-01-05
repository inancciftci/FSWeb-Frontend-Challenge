import React, { useContext } from "react";
import "./Header.css";
import ellipse10 from "../assets/Ellipse-10.png";
import { ThemeContext } from "../context/ThemeContext";
import { LangContext } from "../context/LangContext";

export default function Header(props) {
  const { themeText, checkedValue, changeTheme } = useContext(ThemeContext);
  const { lang, changeLang } = useContext(LangContext);
  return (
    <div className="header">
      <div className="container flex flex-end header-right align-center">
        <img className="top-img" src={ellipse10} alt="" />

        <div className="header-theme">
          <label className="theme-box" htmlFor="theme">
            <input
              name="theme"
              id="theme"
              type="checkbox"
              onChange={changeTheme}
              checked={checkedValue}
            />
            <button onClick={changeTheme} className="check"></button>
            {themeText}
          </label>
        </div>
        <div className="seperator">
          <span>|</span>
        </div>
        <div className="header-lang">
          <p>
            <button onClick={changeLang} className="btn-span">
              {lang === "tr" ? "English" : "Türkçe"}
            </button>
            {lang === "tr" ? " content" : " içerik"}
          </p>
        </div>
      </div>
    </div>
  );
}
