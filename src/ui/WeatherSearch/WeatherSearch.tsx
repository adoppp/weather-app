import { type FC } from "react";
import classNames from "classnames/bind";

import styles from "@/ui/WeatherSearch/WeatherSearch.module.scss";

import { useWeatherSearch } from "@ui/WeatherSearch/WeatherSearch.hooks";
import { Input } from "@/ui/Input/Input";
import { Button } from "@/ui/Button/Button";

const cn = classNames.bind(styles);

export const WeatherSearch: FC = () => {
    const { inputValue, handleChange, handleSubmit } = useWeatherSearch();

    return (
        <form onSubmit={handleSubmit} className={cn("form")}>
            <Input label="Search" value={inputValue} onChange={handleChange} required />
            <Button type="default" btnType="submit">
                Search
            </Button>
        </form>
    )
};