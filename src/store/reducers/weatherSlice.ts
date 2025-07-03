import { createSlice } from "@reduxjs/toolkit";
import { getCurrentWeather, getForecast } from "@/store/operations/weatherThunk";
import type { WeatherResponse } from "@/store/reducers/weatherSlice.types";

const initialState: WeatherResponse = {
    todayData: null,
    forecastData: null
};

const themeSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getCurrentWeather.fulfilled, (state, action) => {
            state.todayData = action.payload;
        })
        .addCase(getForecast.fulfilled, (state, action) => {
            state.forecastData = action.payload;
        })
    },
});

export const weatherReducer = themeSlice.reducer;
