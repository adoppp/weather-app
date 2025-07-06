import type { FC } from "react";
import classNames from "classnames/bind";

import styles from "@/components/AirConditions/AirConditions.module.scss";

import { CardContainer } from "@/components/CardContainer/CardContainer";
import { useTruncNumber } from "@/utils/useTruncNumber/useTruncNumber";
import { WindIcon } from "@assets/svg";
import { useAirConditions } from "@components/AirConditions/AirConditions.hooks";

const cn = classNames.bind(styles);

export const AirConditions: FC = () => {
    const { TempIcon, currentWeatherData } = useAirConditions();
    
    return (
        <CardContainer>
            <h2>Air Conditions</h2>
            <div className={cn("container")}>
                <div className={cn("card", "temp")}>
                    <TempIcon />
                    <div>
                        <h4>Feels like</h4>
                        <p>{useTruncNumber(currentWeatherData?.main.feels_like)}°</p>
                    </div>
                </div>
                <div className={cn("card", "wind")}>
                    {WindIcon}
                    <div>
                        <h4>Wind</h4>
                        <p>{currentWeatherData?.wind.speed} m/s</p>
                    </div>
                </div>
            </div>
        </CardContainer>
    );
};