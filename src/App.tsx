import "@/App.scss";
import { Outlet } from "react-router";
import { SideBar } from "@/sections/SideBar/SideBar";

export function App() {
    return (
        <div className="container_app">
            <SideBar />

            <main>
                <Outlet />
            </main>
        </div>
    );
};