import { useSelector } from "react-redux";

import { weatherSelector } from "@/store/selectors/weatherSelector";
import { useTruncNumber } from "@/utils/useTruncNumber/useTruncNumber";

export const useCurrentWeatherCrad = () => {
    const currentWeatherData = useSelector(weatherSelector);
    const weather = currentWeatherData?.weather[0];

    const city = currentWeatherData?.name;
    const description = weather?.description ?? "No data loaded";
    const temp = useTruncNumber(currentWeatherData?.main.temp);
    const iconUrl = weather?.icon != ""
        ? `http://openweathermap.org/img/wn/${weather?.icon}@2x.png`
        : "";
    
    return { city, description, temp, iconUrl };
};