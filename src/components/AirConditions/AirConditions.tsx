import type { FC } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames/bind";

import styles from "@/components/AirConditions/AirConditions.module.scss";

import { CardContainer } from "@/components/CardContainer/CardContainer";
import { weatherSelector } from "@/store/selectors/weatherSelector";
import { useTruncNumber } from "@/utils/useTruncNumber/useTruncNumber";
import Wind from "@assets/svg/wind.svg?react";
import TempLow from "@assets/svg/temp_low.svg?react";
import TempMid from "@assets/svg/temp_mid.svg?react";
import TempUnderMid from "@assets/svg/temp_underMid.svg?react";
import TempHigh from "@assets/svg/temp_high.svg?react";

const cn = classNames.bind(styles);

export const AirConditions: FC = () => {
    const currentWeatherData = useSelector(weatherSelector);

    const TempIcon: FC = () => {
        const temp = useTruncNumber(currentWeatherData?.main.feels_like);
    
        const numberTemp =
            typeof temp === 'number'
                ? temp
                : typeof temp === 'string'
                    ? parseFloat(temp)
                    : 0;
    
        if (numberTemp > 0 && numberTemp < 10) {
            return <TempMid className={cn("svg_temp")} />;
        } else if (numberTemp >= 10 && numberTemp < 20) {
            return <TempUnderMid className={cn("svg_temp")} />;
        } else if (numberTemp > 30) {
            return <TempHigh className={cn("svg_temp")} />
        } else {
            return <TempLow className={cn("svg_temp")} />;
        }
    };
    
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