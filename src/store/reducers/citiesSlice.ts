import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface CityState {
    data: string[];
}

const initialState: CityState = {
    data: []
};

const citiesSlice = createSlice({
    name: "city",
    initialState,
    reducers: {
        addCity(state, action: PayloadAction<string>) {
            const exists = state.data.some(city => city === action.payload);
            
            if (!exists) {
                state.data.push(action.payload.charAt(0).toLocaleUpperCase() + action.payload.slice(1));
            }
        },
        deleteCity(state, action: PayloadAction<string>) {
            const filtered = state.data.filter(city => city !== action.payload);
            state.data = filtered;
        }
    }
});

export const { addCity, deleteCity } = citiesSlice.actions;
export const citiesReducer = citiesSlice.reducer;