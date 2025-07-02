import { useState, type FormEvent } from "react";
import { useDispatch } from "react-redux";

import type { AppDispatch } from "@/store/store";
import { addCity } from "@/store/reducers/citiesSlice";

export const useCitiesAdd = () => {
    const [inputValue, setInputValue] = useState<string>("");
    const dispatch = useDispatch<AppDispatch>();

    const handleChange = (e: string) => {
        setInputValue(e);
    };
    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (inputValue !== "") {
            dispatch(addCity(inputValue))
            setInputValue("");
        }
    }

    return { inputValue, handleChange, handleSubmit };
};