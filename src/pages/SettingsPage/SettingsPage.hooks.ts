import { type ChangeEvent } from "react";

import { useLocalisation } from "@/utils/useLocalisation/useLocalisation";
import localisation from "@/data/lng/localisation.json";
import type { Languages } from "@/types";
import { useTheme } from "@/utils/useTheme/useTheme";

export const useSettingsPage = () => {
    const { theme, toggleTheme } = useTheme();
    const { lng, setLanguage } = useLocalisation();
    const language = localisation[lng];
    
    const handleLng = (e: ChangeEvent<HTMLSelectElement>) => {
        setLanguage(e.target.value as Languages)
    };

    const selectOptions = [
        {
            oValue: "en",
            label: "En"
        },
        {
            oValue: "de",
            label: "De"
        },
        {
            oValue: "ua",
            label: "Ua"
        },
        {
            oValue: "ru",
            label: "Ru"
        },
    ];

    return { lng, language, handleLng, selectOptions, theme, toggleTheme };
}