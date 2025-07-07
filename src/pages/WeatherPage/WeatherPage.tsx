import type { FC } from "react";
import classNames from "classnames/bind";

import styles from "@/pages/WeatherPage/WeatherPage.module.scss";

import { CurrentWeatherCard } from "@/components/CurrentWeatherCard/CurrentWeatherCard";
import { AirConditions } from "@/components/AirConditions/AirConditions";
import { ForecastCard } from "@/components/ForecastCard/ForecastCard";
import { useWeatherPage } from "@/pages/WeatherPage/WeatherPage.hooks";
import { WeatherSearch } from "@/ui/WeatherSearch/WeatherSearch";

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