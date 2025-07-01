import { forecastSelector } from "@/store/selectors/weatherSelector";
import { useTruncNumber } from "@/utils/useTruncNumber/useTruncNumber";
import { useMemo } from "react";
import { useSelector } from "react-redux";

export const useForecastCardHooks = () => {
    const forecastData = useSelector(forecastSelector);

    const formatedData = useMemo(() => {
        return forecastData?.list.map(item => ({
            time: item.dt_txt.split(" ")[1].slice(0, 5),
            temp: useTruncNumber(item.main.temp),
        }));
    }, [forecastData]);

    return { formatedData };
};