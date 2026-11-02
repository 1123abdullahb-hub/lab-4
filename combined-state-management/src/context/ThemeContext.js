
import React, {
    createContext,
    useState,
    useEffect
} from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });

    const toggleTheme = () => {
        setTheme(prev =>
            prev === "light" ? "dark" : "light"
        );
    };

    useEffect(() => {

        localStorage.setItem("theme", theme);

        document.body.style.backgroundColor =
            theme === "light" ? "#ffffff" : "#222222";

        document.body.style.color =
            theme === "light" ? "#000000" : "#ffffff";

    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
