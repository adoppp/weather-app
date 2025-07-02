import { type FC } from "react";
import classNames from "classnames/bind";

import styles from "@ui/CitiesAdd/CitiesAdd.module.scss";

import { Input } from "@/ui/Input/Input";
import { Button } from "@/ui/Button/Button";
import { useCitiesAdd } from "@ui/CitiesAdd/CitiesAdd.hooks";

const cn = classNames.bind(styles);

export const CitiesAdd: FC = () => {
    const { inputValue, handleChange, handleSubmit } = useCitiesAdd();
    return (
        <form onSubmit={handleSubmit} className={cn("form")}>
            <Input label="Add city" value={inputValue} onChange={handleChange} required />
            <Button type="default" btnType="submit">
                +
            </Button>
        </form>
    )
}