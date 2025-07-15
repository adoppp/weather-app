import { CitiesList } from "@/sections/cities/CitiesList/CitiesList";
import { CitiesAdd } from "@sections/cities/CitiesAdd/CitiesAdd";
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