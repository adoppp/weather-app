import { NavLink } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "@/components/SideBar/SideBar.module.scss";

import { CloudIcon, CitiesIcon, SettingsIcon } from "@assets/svg";

const cn = classNames.bind(styles);

export const SideBar = () => {
    return (
        <aside className={cn("sidebar")}>
                <nav className={cn("navigation")}>
                    <NavLink to="/weather-app/weather">
                        {CloudIcon}
                        Weather
                    </NavLink>
                    <NavLink to="/weather-app/cities">
                        {CitiesIcon}
                        Cities
                    </NavLink>
                    <NavLink to="/weather-app/settings">
                        {SettingsIcon}
                        Settings
                    </NavLink>
                </nav>
            </aside>
    )
}