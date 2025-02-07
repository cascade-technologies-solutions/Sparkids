import React, { createContext, useState, useEffect } from "react";

// Create the context
export const ThemeContext = createContext(); // Ensure this is explicitly exported

const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check saved theme in localStorage
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    // Apply the theme to the document body
    document.body.setAttribute("data-theme", isDarkMode ? "dark" : "light");
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode((prevMode) => !prevMode);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Export the provider as default
export default ThemeProvider;
