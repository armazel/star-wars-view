import { createAction } from "redux-actions";

import { LoadCardParams } from "../types";

export const GET_PLANETS_FETCH_REQUEST
    = "planets/load/FETCH_REQUEST";
export const GET_PLANETS_FETCH_SUCCESS
    = "planets/load/FETCH_SUCCESS";
export const GET_PLANETS_FETCH_ERROR
    = "planets/load/FETCH_ERROR";

export const GET_PLANETS_ITEM_BY_ID_FETCH_REQUEST
    = "planetsItem/load/FETCH_REQUEST";
export const GET_PLANETS_ITEM_BY_ID_FETCH_SUCCESS
    = "planetsItem/load/FETCH_SUCCESS";
export const GET_PLANETS_ITEM_BY_ID_FETCH_ERROR
    = "planetsItem/load/FETCH_ERROR";

export const loadPlanetsData = createAction(
    GET_PLANETS_FETCH_REQUEST,
    (params: LoadCardParams) => (params)
);
export const loadPlanetsDataSuccess = createAction(GET_PLANETS_FETCH_SUCCESS);
export const loadPlanetsDataError = createAction(GET_PLANETS_FETCH_ERROR);

export const loadPlanetItemById = createAction(
    GET_PLANETS_ITEM_BY_ID_FETCH_REQUEST,
    (id: string) => ({ id })
);
export const loadPlanetItemByIdSuccess = createAction(GET_PLANETS_ITEM_BY_ID_FETCH_SUCCESS);
export const loadPlanetItemByIdError = createAction(GET_PLANETS_ITEM_BY_ID_FETCH_ERROR);
