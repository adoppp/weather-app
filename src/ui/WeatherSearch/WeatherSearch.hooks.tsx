import { useState, type FormEvent } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/store/store";
import { getCurrentWeather, getForecast } from "@/store/operations/weatherThunk";
import type { NotifyVariant } from "@/components/ModalContainer/ModalContainer.types";
import { ModalContainer } from "@/components/ModalContainer/ModalContainer";

export const useWeatherSearch = () => {
    const [inputValue, setInputValue] = useState<string>("");
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [nType, setNType] = useState<NotifyVariant>();
    const [message, setMessage] = useState<string>("City added");
    const dispatch = useDispatch<AppDispatch>();

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

        dispatch(getCurrentWeather({ city: inputValue }));
        dispatch(getForecast({ city: inputValue }));
        setInputValue("");
        setNType("success");
        setMessage("City founded")
        setIsOpen(true);
    };

    const Notification = isOpen && <ModalContainer type="notification" notifyType={nType} setIsOpen={setIsOpen} children={message} />

    return { inputValue, handleChange, handleSubmit, Notification };
};