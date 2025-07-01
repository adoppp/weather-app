import { useEffect, type FC } from "react";
import { useDispatch } from "react-redux";
import classNames from "classnames/bind";

import styles from "@/sections/WeatherData/WeatherData.module.scss";

import { getCurrentWeather, getforecast } from "@/store/operations/weatherThunk";
import type { AppDispatch } from "@/store/store";
import { CurrentWeatherCard } from "@/components/CurrentWeatherCard/CurrentWeatherCard";
import { WindCard } from "@/components/WindCard/WindCard";
import { TempCard } from "@/components/TempCard/TempCard";
import { ForecastCard } from "@/components/ForecastCard/ForecastCard";

const cn = classNames.bind(styles);

export const WeatherData: FC = () => {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getCurrentWeather({ city: "Odessa" }))
        dispatch(getforecast({city: "odessa" }))
    }, []);

    return (
        <div className={cn("container")} >
            <div>
                <CurrentWeatherCard />
                <ForecastCard />
                <TempCard />
                <WindCard />
            </div>
            <div>
                <WindCard />
            </div>
        </div>
    )
};