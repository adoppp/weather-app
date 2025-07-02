import type { FC, MouseEventHandler } from "react";
import classNames from "classnames/bind";

import styles from "@/ui/Button/SwitcherButton/SwitcherButton.module.scss";

interface SwitcherButtonProps {
    type?: "button" | "submit" | "reset";
    active: any,
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

const cn = classNames.bind(styles);

export const SwitcherButton: FC<SwitcherButtonProps> = ({ type = "button", onClick, active }) => {
    return <button type={type} onClick={onClick} className={cn("button", active ? "active" : "")}></button>;
};