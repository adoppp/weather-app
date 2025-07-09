import { useEffect } from "react";

import { mapSelector, weatherSelector } from "@/store/selectors/weatherSelector";
import { useGetLocation } from "@/utils/useGetLocation/useGetLocation";
import { getCurrentWeather, getForecast } from "@/store/operations/weatherThunk";
import { useLocalisation } from "@/utils/useLocalisation/useLocalisation";
import localisation from "@/data/lng/localisation.json";
import { useAppDispatch, useAppSelector } from "@/store/redux.hooks";



export const useWeatherMap = () => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const location = useGetLocation();
    const layer = useAppSelector(mapSelector);
    const weather = useAppSelector(weatherSelector);
    const dispatch = useAppDispatch();
    const { lng } = useLocalisation();
    const language = localisation[lng];

    useEffect(() => {
        if(!weather) {
            if (location && location.coord) {
                dispatch(getCurrentWeather({ cords: { lat: location.coord.lat, lon: location.coord.lon }, lng }));
                dispatch(getForecast({ cords: { lat: location.coord.lat, lon: location.coord.lon }, lng }));
                return;
            } else if (location && location.error) {
                throw new Error("Choose city or turn on geo and rerload");
            }
        }
    }, []);
    
    return { API_KEY, layer, weather, language }
};