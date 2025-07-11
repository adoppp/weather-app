import { createSlice, isAnyOf } from "@reduxjs/toolkit";

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
        builder.addMatcher(
            isAnyOf(
                getCurrentWeather.pending,
                getForecast.pending
            ),
            setLoaderTrue,
        )
        .addMatcher(
            isAnyOf(
                getCurrentWeather.fulfilled,
                getCurrentWeather.rejected,
                getForecast.fulfilled,
                getForecast.rejected
            ),
            setLoaderFalse,
        )
    },
});

export const loaderReducer = loaderSlice.reducer;