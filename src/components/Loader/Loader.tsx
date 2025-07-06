import type { FC } from "react";
import classNames from "classnames/bind";

import styles from "@/components/Loader/Loader.module.scss";

const cn = classNames.bind(styles);

export const Loader: FC = () => {

    return (
        <div className={cn("container")} >
            <span className={cn("loader")}></span>
        </div >
    )
};