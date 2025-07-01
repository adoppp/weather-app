import type { FC } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames/bind";

import styles from "@/components/CurrentWeatherCard/CurrentWeatherCard.module.scss";

import { weatherSelector } from "@/store/selectors/weatherSelector";
import { useTruncNumber } from "@/utils/useTruncNumber/useTruncNumber";

const cn = classNames.bind(styles);

export const CurrentWeatherCard: FC = () => {
    const currentWeatherData = useSelector(weatherSelector);
    
    return (
        <div className={cn("container")} >
            <div>
                <h1 className={cn("title")} >{currentWeatherData?.name}</h1>
            </div>





                
                <img
                    src={`http://openweathermap.org/img/wn/${currentWeatherData?.weather[0].icon}@2x.png`}
                    alt={currentWeatherData?.weather[0].description || 'Weather icon'}
                    style={{ width: 160, height: 160 }}
                />
                <h2 className={cn("title")}>{useTruncNumber(currentWeatherData?.main.temp)}°C</h2>
                <span className={cn("subtitle")} >{currentWeatherData?.weather[0].description}</span>
        </div>
    );
};