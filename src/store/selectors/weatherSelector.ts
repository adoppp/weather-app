import type { RootState } from "@/store";

export const weatherSelector = (state: RootState) => state.weatherData.todayData;

export const forecastSelector = (state: RootState) => state.weatherData.forecastData;

export const mapSelector = (state: RootState) => state.weatherData.layer;