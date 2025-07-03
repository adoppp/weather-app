import { createContext, useContext, useState, type FC, type ReactNode } from "react"

export type Theme = "light" | "dark";

interface ThemeContextState {
    theme: Theme,
    toggleTheme: () => void,
    setTheme: (theme: Theme) => void,
};

const ThemeContext = createContext<ThemeContextState>({ theme: "dark", toggleTheme: () => {}, setTheme: () => {} });

export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
    children: ReactNode,
};

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>("dark");
    
    const toggleTheme = () => {
        const newTheme: Theme = theme === "light" ? "dark" : "light";
        
        setTheme(newTheme)
        localStorage.setItem("theme", newTheme);
        document.body.setAttribute("data-theme", newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }} >{children}</ThemeContext.Provider>
    );
};
