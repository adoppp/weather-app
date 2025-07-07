import { createContext, useContext, useEffect, useState, type FC, type ReactNode } from "react"

export type Theme = "light" | "dark";

interface ThemeContextState {
    theme: Theme,
    toggleTheme: () => void,
    setTheme: (theme: Theme) => void,
    getTheme: () => void
};

const ThemeContext = createContext<ThemeContextState>({ theme: "dark", toggleTheme: () => {}, setTheme: () => {}, getTheme: () => {}, });

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

    const getTheme = () => {
        const stored = localStorage.getItem("theme") as Theme | null;
        const initial = stored === "light" || stored === "dark" ? stored : "dark";
            
        setTheme(initial);
        document.body.setAttribute("data-theme", initial);
    };

    useEffect(() => {
        getTheme();
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, setTheme, getTheme }} >{children}</ThemeContext.Provider>
    );
};
