import { RootState } from "../store";
import { PlanetsData } from "../types";

export const getPlanets = (state: RootState): PlanetsData[] => state.planets?.data;
