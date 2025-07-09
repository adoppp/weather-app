import type { RootState } from "@/store";

export const citiesSelector = (state: RootState) => state.citiesData.data;