import { CitiesList } from "@/components/CitiesList/CitiesList";
import { CitiesAdd } from "@/ui/CitiesAdd/CitiesAdd";
import type { FC } from "react";

export const Cities: FC = () => {
    return (
        <div>
            <CitiesAdd />
            <CitiesList />
        </div>
    )
};