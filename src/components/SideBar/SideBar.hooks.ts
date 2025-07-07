import { useLocalisation } from "@/utils/useLocalisation/useLocalisation";
import localisation from "@/data/lng/localisation.json";

export const useSideBar = () => {
    const { lng } = useLocalisation();
    const language = localisation[lng];

    return { language };
};