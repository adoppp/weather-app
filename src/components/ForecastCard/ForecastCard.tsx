import type { FC } from "react";

import { CardContainer } from "@/components/CardContainer/CardContainer";
import { Chart } from "@/ui/Chart/Chart";
import { useForecastCardHooks } from "@components/ForecastCard/ForecastCard.hooks";

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