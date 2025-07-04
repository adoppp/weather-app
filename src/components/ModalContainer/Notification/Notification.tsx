import { useEffect, useState, type FC, type ReactNode } from "react";;
import classNames from "classnames/bind";

import styles from "@components/ModalContainer/Notification/Notification.module.scss";

import CloseIcon from "@assets/svg/close.svg?react";
import { Button } from "@/ui/Button/Button";
import type { NotifyVariant } from "@components/ModalContainer/ModalContainer.types";

interface NotificationProps {
    children: ReactNode,
    handleClose: () => void
    time?: number
    notifyType: NotifyVariant
};

const cn = classNames.bind(styles);

const typeMap = {
    success: { color: "#27fa85b3", title: "Success" },
    warning: { color: "#fa9f27b3", title: "Warning" },
    error:   { color: "#fa3327b3", title: "Error" },
    info:    { color: "#27a8fab3", title: "Info" },
};

export const Notification: FC<NotificationProps> = ({ children, handleClose, time, notifyType }) => {
    const [typeCofig, setTypeCofig] = useState<{ color: string, title: string }>(typeMap[notifyType])

    useEffect(() => {
        setTypeCofig(typeMap[notifyType]);
        const popupTimer = setTimeout(handleClose, time);

        return () => {
            clearTimeout(popupTimer)
        }
    }, [time, handleClose, notifyType]);

    return (
        <div className={cn("container")} style={{ background: typeCofig.color }}>
            <div className={cn("default")}>
                <h2>{typeCofig.title}</h2>
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