import type { RootState } from "@/storage/store";

export const themeSelector = (state: RootState) => state.theme.theme;