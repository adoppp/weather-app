import type { FC } from "react";
import { PulseLoader } from "react-spinners";
import classNames from "classnames/bind";

import styles from "@/components/Loader/Loader.module.scss";
import { useLoader } from "./Loader.hooks";

const cn = classNames.bind(styles);

export const Loader: FC = () => {
    const { color } = useLoader();

    return (
        <div className={cn("container")} >
            <PulseLoader color={color} />
        </div >
    )
};