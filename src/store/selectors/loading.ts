import { RootState } from "../store";

export const getIsLoading = (state: RootState): boolean => state.loading.isLoading;
