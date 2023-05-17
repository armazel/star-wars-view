import { createSelector } from "reselect";

import { RootState } from "../store";
import { StarShipsData } from "../types";

export const getStarShips= (state: RootState): StarShipsData[] => state.starShips?.data;

export const getStarShipsTotalItems = (state: RootState): number => state.starShips.count;

export const getStarShipsItemId = (state: RootState, props: {id: string | null | undefined}) => props.id;

export const getStarShipDetailsItem = (state: RootState): StarShipsData => state.starShips?.detailItem;

export const getStarShipsSearchData = (state: RootState): string => state.starShips?.searchText;

export const getStarShipSchema = (state: RootState) => state.starShips?.schema;

export const getStarShipsItemById = createSelector(
    getStarShips,
    getStarShipDetailsItem,
    getStarShipsItemId,
    (data, detailsItem, id) => data.length
        ? data.find(dataItem => dataItem.id === id)
        : detailsItem,
);
