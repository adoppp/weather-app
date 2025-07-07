import { WeatherMap } from "@/components/WeatherMap/WeatherMap";
import { Select } from "@/ui/Select/Select";
import { useMapPage } from "./MapPage.hooks";

const MapPage = () => {
    const { layer, mapOptions, handleMap } = useMapPage();

    return(
        <>
            <Select sValue={layer} options={mapOptions} onChange={handleMap} />
            <WeatherMap />
        </>
    )
};

export default MapPage;