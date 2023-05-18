import { RootState } from "../store";
import { StarShipsData } from "../types";

export const getStarShips= (state: RootState): StarShipsData[] => state.starShips?.data;
