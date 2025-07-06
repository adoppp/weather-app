import type { RootState } from "@store/store";

export const errorSelector = (state: RootState) => state.error.data;