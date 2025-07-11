import { createSlice, isAnyOf } from "@reduxjs/toolkit"

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
        builder.addMatcher(
            isAnyOf(
                getCurrentWeather.pending,
                getForecast.pending
            ),
            resetError,
        )
        .addMatcher(
            isAnyOf(
                getCurrentWeather.fulfilled,
                getCurrentWeather.rejected,
                getForecast.fulfilled,
                getForecast.rejected
            ),
            setError,
        )
    },
})

export const errorReducer = errorSlice.reducer;