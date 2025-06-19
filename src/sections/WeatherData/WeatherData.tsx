import { useEffect, type FC } from "react";
import { useDispatch } from "react-redux";
import classNames from "classnames/bind";

import styles from "@/sections/WeatherData/WeatherData.module.scss";

import { getCurrentWeather } from "@/store/operations/weatherThunk";
import type { AppDispatch } from "@/store/store";
import { CurrentWeatherCard } from "@/components/CurrentWeatherCard/CurrentWeatherCard";
import { WindCard } from "@/components/WindCard/WindCard";
import { TempCard } from "@/components/TempCard/TempCard";

const cn = classNames.bind(styles);

export const WeatherData: FC = () => {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getCurrentWeather({ city: "Bern" }))
    }, []);

    return (
        <div className={cn("container")} >
            <CurrentWeatherCard />
            <div className={cn("secondContainer")} >
                <TempCard />
                <WindCard />
            </div>
        </div>
    )
};