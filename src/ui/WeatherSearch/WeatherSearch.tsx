import { type FC } from "react";
import { Input } from "@/ui/Input/Input";
import { useWeatherSearch } from "./WeatherSearch.hooks";

export const WeatherSearch: FC = () => {
    const { inputValue, handleChange, handleSubmit } = useWeatherSearch();

    return (
        <form onSubmit={handleSubmit}>
            <Input label="Search" value={inputValue} onChange={handleChange} />
            <button type="submit">search</button>
        </form>
    )
};