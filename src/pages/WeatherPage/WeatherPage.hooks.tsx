import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";

import type { AppDispatch } from "@/store/store";
import { getCurrentWeather, getForecast } from "@/store/operations/weatherThunk";
import { useGetLocation } from "@/utils/useGetLocation/useGetLocation";
import { useSelector } from "react-redux";
import { loaderSelector } from "@/store/selectors/loaderSelector";
import { errorSelector } from "@/store/selectors/errorSelector";
import { Loader } from "@/components/Loader/Loader";
import { ErrorPage } from "@/pages/ErrorPage/ErrorPage";
import { useLocalisation } from "@/utils/useLocalisation/useLocalisation";
import { weatherSelector } from "@/store/selectors/weatherSelector";

export const useWeatherPage = () => {
    const location = useGetLocation();
    const routerLocation = useLocation();
    const weather = useSelector(weatherSelector);
    const isLoading = useSelector(loaderSelector);
    const error = useSelector(errorSelector);
    const { lng } = useLocalisation();
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        const cityFromState = routerLocation.state && (routerLocation.state as { city?: string }).city;

        if (cityFromState) {
            dispatch(getCurrentWeather({ city: cityFromState, lng }));
            dispatch(getForecast({ city: cityFromState, lng }));
            return;
        } else if (weather) {
            return;
        } else if (location && location.coord) {
            dispatch(getCurrentWeather({ cords: { lat: location.coord.lat, lon: location.coord.lon }, lng }));
            dispatch(getForecast({ cords: { lat: location.coord.lat, lon: location.coord.lon }, lng }));
            return;
        } else if (location && location.error) {
            throw new Error("Choose city or turn on geo and rerload");
        }

    }, [location, routerLocation.state, dispatch]);

    const loadingOrError = isLoading ? <Loader /> : error ? <ErrorPage /> : null;

    return { loadingOrError };
};