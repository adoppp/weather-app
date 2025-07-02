import { createContext, useContext, useState, useEffect, type ReactNode, type FC } from "react";

type CityContextType = string | { lat: number; lon: number } | null;

const CityContext = createContext<CityContextType>(null);

export const useGetLocation = () => useContext(CityContext);

interface CityProviderProps {
    children: ReactNode;
};

export const CityProvider: FC<CityProviderProps> = ({ children }) => {
    const [city, setCity] = useState<CityContextType>(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setCity({
                    lat: position.coords.latitude,
                    lon: position.coords.longitude,
                });
            },
            (error) => {
                console.warn("Geolocation error:", error);
                
                setCity("");
            }
        );
    }, []);

    return <CityContext.Provider value={city}>{children}</CityContext.Provider>;
};
