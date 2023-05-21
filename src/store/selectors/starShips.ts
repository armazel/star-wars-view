import { createSelector } from "reselect";

import { RootState } from "../store";
import { StarShipsData } from "../types";

export const getStarShips= (state: RootState): StarShipsData[] => state.starShips?.data;

export const getStarShipsTotalItems = (state: RootState): number => state.starShips.count;

export const getStarShipsItemId = (state: RootState, props: {id: string | null | undefined}) => props.id;

export const getStarShipsItemById = createSelector(
    getStarShips,
    getStarShipsItemId,
    (data, id) => data.find(dataItem => dataItem.id === id)
);
