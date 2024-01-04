import React, { useState, useEffect } from "react";
import "./Header.css";
import ellipse10 from "../assets/Ellipse-10.png";

const checkboxFromLocalStorage = JSON.parse(
  localStorage.getItem("checkedValue") || "false"
);

const themeTextFromLocalStorage =
  JSON.parse(localStorage.getItem("themeTextValue")) || "dark mode";

export default function Header({ lang, setLang, setTheme }) {
  const [themeText, setThemeText] = useState(themeTextFromLocalStorage);
  const [checkedValue, setCheckedValue] = useState(checkboxFromLocalStorage);

  useEffect(() => {
    localStorage.setItem("checkedValue", JSON.stringify(checkedValue));
    localStorage.setItem("themeTextValue", JSON.stringify(themeText));
  }, [themeText, checkedValue]);

  const checkboxBtnHandler = (e) => {
    if (themeText === "dark mode") {
      setThemeText("light mode");
      setCheckedValue(true);
      setTheme("dark");
    } else {
      setThemeText("dark mode");
      setCheckedValue(false);
      setTheme("light");
    }
  };
  const langChangeHandler = (e) => {
    if (lang === "tr") {
      setLang("eng");
    } else {
      setLang("tr");
    }
  };
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
              checked={checkedValue}
            />
            <button onClick={checkboxBtnHandler} className="check"></button>
            {themeText}
          </label>
        </div>
        <div className="seperator">
          <span>|</span>
        </div>
        <div className="header-lang">
          <p>
            <button onClick={langChangeHandler} className="btn-span">
              {lang === "tr" ? "English" : "Türkçe"}
            </button>
            {lang === "tr" ? " content" : " içerik"}
          </p>
        </div>
      </div>
    </div>
  );
}
