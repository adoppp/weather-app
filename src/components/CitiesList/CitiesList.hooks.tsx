import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { citiesSelector } from "@/store/selectors/citiesSelector";
import type { AppDispatch } from "@/store/store";
import { deleteCity } from "@/store/reducers/citiesSlice";
import Trash from "@assets/svg/trash.svg?react";

export const useCitiesList = () => {
    const navigate = useNavigate();
    const cities = useSelector(citiesSelector);
    const dispatch = useDispatch<AppDispatch>();

    const handleClick = (e: React.MouseEvent, city: string) => {
        e.stopPropagation(); 
        dispatch(deleteCity(city));
    };

    const goToWeather = (city: string) => {
        navigate(`/weather-app/weather`, { state: { city: city } });
    };

    const listItem = cities.map((item, index) => {
        return (
            <li key={index} onClick={() => goToWeather(item)}>
                {item}
                <button type="button" onClick={(e) => handleClick(e, item)}>
                    <Trash />
                </button>
            </li>
        )
    });

    return { listItem }
};