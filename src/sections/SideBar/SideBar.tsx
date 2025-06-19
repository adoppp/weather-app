import { NavLink } from "react-router";
import classNames from "classnames/bind";

import styles from "@/sections/SideBar/SideBar.module.scss";

import Cloud from "@assets/svg/cloud.svg?react";
import Cities from "@assets/svg/cities.svg?react";
import Settings from "@assets/svg/setting.svg?react";

const cn = classNames.bind(styles);

export const SideBar = () => {
    return (
        <aside className={cn("sidebar")}>
                <nav className={cn("navigation")}>
                    <NavLink to="/emotion_weather-app/weather">
                        <Cloud />
                        Weather
                    </NavLink>
                    <NavLink to="/emotion_weather-app/cities">
                        <Cities />
                        Cities
                    </NavLink>
                    <NavLink to="/emotion_weather-app/settings">
                        <Settings />
                        Settings
                    </NavLink>
                </nav>
            </aside>
    )
}