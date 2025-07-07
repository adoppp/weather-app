import { createContext, useContext, useEffect, useState, type FC, type ReactNode } from "react";

import type { Languages } from "@/types";

interface LocalisationContextState {
    lng: Languages,
    setLanguage: (lang: Languages) => void,
    getLanguage: () => void,
}

const LocalisationContext = createContext<LocalisationContextState>({ lng: 'en', setLanguage: () => {}, getLanguage: () => {}});

interface LocalisationProviderProps {
    children: ReactNode,
};

export const useLocalisation = () => useContext(LocalisationContext);

export const LocalisationProvider: FC<LocalisationProviderProps> = ({ children }) => {
    const [lng, setLng] = useState<Languages>("en");

    const getLanguage = () => {
        const stored = localStorage.getItem("lng");

        if(stored === "en" || stored === "ru" || stored === "ua" || stored === "de" || stored === "pl") {
            setLng(stored as Languages);
        } else {
            localStorage.setItem("lng", "en")
            setLng("en");
        };
    };

    const setLanguage = (lang: Languages) => {
        localStorage.setItem("lng", lang);
        setLng(lang);
    };

    useEffect(() => {
        getLanguage();
    }, []);

    return (
        <LocalisationContext.Provider value={{ lng, getLanguage, setLanguage }}>
            {children}
        </LocalisationContext.Provider>
    )
};