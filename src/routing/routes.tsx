import { Routes, type routesType } from "./routes.types";
import { Home } from '@/pages/Home/Home';

export const routes: routesType = [
    {
        path: Routes.Home,
        element: <Home/>,
    },
];