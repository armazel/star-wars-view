import { RootState } from "../store";
import { StarShipsData } from "../types";

export const getStarShips= (state: RootState): StarShipsData[] => state.starShips?.data;

export const getStarShipsTotalItems = (state: RootState): number => state.starShips.count;
