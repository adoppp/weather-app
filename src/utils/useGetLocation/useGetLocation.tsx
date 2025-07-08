import { createContext, useContext, useState, useEffect, type ReactNode, type FC } from "react";

type CityContextType = {
    coord: { lat: number; lon: number } | null,
    error: { cod: number, message: string } | null
}| null;

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
                    coord: {
                        lat: position.coords.latitude,
                        lon: position.coords.longitude,
                    },
                    error: null
                });
            },
            (error) => {
                setCity({  coord: null,  error: { cod: error.code, message: error.message}  });
            }
        );
    }, []);

    return <CityContext.Provider value={city}>{children}</CityContext.Provider>;
};
