import type { FC } from "react";
import { NavLink, Outlet } from "react-router";

export const Rootlayout: FC = () => {
    return (
        <>
            <header>
                <nav>
                    <NavLink to="/weather">Погода</NavLink>
                    <NavLink to="/cities">Города</NavLink>
                    <NavLink to="/settings">Настройки</NavLink>
                </nav>
            </header>

            <main>
                <Outlet /> 
            </main>

            <footer>© 2025 My Weather App</footer>
        </>
    );
};