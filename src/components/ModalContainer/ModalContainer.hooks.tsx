import type { FC, ReactNode } from "react";
import { Modal } from "./Modal/Modal";
import type { ModalVariant, NotifyVariant } from "@components/ModalContainer/ModalContainer.types";
import { Notification } from "./Notification/Notification";

interface useModalContainerProps {
    setIsOpen: (isOpen: boolean) => void;
    children?: ReactNode,
    time?: number,
    notifyType?: NotifyVariant,
};

interface ModalTypeProps {
    type: ModalVariant
    time?: number
}

export const useModalContainer = ({ setIsOpen, children, time, notifyType = "success" }: useModalContainerProps) => {
    const handleClose = () => {
        setIsOpen(false)
    };

    const ModalType: FC<ModalTypeProps> = ({ type }) => {
        switch (type) {
            case "modal":
                return <Modal handleClose={handleClose} children={children} />;
            
            case "notification":
                return <Notification time={time} handleClose={handleClose} children={children} notifyType={notifyType} />;
        
            default:
                return <div>Error in ModalContainer.hooks.ts</div>
        }
    }

    return { handleClose, ModalType };
};