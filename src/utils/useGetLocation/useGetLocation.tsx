import { createContext, useContext, useState, useEffect, type ReactNode, type FC } from "react";
import axios from "axios";

type CityContextType = {
    coord: { lat: number; lon: number } | null,
    error: { cod: number, message: string } | null,
    city: { name: string, coords: { lat: number, lon: number}} | null
} | null;

const CityContext = createContext<CityContextType>(null);

export const useGetLocation = () => useContext(CityContext);

interface CityProviderProps {
    children: ReactNode;
};

export const CityProvider: FC<CityProviderProps> = ({ children }) => {
    const [city, setCity] = useState<CityContextType>(null);
    const API_KEY = import.meta.env.VITE_API_KEY;

    const getCityByCoordinates = async (lat: number, lon: number) => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${API_KEY}`);
            const data = response.data[0];

            if (!data) throw new Error("City not found")

            return { city: data.name, lat: data.lat, lon: data.lon};
        } catch (error) {
            console.error(error);
            return null;
        }
    };

    useEffect(() => {
    const fetchGeo = async () => {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
                const cityData = await getCityByCoordinates(latitude, longitude);

                setCity({
                    coord: {
                        lat: latitude,
                        lon: longitude,
                    },
                    error: null,
                    city: { 
                        name: cityData?.city, 
                        coords: { 
                            lat: cityData?.lat, 
                            lon: cityData?.lon 
                        }
                    },
                });
            },
            (error) => {
                setCity({
                    coord: null,
                    error: { cod: error.code, message: error.message },
                    city: null,
                });
            }
        );
    };

    fetchGeo();
    }, []);


    return <CityContext.Provider value={city}>{children}</CityContext.Provider>;
};
