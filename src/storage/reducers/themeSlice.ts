import { createSlice } from "@reduxjs/toolkit";

const getSystemTheme = (): 'light' | 'dark' => {
    if (typeof window !== 'undefined') {
        return window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light';
    }
    return 'light';
};

const initialState = {
    theme: getSystemTheme(),
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme(state) {
            state.theme = state.theme === 'dark' ? 'light' : 'dark';
        }
    }
});

export const { toggleTheme } = themeSlice.actions;

export const themeReducer = themeSlice.reducer;
