import { NavLink } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "@/components/SideBar/SideBar.module.scss";

import { CloudIcon, CitiesIcon, SettingsIcon } from "@assets/svg";
import { useSideBar } from "@components/SideBar/SideBar.hooks";

const cn = classNames.bind(styles);

export const SideBar = () => {
    const { language } = useSideBar();

    return (
        <aside className={cn("sidebar")}>
                <nav className={cn("navigation")}>
                    <NavLink to="/weather-app/weather">
                        {CloudIcon}
                        {language.nav.weather}
                    </NavLink>
                    <NavLink to="/weather-app/cities">
                        {CitiesIcon}
                        {language.nav.cities}
                    </NavLink>
                    <NavLink to="/weather-app/settings">
                        {SettingsIcon}
                        {language.nav.settings}
                    </NavLink>
                </nav>
            </aside>
    )
}