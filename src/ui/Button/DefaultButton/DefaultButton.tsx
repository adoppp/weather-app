import type { FC, MouseEventHandler, ReactNode } from "react";
import classNames from "classnames/bind";

import styles from "@/ui/Button/DefaultButton/DefaultButton.module.scss";

interface DefaultButtonProps {
    type?: "button" | "submit" | "reset";
    children: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    className?: string
}

const cn = classNames.bind(styles);

export const DefaultButton: FC<DefaultButtonProps> = ({ type = "button", children, onClick, className }) => {
    return <button type={type} onClick={onClick} className={cn("button", className && className)}>{children}</button>;
};