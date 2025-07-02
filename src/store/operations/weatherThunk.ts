import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "@/store/operations/api";

const API_KEY = import.meta.env.VITE_API_KEY;

interface GetWeatherProps {
    city: string,
    lng?: string,

}

const REJECTED = (e: any, thunkAPI: any) => { return thunkAPI.rejectWithValue(e.response?.data || "Unknown error") };

export const getCurrentWeather = createAsyncThunk(
    "weather/getCurrentWeather",
    async ({ city, lng = "en" }: GetWeatherProps, thunkAPI) => {
        try {
            const response = await instance.get(
                `weather?q=${city}&units=metric&lang=${lng}&appid=${API_KEY}`
            );
            return response.data;
        } catch (error: any) {
            REJECTED(error, thunkAPI);
        }
    }
);

export const getforecast = createAsyncThunk(
    "weather/getforecast",
    async ({ city, lng = "en" }: GetWeatherProps, thunkAPI: any) => {
        try {
            const response = await instance.get(`forecast?q=${city}&units=metric&lang=${lng}&appid=${API_KEY}`)
            
            return response.data;
        } catch (error) {
            REJECTED(error, thunkAPI);
        }
    }
);