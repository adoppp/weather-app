import { useEffect, useState } from "react"

export const useTheme = () => {
    const [theme, setTheme] = useState<string>("dark");

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");

        if (storedTheme) {
            setTheme(storedTheme);
            document.body.setAttribute("data-theme", storedTheme)
        } else {
            localStorage.setItem("theme", theme)
            document.body.setAttribute("data-theme", theme)
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";

        setTheme(newTheme)
        localStorage.setItem("theme", newTheme);
        document.body.setAttribute("data-theme", newTheme);
    };

    return { theme, toggleTheme };
};