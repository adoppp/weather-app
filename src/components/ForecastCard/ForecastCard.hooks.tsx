import { useMemo } from "react";

import { forecastSelector } from "@/store/selectors/weatherSelector";
import { useTruncNumber } from "@/utils/useTruncNumber/useTruncNumber";
import { useLocalisation } from "@/utils/useLocalisation/useLocalisation";
import localisation from "@/data/lng/localisation.json";
import { useAppSelector } from "@/store/redux.hooks";

export const useForecastCardHooks = () => {
    const forecastData = useAppSelector(forecastSelector);
    const { lng } = useLocalisation();
    const language = localisation[lng];

    const formatedData = useMemo(() => {
        return forecastData?.list.map(item => ({
            time: item.dt_txt.split(" ")[1].slice(0, 5),
            temp: useTruncNumber(item.main.temp),
        }));
    }, [forecastData]);

    return { formatedData, language };
};