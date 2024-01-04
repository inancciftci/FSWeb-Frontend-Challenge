import { useEffect, useState } from "react";
import Header from "./components/Header";
import HeroContent from "./components/HeroContent";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import axios from "axios";

const themeFromLocalStorage =
  JSON.parse(localStorage.getItem("themeKey")) || "light";
const langFromLocalStorage =
  JSON.parse(localStorage.getItem("langKey")) || "eng";

function App() {
  const [theme, setTheme] = useState(themeFromLocalStorage);
  const [lang, setLang] = useState(langFromLocalStorage);
  const [context, setContext] = useState({});
  useEffect(() => {
    axios
      .get(`https://659584bc04335332df82e37f.mockapi.io/${lang}`)
      .then((res) => setContext(res.data[0]));
  }, [lang]);

  useEffect(() => {
    localStorage.setItem("themeKey", JSON.stringify(theme));
    localStorage.setItem("langKey", JSON.stringify(lang));
  }, [lang, theme]);

  return (
    <div className="App" id={theme}>
      <Header setTheme={setTheme} lang={lang} setLang={setLang} />
      <HeroContent context={context} />
      <Skills context={context} />
      <Profile context={context} />
      <Projects context={context} />
    </div>
  );
}

export default App;
