import "@/App.scss";
import { Outlet } from "react-router";
import { SideBar } from "@/sections/SideBar/SideBar";
import { useTheme, type Theme } from "@/utils/useTheme/useTheme";
import { useEffect } from "react";

export function App() {
    const { setTheme } = useTheme();

    useEffect(() => {
            const stored = localStorage.getItem("theme") as Theme | null;
            const initial = stored === "light" || stored === "dark" ? stored : "dark";
            
            setTheme(initial);
            document.body.setAttribute("data-theme", initial);
    }, []);

    return (
        <div className="container_app">
            <SideBar />

            <main>
                <Outlet />
            </main>
        </div>
    );
};