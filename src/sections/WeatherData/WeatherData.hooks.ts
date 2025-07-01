import { useEffect, useState, type FormEvent } from "react";
import { useDispatch } from "react-redux";

import type { AppDispatch } from "@/store/store";
import { getCurrentWeather, getforecast } from "@/store/operations/weatherThunk";

export const useWeatherData = () => {
    const [inputValue, setInputValue] = useState<string>("");
    const dispatch = useDispatch<AppDispatch>();

    const handleChange = (value: string) => {
        setInputValue(value);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (inputValue !== "") {
            dispatch(getCurrentWeather({ city: inputValue }))
            dispatch(getforecast({ city: inputValue }))
        }
    };

    useEffect(() => {
        dispatch(getCurrentWeather({ city: "Odessa" }))
        dispatch(getforecast({ city: "odessa" }))
    }, []);

    return { inputValue, handleChange, handleSubmit };
};