import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const [themeText, setThemeText] = useLocalStorage("themeText", "dark mode");
  const [checkedValue, setCheckedValue] = useLocalStorage("checked?", false);

  const changeTheme = (e) => {
    if (theme === "light") {
      setTheme("dark");
      setThemeText("light mode");
      setCheckedValue(true);
    } else {
      setTheme("light");
      setThemeText("dark mode");
      setCheckedValue(false);
    }

    console.log("Checked Value:", checkedValue);
  };

  return (
    <ThemeContext.Provider
      value={{ theme, themeText, checkedValue, changeTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
