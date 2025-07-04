import { useState, type FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

import type { AppDispatch } from "@/store/store";
import { addCity } from "@/store/reducers/citiesSlice";
import { citiesSelector } from "@/store/selectors/citiesSelector";

export const useCitiesAdd = () => {
    const [inputValue, setInputValue] = useState<string>("");
    const cities = useSelector(citiesSelector);
    const dispatch = useDispatch<AppDispatch>();

    const handleChange = (e: string) => {
        setInputValue(e);
    };
    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const exists = cities.some(city => city === inputValue);
            
        if (exists && inputValue === "") {
            return;
        }

        dispatch(addCity(inputValue))
        setInputValue("");
    };

    return { inputValue, handleChange, handleSubmit };
};