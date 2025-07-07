import "@/App.scss";
import { Outlet } from "react-router";
import { SideBar } from "@/components/SideBar/SideBar";
import { useApp } from "@/App.hooks";
import { Suspense } from "react";
import { Loader } from "@/components/Loader/Loader";
import { ErrorBoundary } from "./components/ErrorBoundary/ErrorBoundary";

export function App() {
    const { } = useApp()

    return (
        <div className="container_app">
            <SideBar />

            <main>
                <ErrorBoundary>
                    <Suspense fallback={<Loader />}>    
                        <Outlet />
                    </Suspense>
                </ErrorBoundary>
            </main>
        </div>
    );
};