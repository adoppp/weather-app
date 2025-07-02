import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames/bind";

import styles from "@/components/CitiesList/CitiesList.module.scss";

import { citiesSelector } from "@/store/selectors/citiesSelector";
import type { AppDispatch } from "@/store/store";
import { deleteCity } from "@/store/reducers/citiesSlice";

const cn = classNames.bind(styles);

export const useCitiesList = () => {
    const cities = useSelector(citiesSelector);
    const dispatch = useDispatch<AppDispatch>();

    const handleClick = (city: string) => {
        dispatch(deleteCity(city))
    };

    const listItem = cities.map((item, index) => {
        return (
            <li key={index}>
                {item}
                <button type="button" onClick={() => handleClick(item)}>-</button>
            </li>
        )
    });

    return { listItem }
};