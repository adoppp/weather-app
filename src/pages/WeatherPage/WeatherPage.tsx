import type { FC } from "react";
import classNames from "classnames/bind";

import styles from "@/pages/WeatherPage/WeatherPage.module.scss";

import { CurrentWeatherCard } from "@/sections/weather/CurrentWeatherCard/CurrentWeatherCard";
import { AirConditions } from "@/sections/weather/AirConditions/AirConditions";
import { ForecastCard } from "@/sections/weather/ForecastCard/ForecastCard";
import { useWeatherPage } from "@/pages/WeatherPage/WeatherPage.hooks";
import { WeatherSearch } from "@/sections/weather/WeatherSearch/WeatherSearch";

const cn = classNames.bind(styles);

const WeatherPage: FC = () => {
    const { loadingOrError } = useWeatherPage();

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

export default WeatherPage;