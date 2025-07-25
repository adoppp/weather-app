export type WeatherResponse = {
    todayData: {
        coord: {
            lon: number,
            lat: number,
        },
        weather: Array<{
            id: number;
            main: string;
            description: string;
            icon: string;
        }>,
        base: string,
        main: {
            temp: number,
            feels_like: number,
            temp_min: number,
            temp_max: number,
            pressure: number,
            humidity: number,
            sea_level?: number,
            grnd_level?: number,
        },
        visibility: number,
        wind: {
            speed: number,
            deg: number,
        },
        clouds: {
            all: number,
        },
        dt: number,
        sys: {
            type: number,
            id: number,
            country: string,
            sunrise: number,
            sunset: number,
        },
        timezone: number,
        id: number,
        name: string,
        cod: number,
    } | null,
    forecastData: {
    cod: string;
    message: number;
    cnt: number;
    list: ForecastItem[];
    city: {
        id: number;
        name: string;
        coord: { lat: number; lon: number };
        country: string;
        timezone: number;
        sunrise: number;
        sunset: number;
    };
    } | null,
    layer: "clouds_new" | "precipitation_new" | "pressure_new" | "wind_new" | "temp_new"
};

export interface ForecastItem {
    dt: number;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
        sea_level?: number;
        grnd_level?: number;
    };
    weather: {
        id: number;
        main: string;
        description: string;
        icon: string;
    }[];
    clouds: {
        all: number;
    };
    wind: {
        speed: number;
        deg: number;
        gust?: number;
    };
    visibility: number;
    pop: number;
    rain?: { '3h': number };
    snow?: { '3h': number };
    sys: { pod: string };
    dt_txt: string;
};