import { TempLowIcon, TempUnderMidIcon, TempMidIcon, TempHighIcon } from "@/assets/svg";
import { weatherSelector } from "@/store/selectors/weatherSelector";
import { useTruncNumber } from "@/utils/useTruncNumber/useTruncNumber";
import { useLocalisation } from "@/utils/useLocalisation/useLocalisation";
import localisation from "@/data/lng/localisation.json";
import { useAppSelector } from "@/store/redux.hooks";

export const useAirConditions = () => {
    const currentWeatherData = useAppSelector(weatherSelector);
    const { lng } = useLocalisation();
    const language = localisation[lng];

    const TempIcon = () => {
        const temp = useTruncNumber(currentWeatherData?.main.feels_like);

        const numberTemp =
            typeof temp === 'number'
                ? temp
                : typeof temp === 'string'
                    ? parseFloat(temp)
                    : 0;

        if (numberTemp > 0 && numberTemp < 10) {
            return TempMidIcon;
        } else if (numberTemp >= 10 && numberTemp < 20) {
            return TempUnderMidIcon;
        } else if (numberTemp > 30) {
            return TempHighIcon;
        } else {
            return TempLowIcon;
        }
    };

    return { TempIcon, currentWeatherData, language }
};