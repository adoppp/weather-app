import type { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

import { mapSelector } from "@/store/selectors/weatherSelector";
import { setLayer } from "@/store/reducers/weatherSlice";
import type { AppDispatch } from "@/store/store";

export const useMapPage = () => {
    const layer = useSelector(mapSelector);
    const dispatch = useDispatch<AppDispatch>();

    const mapOptions = [
        { oValue: "temp_new", label: "Temperature" },
        { oValue: "wind_new", label: "Wind" },
        { oValue: "pressure_new", label: "Pressure" },
        { oValue: "precipitation_new", label: "Precipitation" },
        { oValue: "clouds_new", label: "Clouds" },
    ];

    const handleMap = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setLayer(e.target.value));
    };

    return { layer, mapOptions, handleMap };
};