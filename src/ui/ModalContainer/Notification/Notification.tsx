import { type FC, type ReactNode } from "react";;
import classNames from "classnames/bind";

import styles from "@ui/ModalContainer/Notification/Notification.module.scss";

import { CloseIcon } from "@assets/svg";
import { Button } from "@/ui/Button/Button";
import type { NotifyVariant } from "@ui/ModalContainer/ModalContainer.types";
import { useNotification } from "@ui/ModalContainer/Notification/Notification.hooks";

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
                <Button type="svg" onClick={handleClose} className={cn("close")}>
                    {CloseIcon}
                </Button>
            </div>
            <p>
                {children}
            </p>
        </div>
    );
};