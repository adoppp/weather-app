import { useLocalisation } from "@/utils/useLocalisation/useLocalisation";
import localisation from "@/data/lng/localisation.json";

export const useNavigation = () => {
    const { lng } = useLocalisation();
    const language = localisation[lng];

    return { language };
};