import type { FC, MouseEventHandler, ReactNode } from "react";

import { DefaultButton } from "@ui/Button/DefaultButton/DefaultButton";
import { SwitcherButton } from "./SwitcherButton/SwitcherButton";

interface ButtonProps {
    type: "default" | "switcher",
    btnType?: "button" | "submit" | "reset";
    active?: any,
    children?: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}


export const Button: FC<ButtonProps> = ({ type, children, btnType, onClick, active }) => {
    
    switch (type) {
        case "default":
            return (
                <DefaultButton onClick={onClick} type={btnType}>
                    {children}
                </DefaultButton>
            )
        
        case "switcher":
            return <SwitcherButton active={active} onClick={onClick} type={btnType} />
    
        default:
            return <div>Error in Button.tsx</div>;
    }
};