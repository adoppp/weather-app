import { useEffect } from "react";
import { useDispatch } from "react-redux";

import type { AppDispatch } from "@/store/store";
import { getCurrentWeather, getforecast } from "@/store/operations/weatherThunk";

export const useWeatherData = () => {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getCurrentWeather({ city: "Odessa" }))
        dispatch(getforecast({ city: "odessa" }))
    }, []);

    return {};
};