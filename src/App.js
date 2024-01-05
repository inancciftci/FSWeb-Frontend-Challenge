import { useContext, useEffect, useState } from "react";
import Header from "./components/Header";
import HeroContent from "./components/HeroContent";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { ThemeContext } from "./context/ThemeContext";
import { LangContext } from "./context/LangContext";
import axios from "axios";

function App(props) {
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LangContext);
  const [content, setContent] = useState({});

  useEffect(() => {
    axios
      .get(`https://659584bc04335332df82e37f.mockapi.io/${lang}`)
      .then((res) => setContent(res.data[0]));
  }, [lang]);

  return (
    <div className="App" id={theme}>
      <Header content={content} />
      <HeroContent content={content} />
      <Skills content={content} />
      <Profile content={content} />
      <Projects content={content} />
    </div>
  );
}

export default App;
