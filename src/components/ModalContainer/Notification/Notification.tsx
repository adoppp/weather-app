import { type FC, type ReactNode } from "react";;
import classNames from "classnames/bind";

import styles from "@components/ModalContainer/Notification/Notification.module.scss";

import CloseIcon from "@assets/svg/close.svg?react";
import { Button } from "@/ui/Button/Button";
import type { NotifyVariant } from "@components/ModalContainer/ModalContainer.types";
import { useNotification } from "./Notification.hooks";

interface NotificationProps {
    children: ReactNode,
    handleClose: () => void
    time?: number
    notifyType: NotifyVariant
};

const cn = classNames.bind(styles);

export const Notification: FC<NotificationProps> = ({ children, handleClose, time, notifyType }) => {
    const { typeCofnig } = useNotification({ time, notifyType, handleClose });

    return (
        <div className={cn("container")} style={{ background: typeCofnig.color }}>
            <div className={cn("default")}>
                <h2>{typeCofnig.title}</h2>
                <Button type="svg" onClick={handleClose}>
                    <CloseIcon className={cn("close")} />
                </Button>
            </div>
            <p>
                {children}
            </p>
        </div>
    );
};