import { useTheme } from "@/utils/useTheme/useTheme";
import { useLocalisation } from "@/utils/useLocalisation/useLocalisation";
import { useState } from "react";

export const useApp = () => {
    const { } = useLocalisation();
    const { } = useTheme();
    const [ isHide, setIsHide ] = useState<boolean>(true);
    
    const toggleHide = () => {
        setIsHide(!isHide)
    };

    return { isHide, toggleHide };
};