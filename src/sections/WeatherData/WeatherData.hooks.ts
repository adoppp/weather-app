import { useEffect } from "react";
import { useDispatch } from "react-redux";

import type { AppDispatch } from "@/store/store";
import { getCurrentWeather, getforecast } from "@/store/operations/weatherThunk";
import { useGetLocation } from "@/utils/useGetLocation/useGetLocation";
import { useLocation } from "react-router";

export const useWeatherData = () => {
    const location = useGetLocation();
    const routerLocation  = useLocation();
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        const cityFromState = routerLocation.state && (routerLocation.state as { city?: string }).city;

        if (cityFromState) {
            dispatch(getCurrentWeather({ city: cityFromState }));
            dispatch(getforecast({ city: cityFromState }));
            return;
        } else if (location && typeof location === "object") {
            dispatch(getCurrentWeather({ cords: { lat: location.lat, lon: location.lon } }));
            dispatch(getforecast({ cords: { lat: location.lat, lon: location.lon } }));
            return;
        } else if (typeof location === "string" && location !== "") {
            dispatch(getCurrentWeather({ city: location }));
            dispatch(getforecast({ city: location }));
            return;
        }

    }, [location, routerLocation.state, dispatch]);

    return {};
};