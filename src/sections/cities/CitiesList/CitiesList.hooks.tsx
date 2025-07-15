import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "@sections/cities/CitiesList/CitiesList.module.scss";

import { citiesSelector } from "@/store/selectors/citiesSelector";
import { deleteCity } from "@/store/reducers/citiesSlice";
import { LocationIcon, TrashIcon } from "@assets/svg";
import { useState } from "react";
import { ModalContainer } from "@ui/ModalContainer/ModalContainer";
import { Button } from "@/ui/Button/Button";
import { useAppDispatch, useAppSelector } from "@/store/redux.hooks";

const cn = classNames.bind(styles);

export const useCitiesList = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isNotify, setIsNotify] = useState<boolean>(false);
    const [city, setCity] = useState<string>("");
    const navigate = useNavigate();
    const cities = useAppSelector(citiesSelector);
    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(deleteCity(city));
        setCity("");
        setIsOpen(false)
        setIsNotify(true)
    };

    const handleOpenModal = (city: string) => {
        setCity(city)
        setIsOpen(true)
    };

    const handleCloseModal = () => {
        setCity("")
        setIsOpen(false)
    };

    const goToWeather = (city: string, index: boolean, coords: { lat: number | null, lon: number | null }) => {
        navigate(`/weather-app/weather`, { state: { city, coords, index } });
    };

    const listItem = cities.map((item, index) => {
        return (
            <li key={index}>
                <p onClick={() => goToWeather(item.city, item.index, item.coords! )}>
                    {item.city}
                </p>
                <div className={cn("geo")}>
                    {item.index && LocationIcon}
                </div>
                {
                    !item.index && 
                    <Button type="svg" onClick={() => handleOpenModal(item.city)}>
                        {TrashIcon}
                    </Button>
                }
            </li>
        )
    });

    const modal = isOpen &&
        <ModalContainer type="modal" setIsOpen={setIsOpen}>
            <div className={cn("popup")}>
                <p>Delete <strong>"{city}"</strong>?</p>
                    <Button type="default"onClick={handleClick} >Delete</Button>
                    <Button type="default" className={cn("negative")} onClick={handleCloseModal}>Cancel</Button>
            </div>
        </ModalContainer>;
    
    const notify = isNotify && <ModalContainer type="notification" children="City deleted" setIsOpen={setIsNotify} />;

    return { listItem, modal, notify };
};