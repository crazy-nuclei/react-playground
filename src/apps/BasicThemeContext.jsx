import { createContext, useState, useContext } from "react";

// 1. Create Context
const ThemeContext = createContext();

export default function App() {
  const [theme, setTheme] = useState("light");

  return (
    // 2. Provide context value
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return <ThemeSwitcher />;
}

function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext); // 3. Use context

  return (
    <div style={{ background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff", padding: "20px" }}>
      <h2>Current Theme: {theme}</h2>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Toggle Theme</button>
    </div>
  );
}
