import type { FC, ReactNode } from "react";
import { Modal } from "./Modal/Modal";
import type { ModalVariant } from "@components/ModalContainer/ModalContainer.types";

interface useModalContainerProps {
    setIsOpen: (isOpen: boolean) => void;
    children: ReactNode,
};

interface ModalTypeProps {
    type: ModalVariant
}

export const useModalContainer = ({ setIsOpen, children }: useModalContainerProps) => {
    const handleClose = () => {
        setIsOpen(false)
    };

    const ModalType: FC<ModalTypeProps> = ({ type }) => {
        switch (type) {
            case "modal":
                return (
                    <Modal handleClose={handleClose}>
                        {children}
                    </Modal>
                );
            
            case "notification":
                return <div>1</div>
        
            default:
                return <div>Error in ModalContainer.hooks.ts</div>
        }
    }

    return { handleClose, ModalType };
}