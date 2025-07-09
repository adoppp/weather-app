import type { RootState } from "@/store";

export const errorSelector = (state: RootState) => state.error.data;