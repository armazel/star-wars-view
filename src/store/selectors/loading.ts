import { RootState } from "../store";

export const getIsLoading = (state: RootState): boolean => state.loading.isLoading;

export const getIsLoaded = (state: RootState): boolean => state.loading.isLoaded;
