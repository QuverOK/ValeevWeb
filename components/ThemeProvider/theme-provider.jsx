"use client";

import { StorageKey, supportedThemes } from "@/helpers/ui/variables";
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({
  theme: supportedThemes.light,
  setTheme: () => {},
  supportedThemes,
});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(supportedThemes.light);

  useEffect(() => {
    const getTheme = () => {
      let theme = localStorage.getItem(StorageKey);

      if (!theme) {
        localStorage.setItem(StorageKey, supportedThemes.light);
        theme = supportedThemes.light;
      }

      return theme;
    };

    const initialTheme = getTheme();
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem(StorageKey, theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        supportedThemes,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
