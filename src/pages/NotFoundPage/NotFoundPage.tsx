import type { FC } from "react";
import classNames from "classnames/bind";

import styles from "@pages/NotFoundPage/NotFoundPage.module.scss";

const cn = classNames.bind(styles);

export const NotFoundPage: FC = () => {
    return (
        <div className={cn("container")}>
            <h1>404</h1>
            <p>Page Not Found</p>
        </div>
    );
};