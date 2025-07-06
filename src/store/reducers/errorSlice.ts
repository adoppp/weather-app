import { createSlice } from "@reduxjs/toolkit"

import { getCurrentWeather, getForecast } from "@store/operations/weatherThunk";

type ErrorDataType = {
    cod: number,
    message: string
} | null;

interface errorState {
    data: ErrorDataType;
};

const initialState: errorState = {
    data: null
};

const resetError = (state: errorState) => { state.data = null };

const setError = (state: errorState, action: any) => { state.data = action.payload as ErrorDataType };

const errorSlice = createSlice({
    name: "error",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getCurrentWeather.pending, resetError)
        .addCase(getCurrentWeather.fulfilled, resetError)
        .addCase(getCurrentWeather.rejected, setError)
        .addCase(getForecast.pending, resetError)
        .addCase(getForecast.fulfilled, resetError)
        .addCase(getForecast.rejected, setError)
    },
})

export const errorReducer = errorSlice.reducer;