import type { FC } from "react";
import classNames from "classnames/bind";

import styles from "@/sections/cities/CitiesList/CitiesList.module.scss";

import { useCitiesList } from "@/sections/cities/CitiesList/CitiesList.hooks";

const cn = classNames.bind(styles);

export const CitiesList: FC = () => {
    const { listItem, modal, notify } = useCitiesList();

    return (
        <>
            <ul className={cn("cities_list")}>
                {listItem}
            </ul>
            {modal}
            {notify}
        </>
    );
};