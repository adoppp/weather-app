import type { RootState } from "@/store/store";

export const citiesSelector = (state: RootState) => state.citiesData.data;