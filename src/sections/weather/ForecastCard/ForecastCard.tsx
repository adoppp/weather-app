import type { FC } from "react";

import { CardContainer } from "@/sections/weather/CardContainer/CardContainer";
import { useForecastCardHooks } from "@/sections/weather/ForecastCard/ForecastCard.hooks";
import { Chart } from "@/ui/Chart/Chart";

export const ForecastCard: FC = () => {
    const { formatedData, language } = useForecastCardHooks();
    
    return (
        <CardContainer>
                <h2>{language.forecast.title}</h2>
                {formatedData && (
                    <Chart
                        type="line"
                        data={formatedData}
                    />
                )}
        </CardContainer>
    );
};