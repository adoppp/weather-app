import type { FC } from "react";
import classNames from "classnames/bind";

import styles from "@pages/ErrorPage/ErrorPage.module.scss";

import { useErrorPage } from "./ErrorPage.hooks";
import { Button } from "@/ui/Button/Button";

const cn = classNames.bind(styles);

interface ErrorPageProps {
    propError?: {
        title: string | number,
        message: string
    };
};

export const ErrorPage: FC<ErrorPageProps> = ({ propError }) => {
    const { hookError } = useErrorPage();
    const error = propError || hookError;


    return (
        <div className={cn("container")}>
            <h1>{error.title}</h1>
            <p>{error.message}</p>
        </div>
    );
};