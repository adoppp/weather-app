import type { FC } from "react";
import classNames from "classnames/bind";

import styles from "@/sections/weather/CurrentWeatherCard/CurrentWeatherCard.module.scss";

import { useCurrentWeatherCrad } from "@/sections/weather/CurrentWeatherCard/CurrentWeatherCard.hooks";

const cn = classNames.bind(styles);

export const CurrentWeatherCard: FC = () => {
    const { city, description, temp, iconUrl } = useCurrentWeatherCrad();
    
    return (
        <div className={cn("container")} >
            <div className={cn("information")} >
                <div>
                    <h1 className={cn("title")} >{city}</h1>
                    <span className={cn("subtitle")} >{description}</span>
                </div>

                <h2 className={cn("grad")}>{temp}°</h2>
            </div>
            <img
                src={iconUrl}
                alt={description || 'Weather icon'}
                className={cn("weather_icon")}
            />
        </div>
    );
};