import type { FC, MouseEventHandler, ReactNode } from "react";

interface SvgButtonProps {
    type?: "button" | "submit" | "reset";
    children: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    className?: string;
}

export const SvgButton: FC<SvgButtonProps> = ({ type = "button", children, onClick, className }) => {
    return <button type={type} onClick={onClick} className={className} >{children}</button>;
};