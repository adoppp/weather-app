import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { App } from "@/App";
import { ErrorPage } from "@/pages/ErrorPage/ErrorPage";
import { NotFoundPage } from "@/pages/NotFoundPage/NotFoundPage";

const Cities = lazy(() => import("@/pages/Cities/Cities"));
const Settings = lazy(() => import("@/pages/Settings/Settings"));
const Weather = lazy(() => import("@/pages/Weather/Weather"));


export const router = createBrowserRouter([
    {
        path: "/weather-app",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Navigate to="weather" replace /> },
            { path: "weather", element: <Weather /> },
            { path: "cities", element: <Cities /> },
            { path: "settings", element: <Settings /> },
            { path: "*", element: <NotFoundPage /> },
        ],
    }
]);