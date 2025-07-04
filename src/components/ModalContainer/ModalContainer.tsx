import type { FC, ReactNode } from "react";
import { createPortal } from "react-dom";
import classNames from "classnames/bind";

import styles from "@components/ModalContainer/ModalContainer.module.scss";

import CloseIcon from "@assets/svg/close.svg?react";
import { Button } from "@/ui/Button/Button";

interface ModalContainerProps {
    children: ReactNode,
    setIsOpen: (isOpen: boolean) => void
};

const cn = classNames.bind(styles);

export const ModalContainer: FC<ModalContainerProps> = ({ children, setIsOpen }) => {
    const handleClose = () => {
        setIsOpen(false)
    };

    return createPortal(
        <div className={cn("container")}>
            <div className={cn("content_box")}>
                <Button type="svg" onClick={handleClose}>
                    <CloseIcon className={cn("close")} />
                </Button>
                <div className={cn("content")}>
                    {children}
                </div>
            </div>
        </div>,
        document.getElementById("modal")!
    );
};