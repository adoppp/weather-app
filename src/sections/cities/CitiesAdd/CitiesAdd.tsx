import { type FC } from "react";
import classNames from "classnames/bind";

import styles from "@/sections/cities/CitiesAdd/CitiesAdd.module.scss";

import { Input } from "@/ui/Input/Input";
import { Button } from "@/ui/Button/Button";
import { useCitiesAdd } from "@/sections/cities/CitiesAdd/CitiesAdd.hooks";

const cn = classNames.bind(styles);

export const CitiesAdd: FC = () => {
    const { inputValue, handleChange, handleSubmit, Notification, language } = useCitiesAdd();
    return (
        <>
            <form onSubmit={handleSubmit} className={cn("form")}>
                <Input label={language.add_city} value={inputValue} onChange={handleChange} />
                <Button type="default" btnType="submit">
                    +
                </Button>
            </form>
            {Notification}
        </>
    )
}