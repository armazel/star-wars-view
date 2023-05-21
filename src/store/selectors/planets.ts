import { createSelector } from "reselect";

import { RootState } from "../store";
import { PlanetsData } from "../types";

export const getPlanets = (state: RootState): PlanetsData[] => state.planets?.data;

export const getPlanetsTotalItems = (state: RootState): number => state.planets.count;

export const getPlanetsItemId = (state: RootState, props: {id: string | null | undefined}) => props.id;

export const getPlanetsItemById = createSelector(
    getPlanets,
    getPlanetsItemId,
    (data, id) => data.find(dataItem => dataItem.id === id)
);
