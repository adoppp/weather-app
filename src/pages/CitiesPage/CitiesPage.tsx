import { CitiesList } from "@/components/CitiesList/CitiesList";
import { CitiesAdd } from "@/ui/CitiesAdd/CitiesAdd";
import type { FC } from "react";

const CitiesPage: FC = () => {
    return (
        <div>
            <CitiesAdd />
            <CitiesList />
        </div>
    )
};

export default CitiesPage;