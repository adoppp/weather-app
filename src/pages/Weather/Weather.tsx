import type { FC } from "react";
import classNames from "classnames/bind";

import styles from "@/pages/Weather/Weather.module.scss";

import { CurrentWeatherCard } from "@/components/CurrentWeatherCard/CurrentWeatherCard";
import { AirConditions } from "@/components/AirConditions/AirConditions";
import { ForecastCard } from "@/components/ForecastCard/ForecastCard";
import { useWeather } from "@/pages/Weather/Weather.hooks";
import { WeatherSearch } from "@/ui/WeatherSearch/WeatherSearch";

const cn = classNames.bind(styles);

const Weather: FC = () => {
    const { loadingOrError } = useWeather();

    return (
        <>
            {
                loadingOrError ? loadingOrError :
                    <div className={cn("container")} >
                        <div className={cn("main_container")}>
                            <WeatherSearch />
                            <CurrentWeatherCard />
                            <ForecastCard />
                            <AirConditions />
                        </div>
                        <div>
                            {/* 7-day forecast  */}
                        </div>
                    </div>
            }
        </>
    );
};

export default Weather;