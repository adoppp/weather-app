import { useTheme } from "@/utils/useTheme/useTheme";
import { useLocalisation } from "@/utils/useLocalisation/useLocalisation";
import { useEffect, useRef, useState } from "react";

export const useApp = () => {
    const { } = useLocalisation();
    const { } = useTheme();
    const [ isHide, setIsHide ] = useState<boolean>(true);
    const menuRef = useRef<HTMLDivElement | null>(null);
    
    const toggleHide = () => {
        setIsHide(!isHide)
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (
            menuRef.current &&
            !menuRef.current.contains(event.target as Node)
        ) {
            setIsHide(true);
        }
    };

    useEffect(() => {
        if (!isHide) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isHide]);

    return { isHide, toggleHide, menuRef };
};