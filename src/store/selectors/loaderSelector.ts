import type { RootState } from "@/store";

export const loaderSelector = (state: RootState) => state.loader.isLoading;