import { RootState } from "../store";

export const getsErrorPage = (state: RootState): boolean => state.error.isError;