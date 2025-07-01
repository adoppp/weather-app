import { useEffect, useState, type FC, type FormEvent } from "react";
import { useDispatch } from "react-redux";
import classNames from "classnames/bind";

import styles from "@/sections/WeatherData/WeatherData.module.scss";

import { getCurrentWeather, getforecast } from "@/store/operations/weatherThunk";
import type { AppDispatch } from "@/store/store";
import { CurrentWeatherCard } from "@/components/CurrentWeatherCard/CurrentWeatherCard";
import { AirConditions } from "@/components/AirConditions/AirConditions";
import { ForecastCard } from "@/components/ForecastCard/ForecastCard";
import { Input } from "@/ui/Input/Input";
import { useWeatherData } from "./WeatherData.hooks";

const cn = classNames.bind(styles);

export const WeatherData: FC = () => {
    const { inputValue, handleChange, handleSubmit } = useWeatherData();

    return (
        <div className={cn("container")} >
            <div className={cn("main_container")}>
                <form onSubmit={handleSubmit}>
                    <Input label="Search" value={inputValue} onChange={handleChange} />
                    <button type="submit">search</button>
                </form>
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