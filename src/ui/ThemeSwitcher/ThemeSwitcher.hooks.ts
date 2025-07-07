import { useLocalisation } from "@/utils/useLocalisation/useLocalisation";
import { useTheme } from "@/utils/useTheme/useTheme";
import localisation from "@/data/lng/localisation.json";

export const useThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();
    const { lng } = useLocalisation();
    const language = localisation[lng];
    
    return { theme, toggleTheme, language}
};