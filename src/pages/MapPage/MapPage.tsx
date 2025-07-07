import { WeatherMap } from "@/components/WeatherMap/WeatherMap";
import { Select } from "@/ui/Select/Select";
import { useMapPage } from "./MapPage.hooks";

const MapPage = () => {
    const { layer, mapOptions, handleMap, loadingOrError } = useMapPage();

    return(
        <>
        { 
            loadingOrError ? loadingOrError :
            <>
                <Select sValue={layer} options={mapOptions} onChange={handleMap} />
                <WeatherMap />
            </>
        }
        </>
    )
};

export default MapPage;