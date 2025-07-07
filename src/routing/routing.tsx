import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { App } from "@/App";
import { ErrorPage } from "@/pages/ErrorPage/ErrorPage";
import { NotFoundPage } from "@/pages/NotFoundPage/NotFoundPage";

const CitiesPage = lazy(() => import("@/pages/CitiesPage/CitiesPage"));
const SettingsPage = lazy(() => import("@/pages/SettingsPage/SettingsPage"));
const WeatherPage = lazy(() => import("@/pages/WeatherPage/WeatherPage"));


export const router = createBrowserRouter([
    {
        path: "/weather-app",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Navigate to="weather" replace /> },
            { path: "weather", element: <WeatherPage /> },
            { path: "cities", element: <CitiesPage /> },
            { path: "settings", element: <SettingsPage /> },
            { path: "*", element: <NotFoundPage /> },
        ],
    }
]);