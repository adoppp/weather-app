import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "@/store/operations/api";

const API_KEY = import.meta.env.VITE_API_KEY;

interface GetWeatherProps {
    city?: string,
    lng?: string,
    cords?: {
        lat: number,
        lon: number,
    },
};

const REJECTED = (e: any, thunkAPI: any) => { return thunkAPI.rejectWithValue(e.response?.data || "Unknown error") };

export const getCurrentWeather = createAsyncThunk(
    "weather/getCurrentWeather",
    async ({ city, lng = "en", cords}: GetWeatherProps, thunkAPI) => {
        try {
            const response = await instance.get(
                `weather?${cords ? `lat=${cords.lat}&lon=${cords.lon}` : `q=${city}`}&units=metric&lang=${lng}&appid=${API_KEY}`
            );
            return response.data;
        } catch (error: any) {
            REJECTED(error, thunkAPI);
        }
    }
);

export const getForecast = createAsyncThunk(
    "weather/getforecast",
    async ({ city, lng = "en", cords }: GetWeatherProps, thunkAPI: any) => {
        try {
            const response = await instance.get(`forecast?${cords ? `lat=${cords.lat}&lon=${cords.lon}` : `q=${city}`}&units=metric&lang=${lng}&appid=${API_KEY}`)
            
            return response.data;
        } catch (error) {
            REJECTED(error, thunkAPI);
        }
    }
);