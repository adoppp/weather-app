import type { FC } from "react";
import { NavLink, Outlet } from "react-router";
import classNames from "classnames/bind";

import Cloud from "@assets/svg/cloud.svg?react";
import Cities from "@assets/svg/cities.svg?react";
import Settings from "@assets/svg/setting.svg?react";

import styles from "@/layouts/RootLayout/RootLayout.module.scss";

const cn = classNames.bind(styles);

export const Rootlayout: FC = () => {
    return (
        <div className={cn("container")}>
            <aside className={cn("sidebar")}>
                <nav className={cn("navigation")}>
                    <NavLink to="/weather">
                        <Cloud />
                        Weather
                    </NavLink>
                    <NavLink to="/cities">
                        <Cities />
                        Cities
                    </NavLink>
                    <NavLink to="/settings">
                        <Settings />
                        Settings
                    </NavLink>
                </nav>
            </aside>

            <main>
                <Outlet /> 
            </main>
        </div>
    );
};