import { Rootlayout } from "@/layouts/RootLayout/RootLayout";
import { Cities } from "@/pages/Cities/Cities";
import { Settings } from "@/pages/Settings/Settings";
import { Weather } from "@/pages/Weather/Weather";
import { createBrowserRouter, Navigate } from "react-router";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Rootlayout />,
        // errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Navigate to="weather" replace /> },
            { path: "weather", element: <Weather /> },
            { path: "cities", element: <Cities /> },
            { path: "settings", element: <Settings /> },
            // { path: "*", element: <NotFound /> },
        ],
    }
]);