import type { FC } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames/bind";

import styles from "@/components/ForecastCard/ForecastCard.module.scss";

import { CardContainer } from "@/components/CardContainer/CardContainer";
import { forecastSelector } from "@/store/selectors/weatherSelector";
import { Chart } from "@/ui/Chart/Chart";
import { useTruncNumber } from "@/utils/useTruncNumber/useTruncNumber";

const cn = classNames.bind(styles);

export const ForecastCard: FC = () => {
    const forecastData = useSelector(forecastSelector);

    const formatedData = forecastData?.list.map(item => ({
        time: item.dt_txt.split(" ")[1].slice(0, 5),
        temp: useTruncNumber(item.main.temp),
    }));
    
    return (
        <CardContainer>
            <div className={cn("container")}>
                <h2>Forecast</h2>
                {formatedData && (
                    <Chart
                        type="line"
                        data={formatedData}
                    />
                )}
            </div>
        </CardContainer>
    );
};