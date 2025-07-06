import "@/App.scss";
import { Outlet } from "react-router";
import { SideBar } from "@/sections/SideBar/SideBar";
import { useApp } from "@/App.hooks";
import { Suspense } from "react";
import { Loader } from "@/components/Loader/Loader";

export function App() {
    const { } = useApp()

    return (
        <div className="container_app">
            <SideBar />

            <main>
                <Suspense fallback={<Loader />}>    
                    <Outlet />
                </Suspense>
            </main>
        </div>
    );
};