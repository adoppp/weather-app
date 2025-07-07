import type { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

import { mapSelector } from "@/store/selectors/weatherSelector";
import { setLayer } from "@/store/reducers/weatherSlice";
import type { AppDispatch } from "@/store/store";
import { useLocalisation } from "@/utils/useLocalisation/useLocalisation";
import localisation from "@/data/lng/localisation.json";
import { loaderSelector } from "@/store/selectors/loaderSelector";
import { errorSelector } from "@/store/selectors/errorSelector";
import { Loader } from "@/components/Loader/Loader";
import { ErrorPage } from "../ErrorPage/ErrorPage";

export const useMapPage = () => {
    const { lng } = useLocalisation();
    const language = localisation[lng].map;
    const layer = useSelector(mapSelector);
    const isLoading = useSelector(loaderSelector);
    const error = useSelector(errorSelector);
    const dispatch = useDispatch<AppDispatch>();

    const mapOptions = [
        { oValue: "temp_new", label: language.temp },
        { oValue: "wind_new", label: language.wind },
        { oValue: "pressure_new", label: language.pressure },
        { oValue: "precipitation_new", label: language.precipitation },
        { oValue: "clouds_new", label: language.clouds },
    ];

    const handleMap = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setLayer(e.target.value));
    };

    const loadingOrError = isLoading ? <Loader /> : error ? <ErrorPage /> : null;

    return { layer, mapOptions, handleMap, loadingOrError };
};