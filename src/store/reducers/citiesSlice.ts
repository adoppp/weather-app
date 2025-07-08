import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface CityState {
    data: { city: string, coords?: { lat: number | null, lon: number | null} | null, index: boolean }[];
}

const initialState: CityState = {
    data: []
};

const citiesSlice = createSlice({
    name: "city",
    initialState,
    reducers: {
        addCity(state, action: PayloadAction<{ city: string, coords?: { lat: number, lon: number}, index: boolean}>) {
            const exists = state.data.some(item => item.city === action.payload.city);
            
            if (!exists) {
                state.data.push({ 
                    city: action.payload.city.charAt(0).toLocaleUpperCase() + action.payload.city.slice(1), 
                    coords: { 
                        lat: action.payload.coords?.lat || null, 
                        lon: action.payload.coords?.lon || null
                    },
                    index: action.payload.index 
                });
            }
        },
        deleteCity(state, action: PayloadAction<string>) {
            const filtered = state.data.filter(item => item.city !== action.payload);
            state.data = filtered;
        }
    }
});

export const { addCity, deleteCity } = citiesSlice.actions;
export const citiesReducer = citiesSlice.reducer;