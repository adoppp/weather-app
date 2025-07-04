import type { FC, ReactNode } from "react";
import { createPortal } from "react-dom";

import { useModalContainer } from "@components/ModalContainer/ModalContainer.hooks";
import type { ModalVariant } from "@components/ModalContainer/ModalContainer.types";

interface ModalContainerProps {
    children: ReactNode,
    setIsOpen: (isOpen: boolean) => void
    type: ModalVariant
};

export const ModalContainer: FC<ModalContainerProps> = ({ children, setIsOpen, type }) => {
    const { ModalType } = useModalContainer({ setIsOpen, children });

    return createPortal(<ModalType type={type} />, document.getElementById("modal")!);
};