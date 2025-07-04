import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";

import type { AppDispatch } from "@/store/store";
import { getCurrentWeather, getForecast } from "@/store/operations/weatherThunk";
import { useGetLocation } from "@/utils/useGetLocation/useGetLocation";
import { useSelector } from "react-redux";
import { loaderSelector } from "@/store/selectors/loaderSelector";

export const useWeatherData = () => {
    const location = useGetLocation();
    const routerLocation = useLocation();
    const isLoading = useSelector(loaderSelector);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        const cityFromState = routerLocation.state && (routerLocation.state as { city?: string }).city;

        if (cityFromState) {
            dispatch(getCurrentWeather({ city: cityFromState }));
            dispatch(getForecast({ city: cityFromState }));
            return;
        } else if (location && typeof location === "object") {
            dispatch(getCurrentWeather({ cords: { lat: location.lat, lon: location.lon } }));
            dispatch(getForecast({ cords: { lat: location.lat, lon: location.lon } }));
            return;
        } else if (typeof location === "string" && location !== "") {
            dispatch(getCurrentWeather({ city: location }));
            dispatch(getForecast({ city: location }));
            return;
        }

    }, [location, routerLocation.state, dispatch]);

    return { isLoading };
};