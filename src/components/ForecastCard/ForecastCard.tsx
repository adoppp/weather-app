import type { FC } from "react";
import classNames from "classnames/bind";

import styles from "@/components/ForecastCard/ForecastCard.module.scss";

import { CardContainer } from "@/components/CardContainer/CardContainer";
import { Chart } from "@/ui/Chart/Chart";
import { useForecastCardHooks } from "@components/ForecastCard/ForecastCard.hooks";

const cn = classNames.bind(styles);

export const ForecastCard: FC = () => {
    const { formatedData } = useForecastCardHooks();
    
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