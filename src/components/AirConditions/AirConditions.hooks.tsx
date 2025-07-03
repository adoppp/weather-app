import type { FC } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames/bind";

import styles from "@/components/AirConditions/AirConditions.module.scss";

import TempLow from "@assets/svg/temp_low.svg?react";
import TempMid from "@assets/svg/temp_mid.svg?react";
import TempUnderMid from "@assets/svg/temp_underMid.svg?react";
import TempHigh from "@assets/svg/temp_high.svg?react";

import { weatherSelector } from "@/store/selectors/weatherSelector";
import { useTruncNumber } from "@/utils/useTruncNumber/useTruncNumber";

const cn = classNames.bind(styles);

export const TempIcon: FC = () => {
    const currentWeatherData = useSelector(weatherSelector);
    
    const temp = useTruncNumber(currentWeatherData?.main.feels_like));

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