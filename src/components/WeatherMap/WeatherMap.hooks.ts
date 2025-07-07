import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { mapSelector, weatherSelector } from "@/store/selectors/weatherSelector";
import { useGetLocation } from "@/utils/useGetLocation/useGetLocation";
import type { AppDispatch } from "@/store/store";
import { getCurrentWeather, getForecast } from "@/store/operations/weatherThunk";
import { useLocalisation } from "@/utils/useLocalisation/useLocalisation";


export const useWeatherMap = () => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const location = useGetLocation();
    const layer = useSelector(mapSelector);
    const weather = useSelector(weatherSelector);
    const dispatch = useDispatch<AppDispatch>();
    const { lng } = useLocalisation();

    useEffect(() => {
        if(!weather) {
            if (location && typeof location === "object") {
                dispatch(getCurrentWeather({ cords: { lat: location.lat, lon: location.lon }, lng }));
                dispatch(getForecast({ cords: { lat: location.lat, lon: location.lon }, lng }));
                return;
            } else if (typeof location === "string" && location !== "") {
                dispatch(getCurrentWeather({ city: location, lng }));
                dispatch(getForecast({ city: location, lng }));
                return;
            }
        }
    }, [])
    
    return { API_KEY, layer, weather }
}