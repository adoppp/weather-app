import { createSlice } from "@reduxjs/toolkit";
import { getCurrentWeather, getForecast } from "@store/operations/weatherThunk";

interface LoaderState {
    isLoading: boolean
};

const initialState: LoaderState = {
    isLoading: false
};

const setLoaderTrue = (state: LoaderState) => { state.isLoading = true };

const setLoaderFalse = (state: LoaderState) => { state.isLoading = false };

const loaderSlice = createSlice({
    name: "loader",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getCurrentWeather.pending, setLoaderTrue)
        .addCase(getCurrentWeather.fulfilled, setLoaderFalse)
        .addCase(getCurrentWeather.rejected, setLoaderFalse)
        .addCase(getForecast.pending, setLoaderTrue)
        .addCase(getForecast.fulfilled, setLoaderFalse)
        .addCase(getForecast.rejected, setLoaderFalse)
    },
});

export const loaderReducer = loaderSlice.reducer;