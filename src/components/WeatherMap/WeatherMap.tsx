import { type FC } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import classNames from "classnames/bind";

import styles from "@/components/WeatherMap/WeatherMap.module.scss";

import { useWeatherMap } from "@/components/WeatherMap/WeatherMap.hooks";

const cn = classNames.bind(styles);

export const WeatherMap: FC = () => {
    const { weather, layer, API_KEY } = useWeatherMap()

    return (
        <>
            {
                weather && 
                <MapContainer center={[weather?.coord.lat as number,  weather?.coord.lon as number]} zoom={6} scrollWheelZoom={false} className={cn("container_map")}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                    />

                    <TileLayer
                        url={`https://tile.openweathermap.org/map/${layer}/{z}/{x}/{y}.png?appid=${API_KEY}`}
                        attribution='&copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>'
                    />

                    <Marker position={[weather?.coord.lat as number,  weather?.coord.lon as number]}>
                        <Popup>
                        Your location
                        </Popup>
                    </Marker>
                </MapContainer> 
            }
        </>
    );
};