import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "@/components/CitiesList/CitiesList.module.scss";

import { citiesSelector } from "@/store/selectors/citiesSelector";
import type { AppDispatch } from "@/store/store";
import { deleteCity } from "@/store/reducers/citiesSlice";
import { TrashIcon } from "@assets/svg";
import { useState } from "react";
import { ModalContainer } from "../ModalContainer/ModalContainer";
import { Button } from "@/ui/Button/Button";

const cn = classNames.bind(styles);

export const useCitiesList = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isNotify, setIsNotify] = useState<boolean>(false);
    const [city, setCity] = useState<string>("");
    const navigate = useNavigate();
    const cities = useSelector(citiesSelector);
    const dispatch = useDispatch<AppDispatch>();

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

    const goToWeather = (city: string) => {
        navigate(`/weather-app/weather`, { state: { city: city } });
    };

    const listItem = cities.map((item, index) => {
        return (
            <li key={index}>
                <p onClick={() => goToWeather(item)}>
                    {item}
                </p>
                <Button type="svg" onClick={() => handleOpenModal(item)}>
                    {TrashIcon}
                </Button>
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