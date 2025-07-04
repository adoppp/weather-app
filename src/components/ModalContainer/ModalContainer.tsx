import type { FC, ReactNode } from "react";
import { createPortal } from "react-dom";

import { useModalContainer } from "@components/ModalContainer/ModalContainer.hooks";
import type { ModalVariant, NotifyVariant } from "@components/ModalContainer/ModalContainer.types";

interface ModalContainerProps {
    children?: ReactNode,
    setIsOpen: (isOpen: boolean) => void,
    type: ModalVariant,
    time?: number
    notifyType?: NotifyVariant,
};

export const ModalContainer: FC<ModalContainerProps> = ({ children, setIsOpen, type, time = 5000, notifyType }) => {
    const { ModalType } = useModalContainer({ setIsOpen, children, time, notifyType });

    return createPortal(<ModalType type={type} />, document.getElementById("modal")!);
};