import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "@/store/operations/api";

const API_KEY = import.meta.env.VITE_API_KEY;

interface GetCurrentWeatherProps {
    city: string,

}

const REJECTED = (e: any, thunkAPI: any) => { return thunkAPI.rejectWithValue(e.response?.data || "Unknown error") };

export const getCurrentWeather = createAsyncThunk(
    "weather/getCurrentWeather",
    async ({ city }: GetCurrentWeatherProps, thunkAPI) => {
        try {
            const response = await instance.get(
                `weather?q=${encodeURIComponent(city)}&units=metric&lang=en&appid=${API_KEY}`
            );
            return response.data;
        } catch (error: any) {
            REJECTED(error, thunkAPI);
        }
    }
);

export const getforecast = createAsyncThunk(
    "weather/getforecast",
    async ({ city }: GetCurrentWeatherProps, thunkAPI: any) => {
        try {
            const response = await instance.get(`forecast?q=${city}&units=metric&lang=en&appid=${API_KEY}`)
            
            return response.data;
        } catch (error) {
            REJECTED(error, thunkAPI);
        }
    }
);