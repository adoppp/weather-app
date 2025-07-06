import type { FC } from "react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import { useSelector } from "react-redux";
import classNames from "classnames/bind";

import styles from "@pages/ErrorPage/ErrorPage.module.scss";

import { errorSelector } from "@/store/selectors/errorSelector";

const cn = classNames.bind(styles);

export const ErrorPage: FC = () => {
    const routeError = useRouteError();
    const error = useSelector(errorSelector);

    if (isRouteErrorResponse(routeError)) {
        return (
            <div className={cn("container")}>
                <h1>{routeError.status}</h1>
                <p>{routeError.statusText}</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className={cn("container")}>
                <h1>{error.cod}</h1>
                <p>{error.message}</p>
            </div>
        );
    };

    if (routeError instanceof Error) {
        return (
            <div className={cn("container")}>
                <h1>{routeError.name}</h1>
                <p>{routeError.message}</p>
            </div>
        );
    };

    return (
        <div className={cn("container")}>
            <h1>Unknown Error</h1>
            <p>Something went wrong.</p>
        </div>
    );
};