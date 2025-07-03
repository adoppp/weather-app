import { useTheme } from "@utils/useTheme/useTheme";

export const useLoader = () => {
    const { theme } = useTheme();

    const color: string = theme === "light" ? "#ee7a47" : "#1f77b4";

    return { color };
};