import { useState, type FC, type FormEvent } from "react";
import { useDispatch } from "react-redux";

import { Input } from "@/ui/Input/Input";
import type { AppDispatch } from "@/store/store";
import { addCity } from "@/store/reducers/citiesSlice";

export const CitiesAdd: FC = () => {
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

    return (
        <form onSubmit={handleSubmit}>
            <Input label="Add city" value={inputValue} onChange={handleChange} />
            <button type="submit">+ Add</button>
        </form>
    )
}