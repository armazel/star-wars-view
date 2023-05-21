import { createSelector } from "reselect";

import { RootState } from "../store";
import { PlanetsData } from "../types";

export const getPlanets = (state: RootState): PlanetsData[] => state.planets?.data;

export const getPlanetsTotalItems = (state: RootState): number => state.planets.count;

export const getPlanetsItemId = (state: RootState, props: {id: string | null | undefined}) => props.id;

export const getPlanetDetailsItem = (state: RootState): PlanetsData => state.planets?.detailItem;

export const getPlanetsSearchData = (state: RootState): string => state.planets?.searchText;

export const getPlanetSchema = (state: RootState) => state.planets?.schema;

export const getPlanetsItemById = createSelector(
    getPlanets,
    getPlanetDetailsItem,
    getPlanetsItemId,
    (data, detailsItem, id) => data.length
        ? data.find(dataItem => dataItem.id === id)
        : detailsItem,
);
