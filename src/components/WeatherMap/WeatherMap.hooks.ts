import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { mapSelector, weatherSelector } from "@/store/selectors/weatherSelector";
import { useGetLocation } from "@/utils/useGetLocation/useGetLocation";
import type { AppDispatch } from "@/store/store";
import { getCurrentWeather, getForecast } from "@/store/operations/weatherThunk";
import { useLocalisation } from "@/utils/useLocalisation/useLocalisation";
import localisation from "@/data/lng/localisation.json";



export const useWeatherMap = () => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const location = useGetLocation();
    const layer = useSelector(mapSelector);
    const weather = useSelector(weatherSelector);
    const dispatch = useDispatch<AppDispatch>();
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