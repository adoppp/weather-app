import { useEffect } from "react";

import { useTheme, type Theme } from "@/utils/useTheme/useTheme";

export const useApp = () => {
    const { theme, setTheme } = useTheme();
    
    useEffect(() => {
        const stored = localStorage.getItem("theme") as Theme | null;
        const initial = stored === "light" || stored === "dark" ? stored : "dark";
            
        setTheme(initial);
        document.body.setAttribute("data-theme", initial);
    }, [theme, setTheme]);

    return {};
};