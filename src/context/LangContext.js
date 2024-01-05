import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const LangContext = createContext();

export const LangContextProvider = ({ children }) => {
  const [lang, setLang] = useLocalStorage("lang", "tr");

  const changeLang = () => {
    lang === "tr" ? setLang("eng") : setLang("tr");
  };

  return (
    <LangContext.Provider value={{ lang, changeLang }}>
      {children}
    </LangContext.Provider>
  );
};
