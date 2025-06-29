import type { RootState } from "@/store/store";

export const weatherSelector = (state: RootState) => state.weatherData.todayData;

export const forecastSelector = (state: RootState) => state.weatherData.forecastData;