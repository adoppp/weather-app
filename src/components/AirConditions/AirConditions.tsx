import type { FC } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames/bind";

import styles from "@/components/AirConditions/AirConditions.module.scss";

import { TempIcon } from "@components/AirConditions/AirConditions.hooks";
import { CardContainer } from "@/components/CardContainer/CardContainer";
import { weatherSelector } from "@/store/selectors/weatherSelector";
import { useTruncNumber } from "@/utils/useTruncNumber/useTruncNumber";
import Wind from "@assets/svg/wind.svg?react";

const cn = classNames.bind(styles);

export const AirConditions: FC = () => {
    const currentWeatherData = useSelector(weatherSelector);
    
    return (
        <CardContainer>
            <h2>Air Conditions</h2>
            <div className={cn("container")}>
                <div className={cn("card")}>
                    <TempIcon />
                    <div>
                        <h4>Feels like</h4>
                        <p>{useTruncNumber(currentWeatherData?.main.feels_like)}°</p>
                    </div>
                </div>
                <div className={cn("card")}>
                    <Wind className={cn("svg_wind")} />
                    <div>
                        <h4>Wind</h4>
                        <p>{currentWeatherData?.wind.speed} m/s</p>
                    </div>
                </div>
            </div>
        </CardContainer>
    );
};