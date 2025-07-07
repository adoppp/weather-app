import type { FC } from "react";

import { CardContainer } from "@/components/CardContainer/CardContainer";
import { Chart } from "@/ui/Chart/Chart";
import { useForecastCardHooks } from "@components/ForecastCard/ForecastCard.hooks";

export const ForecastCard: FC = () => {
    const { formatedData } = useForecastCardHooks();
    // const iffff =true

    // if (iffff) {  
    //     throw new Error("booom")
    // }
    
    return (
        <CardContainer>
                <h2>Forecast</h2>
                {formatedData && (
                    <Chart
                        type="line"
                        data={formatedData}
                    />
                )}
        </CardContainer>
    );
};