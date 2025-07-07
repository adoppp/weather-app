import { useState, type FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

import type { AppDispatch } from "@/store/store";
import { addCity } from "@/store/reducers/citiesSlice";
import { citiesSelector } from "@/store/selectors/citiesSelector";
import { ModalContainer } from "@/components/ModalContainer/ModalContainer";
import type { NotifyVariant } from "@/components/ModalContainer/ModalContainer.types";

export const useCitiesAdd = () => {
    const [inputValue, setInputValue] = useState<string>("");
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [nType, setNType] = useState<NotifyVariant>();
    const cities = useSelector(citiesSelector);
    const [message, setMessage] = useState<string>("City added");
    const dispatch = useDispatch<AppDispatch>();
    
    const handleChange = (e: string) => {
        setInputValue(e);
    };
    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (inputValue === "") {
            setNType("warning");
            setMessage("Fill input field")
            setIsOpen(true);
            return;
        }
        
        const exists = cities.some(city => city === (inputValue.charAt(0).toUpperCase() + inputValue.slice(1)));
            
        if (exists) {
            setNType("warning");
            setMessage("City exist")
            setIsOpen(true);
            return;
        }

        dispatch(addCity(inputValue))
        setInputValue("");
        setNType("success");
        setMessage("City added")
        setIsOpen(true);
    };

    const Notification = isOpen && <ModalContainer type="notification" notifyType={nType} setIsOpen={setIsOpen} children={message} />

    return { inputValue, handleChange, handleSubmit, Notification };
};