import type { RootState } from "@/store/store";

export const weatherSelector = (state: RootState) => state.currentWeather.data;