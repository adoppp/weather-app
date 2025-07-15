import { type FC } from "react";
import classNames from "classnames/bind";

import styles from "@/sections/weather/WeatherSearch/WeatherSearch.module.scss";

import { useWeatherSearch } from "@/sections/weather/WeatherSearch/WeatherSearch.hooks";
import { Input } from "@/ui/Input/Input";
import { Button } from "@/ui/Button/Button";

const cn = classNames.bind(styles);

export const WeatherSearch: FC = () => {
    const { inputValue, handleChange, handleSubmit, Notification, language } = useWeatherSearch();

    return (
        <>
            <form onSubmit={handleSubmit} className={cn("form")}>
                <Input label={language.search} value={inputValue} onChange={handleChange} />
                <Button type="default" btnType="submit">
                    {language.search}
                </Button>
            </form>
            {Notification}
        </>
    )
};