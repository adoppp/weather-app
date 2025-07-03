import "@/App.scss";
import { Outlet } from "react-router";
import { SideBar } from "@/sections/SideBar/SideBar";
import { useApp } from "@/App.hooks";

export function App() {
    const { } = useApp()

    return (
        <div className="container_app">
            <SideBar />

            <main>
                <Outlet />
            </main>
        </div>
    );
};