import type { FC } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames/bind";

import styles from "@/components/WindCard/WindCard.module.scss";

import { CardContainer } from "@/components/CardContainer/CardContainer";
import { weatherSelector } from "@/store/selectors/weatherSelector";

const cn = classNames.bind(styles);

export const WindCard: FC = () => {
    const currentWeatherData = useSelector(weatherSelector);
    
    return (
        <CardContainer>
            <div className={cn("container")} >
                <h1 className={cn("title")} >Wind</h1>
            </div>
            <p className={cn("description")} >{currentWeatherData?.wind.speed} m/s</p>
        </CardContainer>
    );
};