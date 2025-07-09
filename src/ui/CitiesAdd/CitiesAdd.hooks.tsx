import { useState, type FormEvent } from "react";

import { addCity } from "@/store/reducers/citiesSlice";
import { citiesSelector } from "@/store/selectors/citiesSelector";
import { ModalContainer } from "@/components/ModalContainer/ModalContainer";
import type { NotifyVariant } from "@/components/ModalContainer/ModalContainer.types";
import { useLocalisation } from "@/utils/useLocalisation/useLocalisation";
import localisation from "@/data/lng/localisation.json";
import { useAppDispatch, useAppSelector } from "@/store/redux.hooks";

export const useCitiesAdd = () => {
    const [inputValue, setInputValue] = useState<string>("");
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [nType, setNType] = useState<NotifyVariant>();
    const [message, setMessage] = useState<string>("City added");
    const cities = useAppSelector(citiesSelector);
    const { lng } = useLocalisation();
    const language = localisation[lng];
    const dispatch = useAppDispatch();
    
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
        
        const exists = cities.some(item => item.city === (inputValue.charAt(0).toUpperCase() + inputValue.slice(1)));
            
        if (exists) {
            setNType("warning");
            setMessage("City exist")
            setIsOpen(true);
            return;
        }

        dispatch(addCity({ city: inputValue, index: false}))
        setInputValue("");
        setNType("success");
        setMessage("City added")
        setIsOpen(true);
    };

    const Notification = isOpen && <ModalContainer type="notification" notifyType={nType} setIsOpen={setIsOpen} children={message} />

    return { inputValue, handleChange, handleSubmit, Notification, language };
};