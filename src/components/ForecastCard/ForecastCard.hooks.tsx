import { useMemo } from "react";
import { useSelector } from "react-redux";

import { forecastSelector } from "@/store/selectors/weatherSelector";
import { useTruncNumber } from "@/utils/useTruncNumber/useTruncNumber";
import { useLocalisation } from "@/utils/useLocalisation/useLocalisation";
import localisation from "@/data/lng/localisation.json";

export const useForecastCardHooks = () => {
    const forecastData = useSelector(forecastSelector);
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