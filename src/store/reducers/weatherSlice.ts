import { createSlice } from "@reduxjs/toolkit";
import { getCurrentWeather, getForecast } from "@/store/operations/weatherThunk";
import type { WeatherResponse } from "@/store/reducers/weatherSlice.types";

const initialState: WeatherResponse = {
    todayData: null,
    forecastData: null,
    layer: "temp_new",
};

const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        setLayer: (state, action) => {
            state.layer = action.payload;
        }
    },
    extraReducers(builder) {
        builder.addCase(getCurrentWeather.fulfilled, (state, action) => {
            state.todayData = action.payload;
        })
        .addCase(getForecast.fulfilled, (state, action) => {
            state.forecastData = action.payload;
        })
    },
});

export const { setLayer } = weatherSlice.actions;
export const weatherReducer = weatherSlice.reducer;