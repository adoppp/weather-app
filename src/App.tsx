import "@/App.scss";
import { Outlet } from "react-router";
import { SideBar } from "@/sections/SideBar/SideBar";
import { useTheme } from "@/utils/useTheme/useTheme";

export function App() {
    const { } = useTheme();

    return (
        <div className="container_app">
            <SideBar />

            <main>
                <Outlet />
            </main>
        </div>
    );
};