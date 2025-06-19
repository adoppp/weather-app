import type { FC } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames/bind";

import styles from "@/components/TempCard/TempCard.module.scss";

import { CardContainer } from "@/components/CardContainer/CardContainer";
import { weatherSelector } from "@/store/selectors/weatherSelector";

const cn = classNames.bind(styles);

export const TempCard: FC = () => {
    const currentWeatherData = useSelector(weatherSelector);
    
    return (
        <CardContainer>
            <div className={cn("container")} >
                <h1 className={cn("title")} >Temperature</h1>
            </div>
            <p className={cn("description")} >Feels like: {currentWeatherData?.main.feels_like}°C</p>
            <p className={cn("description")} >Max: {currentWeatherData?.main.temp_max}°C</p>
            <p className={cn("description")} >Min: {currentWeatherData?.main.temp_min}°C</p>
        </CardContainer>
    );
};