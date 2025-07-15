import { WeatherMap } from "@/sections/map/WeatherMap/WeatherMap";
import { Select } from "@/ui/Select/Select";
import { useMapPage } from "@pages/MapPage/MapPage.hooks";

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