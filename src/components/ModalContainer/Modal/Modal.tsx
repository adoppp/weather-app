import type { FC, ReactNode } from "react";;
import classNames from "classnames/bind";

import styles from "@components/ModalContainer/Modal/Modal.module.scss";

import { CloseIcon } from "@assets/svg";
import { Button } from "@/ui/Button/Button";

interface ModalProps {
    children: ReactNode,
    handleClose: () => void
};

const cn = classNames.bind(styles);

export const Modal: FC<ModalProps> = ({ children, handleClose }) => {
    return (
            <div className={cn("container")}>
                <div className={cn("content_box")}>
                    <Button type="svg" onClick={handleClose} className={cn("close")}>
                        {CloseIcon}
                    </Button>
                    <div className={cn("content")}>
                        {children}
                    </div>
                </div>
            </div>
    );
};