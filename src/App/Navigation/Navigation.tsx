import { NavLink } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "@/App/Navigation/Navigation.module.scss";

import { CloudIcon, CitiesIcon, SettingsIcon, MapIcon } from "@assets/svg";
import { useNavigation } from "@/App/Navigation/Navigation.hooks";

const cn = classNames.bind(styles);

export const Navigation = () => {
    const { language } = useNavigation();

    return (
        <nav className={cn("navigation")}>
            <NavLink to="/weather-app/weather">
                {CloudIcon}
                {language.nav.weather}
            </NavLink>
            <NavLink to="/weather-app/cities">
                {CitiesIcon}
                {language.nav.cities}
            </NavLink>
            <NavLink to="/weather-app/map">
                {MapIcon}
                {language.nav.map}
            </NavLink>
            <NavLink to="/weather-app/settings">
                {SettingsIcon}
                {language.nav.settings}
            </NavLink>
        </nav>
    );
};