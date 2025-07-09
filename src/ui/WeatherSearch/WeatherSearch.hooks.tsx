import { useState, type FormEvent } from "react";

import { getCurrentWeather, getForecast } from "@/store/operations/weatherThunk";
import type { NotifyVariant } from "@/components/ModalContainer/ModalContainer.types";
import { ModalContainer } from "@/components/ModalContainer/ModalContainer";
import { useLocalisation } from "@/utils/useLocalisation/useLocalisation";
import localisation from "@/data/lng/localisation.json";
import { useAppDispatch } from "@/store/redux.hooks";

export const useWeatherSearch = () => {
    const [inputValue, setInputValue] = useState<string>("");
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [nType, setNType] = useState<NotifyVariant>();
    const [message, setMessage] = useState<string>("City added");
    const { lng } = useLocalisation();
    const language = localisation[lng];
    const dispatch = useAppDispatch();

    const handleChange = (value: string) => {
        setInputValue(value);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (inputValue === "") {
            setNType("warning");
            setMessage("Fill input field");
            setIsOpen(true);
            return;
        };

        dispatch(getCurrentWeather({ city: inputValue, lng }));
        dispatch(getForecast({ city: inputValue, lng }));
        setInputValue("");
        setNType("success");
        setMessage("City founded")
        setIsOpen(true);
    };

    const Notification = isOpen && <ModalContainer type="notification" notifyType={nType} setIsOpen={setIsOpen} children={message} />

    return { inputValue, handleChange, handleSubmit, Notification, language };
};