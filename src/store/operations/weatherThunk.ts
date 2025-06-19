import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "@/store/operations/api";

const API_KEY = import.meta.env.VITE_API_KEY;

interface GetCurrentWeatherProps {
    city: string,

}

export const getCurrentWeather = createAsyncThunk(
    "currentWeather/getCurrentWeather",
    async ({ city }: GetCurrentWeatherProps, thunkAPI) => {
        try {
            const response = await instance.get(
                `weather?q=${encodeURIComponent(city)}&units=metric&lang=en&appid=${API_KEY}`
            );
            return response.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response?.data || "Unknown error");
        }
    }
);