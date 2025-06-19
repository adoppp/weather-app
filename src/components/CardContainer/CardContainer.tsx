import type { FC, ReactNode } from "react";
import classNames from "classnames/bind";

import styles from "@/components/CardContainer/CardContainer.module.scss";

interface CardContainerProps {
    children: ReactNode,
};

const cn = classNames.bind(styles);

export const CardContainer: FC<CardContainerProps> = ({ children }) => {
    return (
        <div className={cn("container")}>
            {children}
        </div>
    );
};