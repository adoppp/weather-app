import { useEffect } from "react";
import { useLocation } from "react-router";

import { getCurrentWeather, getForecast } from "@/store/operations/weatherThunk";
import { useGetLocation } from "@/utils/useGetLocation/useGetLocation";
import { loaderSelector } from "@/store/selectors/loaderSelector";
import { errorSelector } from "@/store/selectors/errorSelector";
import { Loader } from "@/components/Loader/Loader";
import { ErrorPage } from "@/pages/ErrorPage/ErrorPage";
import { useLocalisation } from "@/utils/useLocalisation/useLocalisation";
import { weatherSelector } from "@/store/selectors/weatherSelector";
import { addGeoCity } from "@/store/reducers/citiesSlice";
import { useAppDispatch, useAppSelector } from "@/store/redux.hooks";
import { citiesSelector } from "@/store/selectors/citiesSelector";

export const useWeatherPage = () => {
    const location = useGetLocation();
    const routerLocation = useLocation();
    const weather = useAppSelector(weatherSelector);
    const isLoading = useAppSelector(loaderSelector);
    const error = useAppSelector(errorSelector);
    const cities = useAppSelector(citiesSelector);
    const { lng } = useLocalisation();
    const dispatch = useAppDispatch();

    useEffect(() => {
        const fromState = routerLocation.state as {
            city?: string;
            coords?: { lat: number; lon: number };
            index?: boolean;
        } | null;

        if (fromState?.coords && fromState.index) {
            dispatch(getCurrentWeather({ cords: fromState.coords, lng }));
            dispatch(getForecast({ cords: fromState.coords, lng }));
            return;
        } else if (fromState?.city) {
            dispatch(getCurrentWeather({ city: fromState.city, lng }));
            dispatch(getForecast({ city: fromState.city, lng }));
            return;
        } else if (weather) {
            return;
        } else if (location && location.coord) {
            dispatch(getCurrentWeather({ cords: { lat: location.coord.lat, lon: location.coord.lon }, lng }));
            dispatch(getForecast({ cords: { lat: location.coord.lat, lon: location.coord.lon }, lng }));

            const isSameCity = cities.find(item => item.index === true && item.city === location.city?.name);

            if (!isSameCity) {
                dispatch(addGeoCity({ city: location.city?.name!, coords: { lat: location.coord.lat, lon: location.coord.lon}, index: true }));
            }
            
            return;
        } else if (location && location.error) {
            const error = new Error("Choose city or turn on geo and rerload");
            error.name = "Please";
            throw error;
        }

    }, [location, routerLocation.state, dispatch, lng]);

    const loadingOrError = isLoading ? <Loader /> : error ? <ErrorPage /> : null;

    return { loadingOrError };
};