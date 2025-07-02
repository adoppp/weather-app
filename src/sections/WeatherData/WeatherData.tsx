import type { FC } from "react";
import classNames from "classnames/bind";

import styles from "@/sections/WeatherData/WeatherData.module.scss";

import { CurrentWeatherCard } from "@/components/CurrentWeatherCard/CurrentWeatherCard";
import { AirConditions } from "@/components/AirConditions/AirConditions";
import { ForecastCard } from "@/components/ForecastCard/ForecastCard";
import { useWeatherData } from "./WeatherData.hooks";
import { WeatherSearch } from "@/ui/WeatherSearch/WeatherSearch";

const cn = classNames.bind(styles);

export const WeatherData: FC = () => {
    const { } = useWeatherData();

    return (
        <div className={cn("container")} >
            <div className={cn("main_container")}>
                <WeatherSearch />
                <CurrentWeatherCard />
                <ForecastCard />
                <AirConditions />
            </div>
            <div>
                {/* 7-day forecast */}
            </div>
        </div>
    )
};