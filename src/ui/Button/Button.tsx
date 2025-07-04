import type { FC, MouseEventHandler, ReactNode } from "react";

import { DefaultButton } from "@ui/Button/DefaultButton/DefaultButton";
import { SwitcherButton } from "@ui/Button/SwitcherButton/SwitcherButton";
import { SvgButton } from "@ui/Button/SvgButton/SvgButton";

interface ButtonProps {
    type: "default" | "switcher" | "svg",
    btnType?: "button" | "submit" | "reset";
    active?: any,
    children?: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    className?: string;
}


export const Button: FC<ButtonProps> = ({ type, children, btnType, onClick, active, className }) => {
    
    switch (type) {
        case "default":
            return (
        <DefaultButton onClick={onClick} type={btnType} className={className}>
                    {children}
                </DefaultButton>
            )
        
        case "switcher":
            return <SwitcherButton active={active} onClick={onClick} type={btnType} className={className} />
        
        case "svg":
            return <SvgButton onClick={onClick} className={className}>{children}</SvgButton>
    
        default:
            return <div>Error in Button.tsx</div>;
    }
};