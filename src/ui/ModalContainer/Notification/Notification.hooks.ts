import { useEffect, useState } from "react";
import type { NotifyVariant } from "@ui/ModalContainer/ModalContainer.types";

interface NotificationProps {
    handleClose: () => void
    time?: number
    notifyType: NotifyVariant
};

const typeMap = {
    success: { color: "#27fa85b3", title: "Success" },
    warning: { color: "#fa9f27b3", title: "Warning" },
    error:   { color: "#fa3327b3", title: "Error" },
    info:    { color: "#27a8fab3", title: "Info" },
};

export const useNotification = ({ time, notifyType, handleClose }: NotificationProps) => {
    const [typeCofnig, setTypeCofig] = useState<{ color: string, title: string }>(typeMap[notifyType]);
    
        useEffect(() => {
            setTypeCofig(typeMap[notifyType]);
            const popupTimer = setTimeout(handleClose, time);
    
            return () => {
                clearTimeout(popupTimer)
            }
        }, [time, handleClose, notifyType]);
    
    return { typeCofnig };
}